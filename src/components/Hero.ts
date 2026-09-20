/**
 * Hero Component (Clean Claymorphic Banner, Headline, CTAs)
 */
import { openModal } from './Modals';
import type { OSPlatform } from '../types';

export function renderHero(mockupHtml: string): string {
  return `
  <section class="hero-section" id="hero">
    <div class="hero-container">
      <!-- Clean Announcement Pill -->
      <div class="hero-badge-wrap">
        <button class="hero-pill-badge" id="hero-badge-trigger" aria-label="View Release notes">
          <span class="pill-dot"></span>
          <span class="pill-text">Comate v0.0.98 Beta</span>
          <span class="pill-arrow">→</span>
        </button>
      </div>

      <!-- Main Headlines -->
      <h1 class="hero-title">
        The Autonomous<br>
        <span class="hero-subline">Web Browser</span>
      </h1>
      <p class="hero-subtitle">
        Automate complex multi-step web tasks, deep research, and structured data extraction with an embedded local agent that operates directly on the live DOM.
      </p>

      <!-- CTA Action Area -->
      <div class="hero-cta-group">
        <div class="primary-cta-dropdown-wrap">
          <a href="#downloads" class="clay-primary-btn" id="hero-download-btn">
            <span class="btn-icon" id="hero-os-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </span>
            <span class="btn-content">
              <span class="btn-label" id="hero-download-label">Download for Linux</span>
              <span class="btn-subtext" id="hero-download-sub">v0.0.98 (.deb / AppImage)</span>
            </span>
          </a>
          <button class="cta-dropdown-toggle" id="cta-dropdown-toggle" aria-label="Select OS platform">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <!-- Dropdown menu -->
          <div class="cta-dropdown-menu" id="cta-dropdown-menu">
            <div class="dropdown-header">Platform (v0.0.98 Release)</div>
            <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate-portable_0.0.98_x64.exe" class="dropdown-item" data-os="windows" target="_blank" rel="noopener noreferrer">
              <span class="dd-title">Windows Portable (.exe) <span class="dd-badge-active">107 MB</span></span>
            </a>
            <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate-setup_0.0.98_x64.exe" class="dropdown-item" data-os="windows" target="_blank" rel="noopener noreferrer">
              <span class="dd-title">Windows Setup (.exe) <span class="dd-badge-active">108 MB</span></span>
            </a>
            <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate_0.0.98_amd64.deb" class="dropdown-item" data-os="linux" target="_blank" rel="noopener noreferrer">
              <span class="dd-title">Linux Debian / Ubuntu (.deb) <span class="dd-badge-active">95.7 MB</span></span>
            </a>
            <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.0.98/cencera-comate_0.0.98_x86_64.AppImage" class="dropdown-item" data-os="linux" target="_blank" rel="noopener noreferrer">
              <span class="dd-title">Linux Universal (.AppImage) <span class="dd-badge-active">121 MB</span></span>
            </a>
            <div class="dropdown-item disabled-os-item" title="macOS / iOS version is not released in v0.0.98">
              <span class="dd-title">macOS / iOS (.dmg) <span class="dd-tag-soon">Unavailable</span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Row -->
      <div class="hero-trust-row">
        <div class="trust-chip"><span class="chip-dot"></span> Zero Cloud Telemetry</div>
        <div class="trust-chip"><span class="chip-dot"></span> AES-256 Local Vault</div>
        <div class="trust-chip"><span class="chip-dot"></span> Local &amp; BYOK LLMs</div>
      </div>

      <!-- Embedded Mockup -->
      ${mockupHtml}
    </div>
  </section>
  `;
}

export function initHero(onSelectPlatform?: (os: OSPlatform) => void): void {
  const badgeTrigger = document.getElementById('hero-badge-trigger');
  const dropdownToggle = document.getElementById('cta-dropdown-toggle');
  const dropdownMenu = document.getElementById('cta-dropdown-menu');

  if (badgeTrigger) {
    badgeTrigger.addEventListener('click', () => {
      openModal('changelog-modal');
    });
  }

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('open');
    });

    const items = dropdownMenu.querySelectorAll<HTMLElement>('.dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const os = item.getAttribute('data-os') as OSPlatform | null;
        if (os && onSelectPlatform) {
          onSelectPlatform(os);
        }
        dropdownMenu.classList.remove('open');
      });
    });
  }
}
