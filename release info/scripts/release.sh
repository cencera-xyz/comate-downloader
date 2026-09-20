#!/usr/bin/env bash
# ==============================================================================
# Cencera Comate Downloader - Release Automation Script
# Repository: https://github.com/cencera-xyz/comate-downloader
# ==============================================================================

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Cencera Comate Release Publisher ===${NC}"

# 1. Ensure we are in the repository root
if [ ! -f "version.json" ]; then
  echo -e "${RED}Error: version.json not found in the current directory.${NC}"
  echo "Please run this script from the root of comate-downloader."
  exit 1
fi

# 2. Extract version from version.json
VERSION=$(node -e 'console.log(require("./version.json").version)')
PRODUCT_NAME=$(node -e 'console.log(require("./version.json").productName || "Cencera Comate")')
APP_ID=$(node -e 'console.log(require("./version.json").appId || "xyz.cencera.comate")')

if [ -z "$VERSION" ]; then
  echo -e "${RED}Error: Could not parse version from version.json.${NC}"
  exit 1
fi

TAG="v${VERSION}"
echo -e "Target Product : ${GREEN}${PRODUCT_NAME}${NC} (${APP_ID})"
echo -e "Target Version : ${GREEN}${VERSION}${NC} (${TAG})"

# 3. Check for GitHub CLI (gh) or git
if ! command -v gh &> /dev/null; then
  echo -e "${YELLOW}Warning: 'gh' (GitHub CLI) is not installed.${NC}"
  echo "You can install it via: sudo apt install gh / brew install gh"
  echo "Falling back to git commit & tag only."
  HAS_GH=false
else
  HAS_GH=true
fi

# 4. Create checksums for all installer binaries in downloads/
echo -e "\n${BLUE}--> Generating SHA-256 Checksums...${NC}"
mkdir -p downloads
CHECKSUM_FILE="checksums.txt"
rm -f "$CHECKSUM_FILE"

FILE_COUNT=0
for file in downloads/*; do
  if [ -f "$file" ]; then
    sha256sum "$file" >> "$CHECKSUM_FILE"
    echo "  + Added checksum for $(basename "$file")"
    FILE_COUNT=$((FILE_COUNT + 1))
  fi
done

if [ "$FILE_COUNT" -eq 0 ]; then
  echo -e "${YELLOW}Notice: No installer files found in downloads/.${NC}"
  echo "Tip: Copy built binaries (e.g. 'Cencera Comate Setup ${VERSION}.exe') into downloads/ before releasing."
else
  echo -e "${GREEN}✓ Checksums saved to ${CHECKSUM_FILE}${NC}"
fi

# 5. Git commit version.json & checksums
echo -e "\n${BLUE}--> Staging & committing release manifest...${NC}"
git add version.json "$CHECKSUM_FILE" || true
if ! git diff-index --quiet HEAD --; then
  git commit -m "chore(release): publish version ${TAG}"
  echo -e "${GREEN}✓ Committed version.json and checksums.${NC}"
else
  echo "Manifest is already up to date with HEAD."
fi

# 6. Push commit to main
echo -e "\n${BLUE}--> Pushing changes to main branch...${NC}"
git push origin main || {
  echo -e "${YELLOW}Warning: Failed to push to origin main. Ensure you have push access.${NC}"
}

# 7. Create or update Git tag
echo -e "\n${BLUE}--> Creating Git tag ${TAG}...${NC}"
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo -e "${YELLOW}Tag ${TAG} already exists locally. Updating...${NC}"
  git tag -d "$TAG"
fi
git tag -a "$TAG" -m "Release ${TAG} - ${PRODUCT_NAME}"
git push origin "$TAG" --force || {
  echo -e "${YELLOW}Warning: Failed to push tag ${TAG} to origin.${NC}"
}
echo -e "${GREEN}✓ Git tag ${TAG} pushed successfully.${NC}"

# 8. Create GitHub Release & Upload Assets (if gh is installed)
if [ "$HAS_GH" = true ]; then
  echo -e "\n${BLUE}--> Creating GitHub Release via 'gh'...${NC}"
  
  # Check if release already exists
  if gh release view "$TAG" &> /dev/null; then
    echo -e "${YELLOW}Release ${TAG} already exists on GitHub. Uploading / overwriting assets...${NC}"
    UPLOAD_ARGS=()
    for file in downloads/*; do
      [ -f "$file" ] && UPLOAD_ARGS+=("$file")
    done
    [ -f "$CHECKSUM_FILE" ] && UPLOAD_ARGS+=("$CHECKSUM_FILE")
    
    if [ ${#UPLOAD_ARGS[@]} -gt 0 ]; then
      gh release upload "$TAG" "${UPLOAD_ARGS[@]}" --clobber
    fi
  else
    RELEASE_NOTES=$(node -e '
      const v = require("./version.json");
      console.log(Array.isArray(v.releaseNotes) ? v.releaseNotes.join("\n- ") : (v.releaseNotes || "Release " + v.version));
    ')

    UPLOAD_ARGS=()
    for file in downloads/*; do
      [ -f "$file" ] && UPLOAD_ARGS+=("$file")
    done
    [ -f "$CHECKSUM_FILE" ] && UPLOAD_ARGS+=("$CHECKSUM_FILE")

    gh release create "$TAG" "${UPLOAD_ARGS[@]}" \
      --title "${PRODUCT_NAME} ${TAG}" \
      --notes "- ${RELEASE_NOTES}"
  fi
  echo -e "${GREEN}✓ GitHub Release ${TAG} published successfully!${NC}"
fi

echo -e "\n${GREEN}====================================================${NC}"
echo -e "${GREEN}  Release ${TAG} is now live on comate-downloader!${NC}"
echo -e "${GREEN}  Raw manifest: https://raw.githubusercontent.com/cencera-xyz/comate-downloader/main/version.json${NC}"
echo -e "${GREEN}====================================================${NC}"
