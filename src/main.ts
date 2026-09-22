/**
 * Comate Landing Page - Main TypeScript Orchestrator
 * Fully modular component architecture
 */
import './style.css';
import type { OSPlatform, DeviceInfo } from './types';
import { renderHeader, initHeader } from './components/Header';
import { renderHero, initHero } from './components/Hero';
import { renderBrowserMockup, initBrowserMockup } from './components/BrowserMockup';
import { renderAxioms } from './components/Axioms';
import { renderBentoGrid, initBentoGrid } from './components/BentoGrid';
import { renderWorkflows, initWorkflows } from './components/Workflows';
import { renderArchitecture } from './components/Architecture';
import { renderPrivacyVault } from './components/PrivacyVault';
import { renderDownloadMatrix, activatePlatformTab, initDownloadMatrix } from './components/DownloadMatrix';
import { renderFAQ, initFAQ } from './components/FAQ';
import { renderCTABanner } from './components/CTABanner';
import { renderFooter, initFooter } from './components/Footer';
import { renderModals, initModals } from './components/Modals';
import { BrandIcons, LucideIcons } from './components/Icons';

const WIN_PORTABLE_URL = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate-portable_0.0.99_x64.exe';
const LINUX_DEB_URL = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate_0.0.99_amd64.deb';

function detectClientDevice(): DeviceInfo {
  const nav = window.navigator as any;
  const ua = (nav.userAgent || '').toLowerCase();
  const platform = (nav.userAgentData?.platform || nav.platform || '').toLowerCase();

  // Comate / Electron is always a desktop app — never treat it as mobile.
  const isElectron = /electron/i.test(ua) || typeof (window as any).comateAPI !== 'undefined';

  const isAndroid = !isElectron && (/android/i.test(ua) || /android/i.test(platform));
  const isIOS = !isElectron && (/iphone|ipad|ipod/i.test(ua) || (platform.includes('mac') && (nav.maxTouchPoints || 0) > 1));
  const isTablet = isIOS && (/ipad/i.test(ua) || (nav.maxTouchPoints || 0) > 1);
  // Guard: never flag Electron/Comate as mobile regardless of window size.
  const isMobile = !isElectron && (isAndroid || isIOS || /mobile|tablet|webos|blackberry|iemobile|opera mini/i.test(ua) || (window.innerWidth <= 640 && ('ontouchstart' in window || (nav.maxTouchPoints || 0) > 0)));

  if (isAndroid) {
    return {
      os: 'linux',
      deviceType: 'android',
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      detectedName: 'Android Device',
      recommendedExt: 'Desktop Only',
      recommendedSize: 'Windows & Linux',
      downloadUrl: '#downloads',
      downloadLabel: 'Desktop Browser (Win / Linux)',
      downloadSub: 'Comate runs on PC • Open link on desktop',
      detectedNotice: 'Detected Android • Comate runs on Windows & Linux PCs'
    };
  }

  if (isIOS) {
    return {
      os: 'macos',
      deviceType: 'ios',
      isMobile: true,
      isTablet,
      isDesktop: false,
      detectedName: isTablet ? 'Apple iPad' : 'Apple iPhone',
      recommendedExt: 'Desktop Only',
      recommendedSize: 'Windows & Linux',
      downloadUrl: '#downloads',
      downloadLabel: 'Desktop Browser (Win / Linux)',
      downloadSub: 'Comate runs on PC • Open link on desktop',
      detectedNotice: `Detected ${isTablet ? 'iPadOS' : 'iOS'} • Comate runs on Windows & Linux PCs`
    };
  }

  if (isMobile) {
    return {
      os: 'windows',
      deviceType: 'unknown',
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      detectedName: 'Mobile Device',
      recommendedExt: 'Desktop Only',
      recommendedSize: 'Windows & Linux',
      downloadUrl: '#downloads',
      downloadLabel: 'Desktop Browser (Win / Linux)',
      downloadSub: 'Comate runs on PC • Open link on desktop',
      detectedNotice: 'Detected Mobile • Comate runs on Windows & Linux PCs'
    };
  }

  if (platform.includes('win') || ua.includes('windows')) {
    return {
      os: 'windows',
      deviceType: 'windows',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      detectedName: 'Windows PC (x64)',
      recommendedExt: '.exe Portable',
      recommendedSize: '107 MB',
      downloadUrl: WIN_PORTABLE_URL,
      downloadLabel: 'Download for Windows',
      downloadSub: 'V0.1.100 Portable (.exe) • 107 MB • Windows 10/11',
      detectedNotice: 'Detected Windows x64 • Free BASE'
    };
  }

  if (platform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os')) {
    return {
      os: 'macos',
      deviceType: 'macos',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      detectedName: 'macOS (Apple Silicon / Intel)',
      recommendedExt: '.dmg',
      recommendedSize: 'In Build',
      downloadUrl: '#downloads',
      downloadLabel: 'macOS Build in Development',
      downloadSub: 'Windows & Linux Available • macOS Universal Soon',
      detectedNotice: 'Detected macOS • Apple Silicon & Intel build compiling'
    };
  }

  // Default to Linux PC
  return {
    os: 'linux',
    deviceType: 'linux',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    detectedName: 'Linux (x86_64 / amd64)',
    recommendedExt: '.deb',
    recommendedSize: '95.7 MB',
    downloadUrl: LINUX_DEB_URL,
    downloadLabel: 'Download for Linux (.deb)',
    downloadSub: 'V0.1.100 (amd64) • 95.7 MB • Ubuntu / Debian',
    detectedNotice: 'Detected Linux x86_64 • Free BASE'
  };
}

