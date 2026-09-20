/**
 * Comate Landing Page - Main TypeScript Orchestrator
 * Fully modular component architecture
 */
import './style.css';
import type { OSPlatform } from './types';
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

function detectClientOS(): OSPlatform {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('mac') || ua.includes('darwin')) return 'macos';
  return 'linux';
}

function applyOSCustomization(os: OSPlatform): void {
  const headerBtnText = document.getElementById('header-download-text');
  const heroLabel = document.getElementById('hero-download-label');
  const heroSub = document.getElementById('hero-download-sub');
  const heroDownloadBtn = document.getElementById('hero-download-btn') as HTMLAnchorElement | null;

  const winPortableUrl = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate-portable_0.0.98_x64.exe';
  const linuxDebUrl = 'https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate_0.0.98_amd64.deb';

  if (os === 'windows') {
    if (headerBtnText) headerBtnText.textContent = 'Download for Windows';
    if (heroLabel) heroLabel.textContent = 'Download for Windows';
    if (heroSub) heroSub.textContent = 'v0.0.98 Portable (.exe) • 107 MB';
    if (heroDownloadBtn) heroDownloadBtn.href = winPortableUrl;
    activatePlatformTab('windows');
  } else if (os === 'linux') {
    if (headerBtnText) headerBtnText.textContent = 'Download for Linux';
    if (heroLabel) heroLabel.textContent = 'Download for Linux (.deb)';
    if (heroSub) heroSub.textContent = 'v0.0.98 (amd64) • 95.7 MB';
    if (heroDownloadBtn) heroDownloadBtn.href = linuxDebUrl;
    activatePlatformTab('linux');
  } else {
    // macOS or other
    if (headerBtnText) headerBtnText.textContent = 'Download v0.0.98';
    if (heroLabel) heroLabel.textContent = 'Download Comate v0.0.98';
    if (heroSub) heroSub.textContent = 'Windows & Linux Available • macOS Soon';
    if (heroDownloadBtn) heroDownloadBtn.href = '#downloads';
    activatePlatformTab('windows');
  }
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
  initHero((selectedOS) => applyOSCustomization(selectedOS));
  initBrowserMockup();
  initBentoGrid();
  initWorkflows();
  initDownloadMatrix();
  initFAQ();
  initFooter();
  initModals();

  // 3. Detect and apply OS
  const detectedOS = detectClientOS();
  applyOSCustomization(detectedOS);
}

// Bootstrap once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
