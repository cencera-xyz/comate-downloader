/**
 * Hero Component (Clean Claymorphic Banner, Headline, CTAs)
 */
import { openModal, showToast } from './Modals';
import type { OSPlatform } from '../types';
import { BrandIcons, LucideIcons } from './Icons';

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
              ${BrandIcons.Windows({ size: 18 })}
            </span>
            <span class="btn-content">
              <span class="btn-label" id="hero-download-label">Download for Windows</span>
              <span class="btn-subtext" id="hero-download-sub">v0.0.98 Portable (.exe) • 107 MB</span>
            </span>
          </a>
          <button class="cta-dropdown-toggle" id="cta-dropdown-toggle" aria-label="Select OS platform">
            ${LucideIcons.ChevronDown({ size: 14, strokeWidth: 2.2 })}
          </button>
          <!-- Dropdown menu -->
          <div class="cta-dropdown-menu" id="cta-dropdown-menu">
            <div class="dropdown-header">Available Packages (v0.0.98)</div>
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
            <a href="#downloads" class="dropdown-item" data-os="macos">
              <span class="dd-title">macOS Universal (.dmg) <span class="dd-tag-soon">Compiling</span></span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#downloads" class="dropdown-item dropdown-footer-item">
              <span class="dd-title">All Release Packages &amp; Checksums →</span>
            </a>
          </div>
        </div>

        <!-- Detected Device Micro-Badge -->
        <div class="hero-detected-badge" id="hero-detected-badge">
          <span class="det-dot"></span>
          <span id="hero-detected-text">Auto-detecting platform...</span>
        </div>

        <!-- Mobile Visitor Helper Card -->
        <div class="hero-mobile-helper" id="hero-mobile-helper" style="display: none;">
          <div class="mobile-helper-card">
            <div class="mobile-helper-content">
              <span class="mobile-helper-icon">${LucideIcons.Laptop({ size: 16 })}</span>
              <div class="mobile-helper-text">
                <span class="mobile-helper-title">Desktop Application</span>
                <span class="mobile-helper-desc">Comate runs on Windows &amp; Linux PCs. Copy download link to install on your computer:</span>
              </div>
            </div>
            <div class="mobile-helper-actions">
              <button class="mobile-copy-btn" id="hero-copy-link-btn" type="button" aria-label="Copy download link for PC">
                <span class="copy-btn-icon" id="copy-btn-icon">${LucideIcons.Copy({ size: 14 })}</span>
                <span id="copy-btn-text">Copy Link for PC</span>
              </button>
              <a href="#downloads" class="mobile-browse-link">View All Desktop Packages ↓</a>
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
  const copyBtn = document.getElementById('hero-copy-link-btn');

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

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const copyUrl = 'https://comate.cencera.xyz/#downloads';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(copyUrl);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = copyUrl;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        const copyIcon = document.getElementById('copy-btn-icon');
        const copyText = document.getElementById('copy-btn-text');
        if (copyIcon) copyIcon.innerHTML = LucideIcons.Check({ size: 14, strokeWidth: 2.5 });
        if (copyText) copyText.textContent = 'Link Copied!';

        showToast('Download link copied! Open on your PC to download Comate.');

        setTimeout(() => {
          if (copyIcon) copyIcon.innerHTML = LucideIcons.Copy({ size: 14 });
          if (copyText) copyText.textContent = 'Copy Link for PC';
        }, 2500);
      } catch (err) {
        showToast('Link: comate.cencera.xyz/#downloads');
      }
    });
  }
}