function applyDeviceCustomization(deviceOrOS: DeviceInfo | OSPlatform): void {
  let device: DeviceInfo;

  if (typeof deviceOrOS === 'string') {
    const os = deviceOrOS;
    if (os === 'windows') {
      device = {
        os: 'windows',
        deviceType: 'windows',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        detectedName: 'Windows PC (x64)',
        recommendedExt: '.exe Portable',
        recommendedSize: '107 MB',
        downloadUrl: WIN_PORTABLE_URL,
        downloadLabel: 'Download for Windows',
        downloadSub: 'V0.1.100 Portable (.exe) • 107 MB • Windows 10/11',
        detectedNotice: 'Selected Windows x64 • Free BASE'
      };
    } else if (os === 'linux') {
      device = {
        os: 'linux',
        deviceType: 'linux',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        detectedName: 'Linux (x86_64 / amd64)',
        recommendedExt: '.deb',
        recommendedSize: '95.7 MB',
        downloadUrl: LINUX_DEB_URL,
        downloadLabel: 'Download for Linux (.deb)',
        downloadSub: 'V0.1.100 (amd64) • 95.7 MB • Ubuntu / Debian',
        detectedNotice: 'Selected Linux x86_64 • Free BASE'
      };
    } else {
      device = {
        os: 'macos',
        deviceType: 'macos',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        detectedName: 'macOS (Apple Silicon / Intel)',
        recommendedExt: '.dmg',
        recommendedSize: 'In Build',
        downloadUrl: '#downloads',
        downloadLabel: 'macOS Build in Development',
        downloadSub: 'Windows & Linux Available • macOS Universal Soon',
        detectedNotice: 'Selected macOS • Apple Silicon & Intel build compiling'
      };
    }
  } else {
    device = deviceOrOS;
  }

  // 1. Header Download Button & Icon
  const headerBtn = document.getElementById('header-download-btn') as HTMLAnchorElement | null;
  const headerBtnText = document.getElementById('header-download-text');
  const headerOsIcon = document.getElementById('header-os-icon');

  if (headerBtn) {
    headerBtn.href = device.downloadUrl;
    if (device.downloadUrl.startsWith('http')) {
      headerBtn.setAttribute('target', '_blank');
      headerBtn.setAttribute('rel', 'noopener noreferrer');
    } else {
      headerBtn.removeAttribute('target');
      headerBtn.removeAttribute('rel');
    }
  }

  if (headerBtnText) {
    if (device.deviceType === 'windows') {
      headerBtnText.textContent = 'Download for Windows';
    } else if (device.deviceType === 'linux') {
      headerBtnText.textContent = 'Download for Linux';
    } else if (device.isMobile) {
      headerBtnText.textContent = 'Get for PC';
    } else {
      headerBtnText.textContent = 'Downloads';
    }
  }

  if (headerOsIcon) {
    if (device.deviceType === 'windows') {
      headerOsIcon.innerHTML = BrandIcons.Windows({ size: 13 });
    } else if (device.deviceType === 'linux') {
      headerOsIcon.innerHTML = BrandIcons.Linux({ size: 13 });
    } else if (device.deviceType === 'macos') {
      headerOsIcon.innerHTML = BrandIcons.Apple({ size: 13 });
    } else {
      headerOsIcon.innerHTML = LucideIcons.Laptop({ size: 13 });
    }
  }

  // 2. Hero Download Button, Subtext, and Icon
  const heroDownloadBtn = document.getElementById('hero-download-btn') as HTMLAnchorElement | null;
  const heroOsIcon = document.getElementById('hero-os-icon');
  const heroLabel = document.getElementById('hero-download-label');
  const heroSub = document.getElementById('hero-download-sub');
  const heroDetText = document.getElementById('hero-detected-text');
  const heroMobileHelper = document.getElementById('hero-mobile-helper');

  if (heroDownloadBtn) {
    heroDownloadBtn.href = device.downloadUrl;
    if (device.downloadUrl.startsWith('http')) {
      heroDownloadBtn.setAttribute('target', '_blank');
      heroDownloadBtn.setAttribute('rel', 'noopener noreferrer');
    } else {
      heroDownloadBtn.removeAttribute('target');
      heroDownloadBtn.removeAttribute('rel');
    }
  }

  if (heroOsIcon) {
    if (device.deviceType === 'windows') {
      heroOsIcon.innerHTML = BrandIcons.Windows({ size: 18 });
    } else if (device.deviceType === 'linux') {
      heroOsIcon.innerHTML = BrandIcons.Linux({ size: 18 });
    } else if (device.deviceType === 'macos') {
      heroOsIcon.innerHTML = BrandIcons.Apple({ size: 18 });
    } else {
      heroOsIcon.innerHTML = LucideIcons.Laptop({ size: 18 });
    }
  }

  if (heroLabel) heroLabel.textContent = device.downloadLabel;
  if (heroSub) heroSub.textContent = device.downloadSub;
  if (heroDetText) heroDetText.textContent = device.detectedNotice;

  // 3. Mobile Helper Banner
  if (heroMobileHelper) {
    if (device.isMobile) {
      heroMobileHelper.style.display = 'block';
    } else {
      heroMobileHelper.style.display = 'none';
    }
  }

  // 4. Activate Platform Tab in Download Matrix
  activatePlatformTab(device.os);
}

function initApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // 1. Compose all modular components
  appRoot.innerHTML = `
    ${renderHeader()}

    <main>
      ${renderHero(renderBrowserMockup())}
      ${renderAxioms()}
      ${renderBentoGrid()}
      ${renderWorkflows()}
      ${renderArchitecture()}
      ${renderPrivacyVault()}
      ${renderDownloadMatrix()}
      ${renderFAQ()}
      ${renderCTABanner()}
    </main>

    ${renderFooter()}
    ${renderModals()}
  `;

  // 2. Initialize interactive controllers
  initHeader();
  initHero((selectedOS) => applyDeviceCustomization(selectedOS));
  initBrowserMockup();
  initBentoGrid();
  initWorkflows();
  initDownloadMatrix();
  initFAQ();
  initFooter();
  initModals();

  // 3. Detect and apply device configuration
  const detectedDevice = detectClientDevice();
  applyDeviceCustomization(detectedDevice);
}

// Bootstrap once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
