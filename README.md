<div align="center">

# 🌐 Cencera Comate Downloader & Release Registry

**Official Distribution Hub and In-App Update Mirror for Cencera Comate Browser**

[![Version](https://img.shields.io/badge/Release-V0.1.103_BASE-00ddff?style=for-the-badge&logo=electron&logoColor=white)](https://github.com/cencera-xyz/comate-downloader/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-blue?style=for-the-badge)](https://github.com/cencera-xyz/comate-downloader/releases)
[![Domain](https://img.shields.io/badge/Official%20Site-cencera.xyz-purple?style=for-the-badge)](https://accounts.cencera.xyz)

</div>

---

## 📌 About This Repository

This repository acts as the primary release registry, version manifest provider, and binary artifact mirror for **Cencera Comate**.

The Comate desktop app communicates directly with this repository's manifest (`version.json`) through its internal core backend daemon to:
- Automatically check for latest releases without visiting third-party pages
- Provide verified direct downloads of operating system installation packages
- Power Comate's in-app 1-click update system

---

## 📥 Verified Downloads (`V0.1.103`)

| Platform | Format | Architecture | Size | SHA-256 Hash | Direct Download |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Windows** | Setup Installer (`.exe`) | x64 | ~108 MB | `1f92aa1e35b7adc9...` | [Download Setup](https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.103/cencera-comate-setup_0.1.103_x64.exe) |
| **Windows** | Portable (`.exe`) | x64 | ~108 MB | `bcccb5bf8e860c37...` | [Download Portable](https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.103/cencera-comate-portable_0.1.103_x64.exe) |
| **Linux** | Debian / Ubuntu (`.deb`) | x64 (amd64) | ~96 MB | `6b7779fa139f0271...` | [Download .deb](https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.103/cencera-comate_0.1.103_amd64.deb) |
| **Linux** | Universal AppImage (`.AppImage`) | x64 | ~122 MB | `b3b18cb618fe43e7...` | [Download AppImage](https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.103/cencera-comate_0.1.103_x86_64.AppImage) |
| **macOS** | Apple Disk Image (`.dmg`) | Universal | — | Pending | [Download .dmg](https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.103/cencera-comate_0.1.103.dmg) |

*Full verification hashes are published in [`checksums.txt`](./checksums.txt).*

---

## 🚀 Installation Runbook

### Linux (Debian / Ubuntu / Mint)
```bash
# Install .deb package
sudo dpkg -i cencera-comate_0.1.103_amd64.deb
sudo apt-get install -f # Fix any missing dependencies if needed
```

### Linux (AppImage)
```bash
chmod +x cencera-comate_0.1.103_x86_64.AppImage
./cencera-comate_0.1.103_x86_64.AppImage
```

### Windows
- Run `cencera-comate-setup_0.1.103_x64.exe` to install Comate to Program Files with desktop and Start menu shortcuts.
- Or run `cencera-comate-portable_0.1.103_x64.exe` without installation.

---

## 🔒 Verification & Safety
All official releases are built from verified sources and hashed with SHA-256. To verify your download:
```bash
# Linux
sha256sum cencera-comate_0.1.103_amd64.deb

# Windows (PowerShell)
Get-FileHash .\cencera-comate-setup_0.1.103_x64.exe -Algorithm SHA256
```
