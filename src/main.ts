/**
 * Comate Landing Page & Legal Hub - Main TypeScript Orchestrator
 * Fully modular component architecture with client-side SPA routing
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
import { renderLegalPage, initLegalPage, LEGAL_METAS, type LegalDocType } from './components/LegalPages';

const WIN_PORTABLE_URL = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.104/cencera-comate-portable_0.1.104_x64.exe';
const LINUX_DEB_URL = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.104/cencera-comate_0.1.104_amd64.deb';

function detectClientDevice(): DeviceInfo {
  const nav = window.navigator as any;
  const ua = (nav.userAgent || '').toLowerCase();
  const platform = (nav.userAgentData?.platform || nav.platform || '').toLowerCase();

  // Comate / Electron is always a desktop app — never treat it as mobile.
  const isElectron = /electron/i.test(ua) || typeof (window as any).comateAPI !== 'undefined';

  const isAndroid = !isElectron && (/android/i.test(ua) || /android/i.test(platform));
  const isIOS = !isElectron && (/iphone|ipad|ipod/i.test(ua) || (platform.includes('mac') && (nav.maxTouchPoints || 0) > 1));
  const isTablet = isIOS && (/ipad/i.test(ua) || (nav.maxTouchPoints || 0) > 1);
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
      downloadSub: 'V0.1.104 Portable (.exe) • 107 MB • Windows 10/11',
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
    downloadSub: 'V0.1.104 (amd64) • 95.7 MB • Ubuntu / Debian',
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
        downloadSub: 'V0.1.104 Portable (.exe) • 107 MB • Windows 10/11',
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
        downloadSub: 'V0.1.104 (amd64) • 95.7 MB • Ubuntu / Debian',
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
      heroDownloadBtn.removeAttribute('target');
      heroDownloadBtn.removeAttribute('rel');
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

/* ==========================================================================
   ROUTING & VIEW DISPATCHER
   ========================================================================== */
type RouteInfo = 
  | { type: 'home'; anchor?: string }
  | { type: 'legal'; doc: LegalDocType; anchor?: string };

function parseCurrentRoute(): RouteInfo {
  const pathname = (window.location.pathname || '').toLowerCase().replace(/\/$/, '') || '/';
  const hash = (window.location.hash || '').toLowerCase();

  // 1. Direct legal pathnames
  if (pathname === '/terms' || pathname === '/terms-of-service' || pathname === '/tos' || pathname === '/terms-and-conditions') {
    return { type: 'legal', doc: 'terms', anchor: hash.replace(/^#/, '') };
  }
  if (pathname === '/privacy' || pathname === '/privacy-policy') {
    return { type: 'legal', doc: 'privacy', anchor: hash.replace(/^#/, '') };
  }
  if (pathname === '/refund' || pathname === '/refund-policy' || pathname === '/refunds') {
    return { type: 'legal', doc: 'refund', anchor: hash.replace(/^#/, '') };
  }
  if (pathname === '/anti-piracy' || pathname === '/piracy' || pathname === '/piracy-policy' || pathname === '/copyright') {
    return { type: 'legal', doc: 'anti-piracy', anchor: hash.replace(/^#/, '') };
  }

  // 2. Hash-based fallback routing (e.g. #/terms or #terms)
  if (hash.startsWith('#/terms') || hash === '#terms') {
    return { type: 'legal', doc: 'terms' };
  }
  if (hash.startsWith('#/privacy') || hash === '#privacy-policy') {
    return { type: 'legal', doc: 'privacy' };
  }
  if (hash.startsWith('#/refund') || hash === '#refund-policy') {
    return { type: 'legal', doc: 'refund' };
  }
  if (hash.startsWith('#/anti-piracy') || hash.startsWith('#/piracy') || hash === '#piracy') {
    return { type: 'legal', doc: 'anti-piracy' };
  }

  // Default to home page
  return { type: 'home', anchor: hash.replace(/^#/, '') };
}

function updateMetaTags(title: string, description: string): void {
  document.title = title;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
}

function bindInternalNavigationLinks(): void {
  // Capture all data-route or relative legal links
  const links = document.querySelectorAll<HTMLAnchorElement>('a[data-route], a[href^="/terms"], a[href^="/privacy"], a[href^="/refund"], a[href^="/anti-piracy"], a[href^="/piracy"], a[href="/"]');
  
  links.forEach(link => {
    // Avoid double binding
    if (link.dataset.navBound === 'true') return;
    link.dataset.navBound = 'true';

    link.addEventListener('click', (e) => {
      const targetUrl = link.getAttribute('data-route') || link.getAttribute('href');
      if (!targetUrl) return;

      // Handle anchor on home page
      if (targetUrl.startsWith('/#')) {
        e.preventDefault();
        const currentRoute = parseCurrentRoute();
        const anchor = targetUrl.replace('/#', '');
        if (currentRoute.type === 'home') {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', `#${anchor}`);
          }
        } else {
          history.pushState(null, '', `/#${anchor}`);
          renderApp();
        }
        return;
      }

      // Handle full external links or mailto
      if (targetUrl.startsWith('http') || targetUrl.startsWith('mailto:')) {
        return;
      }

      // SPA navigation
      e.preventDefault();
      if (window.location.pathname !== targetUrl) {
        history.pushState(null, '', targetUrl);
        renderApp();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

function renderApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  const route = parseCurrentRoute();

  if (route.type === 'legal') {
    const meta = LEGAL_METAS[route.doc];
    updateMetaTags(`${meta.title} — Comate Browser & Cencera`, meta.description);

    appRoot.innerHTML = `
      ${renderLegalPage(route.doc)}
      ${renderFooter()}
      ${renderModals()}
    `;

    initLegalPage();
    initFooter();
    initModals();
    bindInternalNavigationLinks();

    // Scroll handling
    if (route.anchor) {
      setTimeout(() => {
        const target = document.getElementById(route.anchor!);
        if (target) {
          const headerOffset = 130;
          const pos = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: pos - headerOffset, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  } else {
    // Home Landing Page
    updateMetaTags(
      'Comate — The Autonomous Web Browser',
      'Comate is an autonomous desktop web browser. Automate complex multi-step web tasks, deep research, and structured data extraction with an embedded local agent directly on the live DOM.'
    );

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

    initHeader();
    initHero((selectedOS) => applyDeviceCustomization(selectedOS));
    initBrowserMockup();
    initBentoGrid();
    initWorkflows();
    initDownloadMatrix();
    initFAQ();
    initFooter();
    initModals();
    bindInternalNavigationLinks();

    const detectedDevice = detectClientDevice();
    applyDeviceCustomization(detectedDevice);

    // Scroll handling for home anchors
    if (route.anchor) {
      setTimeout(() => {
        const target = document.getElementById(route.anchor!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }
}

// History back/forward navigation
window.addEventListener('popstate', () => {
  renderApp();
});

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
