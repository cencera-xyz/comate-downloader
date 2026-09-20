<div align="center">

# 🌐 Cencera Comate Downloader & Release Registry

**Official Distribution Hub and In-App Update Mirror for Cencera Comate Browser**

[![Version](https://img.shields.io/badge/Release-0.0.97_Beta-00ddff?style=for-the-badge&logo=electron&logoColor=white)](https://github.com/cencera-xyz/comate-downloader/releases)
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

## 📥 Latest Downloads (`v0.0.97`)

| Platform | Format | Architecture | Download Link |
| :--- | :--- | :--- | :--- |
| **Windows** | Setup Installer (`.exe`) | x64 | [Download Installer](https://github.com/cencera-xyz/comate-downloader/releases/latest/download/Cencera%20Comate%20Setup%200.0.97.exe) |
| **Windows** | Portable (`.exe`) | x64 | [Download Portable](https://github.com/cencera-xyz/comate-downloader/releases/latest/download/Cencera%20Comate%200.0.97.exe) |
| **Linux** | Debian / Ubuntu (`.deb`) | x64 | [Download .deb](https://github.com/cencera-xyz/comate-downloader/releases/latest/download/comate-browser_0.0.97_amd64.deb) |
| **Linux** | Universal AppImage (`.AppImage`) | x64 | [Download AppImage](https://github.com/cencera-xyz/comate-downloader/releases/latest/download/Cencera%20Comate-0.0.97.AppImage) |
| **macOS** | Apple Disk Image (`.dmg`) | Universal / x64 | [Download .dmg](https://github.com/cencera-xyz/comate-downloader/releases/latest/download/Cencera%20Comate-0.0.97.dmg) |

---

## 🗂️ Repository Structure

```text
comate-downloader/
├── README.md                          # Repository documentation & installation guide
├── version.json                       # In-app version detection manifest (Source of Truth)
├── releases/
│   ├── latest/
│   │   ├── Cencera-Comate-Setup.exe   # Windows NSIS installer
│   │   ├── Cencera-Comate.exe         # Windows portable executable
│   │   ├── comate-browser_amd64.deb   # Debian / Ubuntu package
│   │   └── Cencera-Comate.AppImage    # Linux portable binary
│   └── archive/                       # Historical builds (v0.0.96, etc.)
└── scripts/
    └── publish.sh                     # Helper script to sync release artifacts
