/**
 * DownloadMatrix Component (OS Platform Switcher & SHA256 Checksum Verification)
 */
import { showToast } from './Modals';
import type { OSPlatform } from '../types';
import { BrandIcons, LucideIcons } from './Icons';

export function renderDownloadMatrix(): string {
  return `
  <section class="downloads-section" id="downloads">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-eyebrow">Get Started Today</span>
        <h2 class="section-headline">Download Comate V0.1.100 BASE</h2>
        <p class="section-subheadline">Experience the autonomous desktop browser on your operating system. Free while in public BASE.</p>
      </div>

      <!-- OS Selector Tabs -->
      <div class="download-platform-tabs">
        <button class="dl-tab active" data-platform="windows" id="tab-btn-windows">
          <span class="dl-tab-icon">${BrandIcons.Windows({ size: 15 })}</span>
          <span>Windows</span>
          <span class="badge-tab-active">V0.1.100</span>
        </button>
        <button class="dl-tab" data-platform="linux" id="tab-btn-linux">
          <span class="dl-tab-icon">${BrandIcons.Linux({ size: 15 })}</span>
          <span>Linux</span>
        </button>
        <button class="dl-tab dl-tab-disabled" data-platform="macos" id="tab-btn-macos" title="macOS / iOS build is not released yet in V0.1.100">
          <span class="dl-tab-icon">${BrandIcons.Apple({ size: 15 })}</span>
          <span>macOS / iOS</span>
          <span class="badge-tab-disabled">Soon</span>
        </button>
      </div>

      <!-- Platform Content Cards -->
      <div class="download-cards-container">
        <!-- Linux Downloads -->
        <div class="platform-dl-panel" id="panel-linux">
          <div class="dl-grid-two">
            <div class="dl-release-card recommended">
              <div class="rec-pill">Recommended for Ubuntu / Debian</div>
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">Debian / Ubuntu Package</h3>
                <span class="dl-tag">.deb</span>
              </div>
              <p class="dl-pkg-desc">Installs seamlessly via apt or software center. Includes automatic desktop drawer launchers and system sandbox permissions.</p>
              <div class="dl-meta-row">
                <span>Version: <strong>V0.1.100</strong></span>
                <span>Size: <strong>95.7 MB</strong></span>
                <span>Arch: <strong>amd64</strong></span>
              </div>
              <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate_0.0.99_amd64.deb" class="glow-download-button" data-filename="cencera-comate_0.0.99_amd64.deb" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download .deb (95.7 MB)</span>
              </a>
              <div class="checksum-row">
                <span class="cs-label">SHA256:</span>
                <code class="cs-hash" title="Click to copy">6b7779fa139f02...5d57</code>
                <button class="cs-copy-btn" data-copy="6b7779fa139f027140e9b27da94ea54a4178beacedac83563d39c6c4db845d57" aria-label="Copy SHA256 checksum">Copy</button>
              </div>
            </div>

            <div class="dl-release-card">
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">Universal AppImage</h3>
                <span class="dl-tag">.AppImage</span>
              </div>
              <p class="dl-pkg-desc">Run directly on Fedora, Arch, Ubuntu, openSUSE, and other distributions with zero system dependencies.</p>
              <div class="dl-meta-row">
                <span>Version: <strong>V0.1.100</strong></span>
                <span>Size: <strong>121 MB</strong></span>
                <span>Arch: <strong>x86_64</strong></span>
              </div>
              <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate_0.0.99_x86_64.AppImage" class="glass-download-button" data-filename="cencera-comate_0.0.99_x86_64.AppImage" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download .AppImage (121 MB)</span>
              </a>
              <div class="checksum-row">
                <span class="cs-label">SHA256:</span>
                <code class="cs-hash" title="Click to copy">b3b18cb618fe43...6327</code>
                <button class="cs-copy-btn" data-copy="b3b18cb618fe43e7cb1c79696b564df41566165443642ac4f0de45d91cd06327" aria-label="Copy SHA256 checksum">Copy</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Windows Downloads -->
        <div class="platform-dl-panel active" id="panel-windows">
          <div class="dl-grid-two">
            <div class="dl-release-card recommended">
              <div class="rec-pill">Recommended for Windows 10/11</div>
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">Comate Portable (Windows x64)</h3>
                <span class="dl-tag">.exe Portable</span>
              </div>
              <p class="dl-pkg-desc">Verified standalone Windows x64 binary. No installation required; run directly on Windows 10/11 with complete local privacy.</p>
              <div class="dl-meta-row">
                <span>Version: <strong>V0.1.100</strong></span>
                <span>Size: <strong>107 MB</strong></span>
                <span>OS: <strong>Windows 10 / 11 (64-bit)</strong></span>
              </div>
              <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate-portable_0.0.99_x64.exe" class="glow-download-button" data-filename="cencera-comate-portable_0.0.99_x64.exe" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download .exe Portable (107 MB)</span>
              </a>
              <div class="checksum-row">
                <span class="cs-label">SHA256:</span>
                <code class="cs-hash" title="Click to copy">bcccb5bf8e860c...0c8d1</code>
                <button class="cs-copy-btn" data-copy="bcccb5bf8e860c378a4ad07ae09bbda4f81014bf98a728b9c8bce21bf7b0c8d1" aria-label="Copy SHA256 checksum">Copy</button>
              </div>
            </div>

            <div class="dl-release-card">
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">Windows Installer Package</h3>
                <span class="dl-tag">.exe Setup</span>
              </div>
              <p class="dl-pkg-desc">Standard Windows NSIS setup package with start menu shortcuts, system file associations, and automated desktop integration.</p>
              <div class="dl-meta-row">
                <span>Version: <strong>V0.1.100</strong></span>
                <span>Size: <strong>108 MB</strong></span>
                <span>OS: <strong>Windows 10 / 11 (64-bit)</strong></span>
              </div>
              <a href="https://github.com/cencera-xyz/comate-downloader/releases/download/V0.1.100/cencera-comate-setup_0.0.99_x64.exe" class="glass-download-button" data-filename="cencera-comate-setup_0.0.99_x64.exe" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download .exe Setup (108 MB)</span>
              </a>
              <div class="checksum-row">
                <span class="cs-label">SHA256:</span>
                <code class="cs-hash" title="Click to copy">1f92aa1e35b7ad...3240</code>
                <button class="cs-copy-btn" data-copy="1f92aa1e35b7adc965aeee16dbb8c84b5996a596e2701189455588bab9333240" aria-label="Copy SHA256 checksum">Copy</button>
              </div>
            </div>
          </div>
        </div>

        <!-- macOS / iOS Downloads (Disabled — Not in V0.1.100 Release) -->
        <div class="platform-dl-panel" id="panel-macos">
          <div class="dl-grid-two">
            <div class="dl-release-card card-disabled">
              <div class="rec-pill pill-disabled">Unavailable in V0.1.100</div>
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">macOS Apple Silicon (.dmg)</h3>
                <span class="dl-tag tag-disabled">arm64</span>
              </div>
              <p class="dl-pkg-desc">Apple Silicon (M1/M2/M3/M4) build is currently undergoing compilation and signature verification. Not available in V0.1.100.</p>
              <div class="dl-meta-row">
                <span>Status: <strong>Coming in future release</strong></span>
                <span>OS: <strong>macOS 12.0+ / iOS</strong></span>
              </div>
              <button class="glow-download-button btn-disabled" disabled aria-disabled="true" title="macOS / iOS version is not released in V0.1.100">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                <span>macOS / iOS Version Disabled</span>
              </button>
              <div class="dl-release-notice">
                <span>macOS &amp; iOS builds are currently in development for the upcoming release.</span>
              </div>
            </div>

            <div class="dl-release-card card-disabled">
              <div class="rec-pill pill-disabled">Unavailable in V0.1.100</div>
              <div class="dl-card-head">
                <h3 class="dl-pkg-name">macOS Intel x64 (.dmg)</h3>
                <span class="dl-tag tag-disabled">x86_64</span>
              </div>
              <p class="dl-pkg-desc">Universal x86_64 DMG package for Intel-based Macs. Currently in active development and not available in V0.1.100.</p>
              <div class="dl-meta-row">
                <span>Status: <strong>Coming in future release</strong></span>
                <span>OS: <strong>macOS 11.0+</strong></span>
              </div>
              <button class="glass-download-button btn-disabled" disabled aria-disabled="true" title="macOS / iOS version is not released in V0.1.100">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                <span>macOS / iOS Version Disabled</span>
              </button>
              <div class="dl-release-notice">
                <span>macOS &amp; iOS builds are currently in development for the upcoming release.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Specs Card -->
      <div class="specs-card">
        <div class="specs-header">
          <span class="specs-icon">${LucideIcons.Monitor({ size: 18, strokeWidth: 2 })}</span>
          <h3 class="specs-title">Recommended System Specifications</h3>
          <span class="specs-pill">Chromium 128 Core</span>
        </div>
        <div class="specs-grid">
          <div class="spec-item">
            <span class="spec-label">Memory (RAM)</span>
            <span class="spec-val">4 GB minimum (8 GB recommended for local 14B models)</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Processor</span>
            <span class="spec-val">Intel Core i5 / AMD Ryzen 5 or Apple Silicon M-series</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Disk Storage</span>
            <span class="spec-val">350 MB free disk space for browser core &amp; cache</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Model Backends</span>
            <span class="spec-val">Local (Ollama, LM Studio, vLLM) or Cloud BYOK (Claude, OpenAI, Gemini)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export function activatePlatformTab(platform: OSPlatform): void {
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.dl-tab');
  const panels = document.querySelectorAll<HTMLElement>('.platform-dl-panel');

  tabBtns.forEach(b => b.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  const activeBtn = document.querySelector<HTMLButtonElement>(`.dl-tab[data-platform="${platform}"]`);
  const activePanel = document.getElementById(`panel-${platform}`);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePanel) activePanel.classList.add('active');
}

export function initDownloadMatrix(): void {
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.dl-tab');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.getAttribute('data-platform') as OSPlatform | null;
      if (platform) {
        activatePlatformTab(platform);
      }
    });
  });

  // Copy SHA256 checksums
  const copyBtns = document.querySelectorAll<HTMLButtonElement>('.cs-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const hash = btn.getAttribute('data-copy');
      if (hash) {
        navigator.clipboard.writeText(hash).then(() => {
          const original = btn.textContent || 'Copy';
          btn.textContent = 'Copied!';
          showToast('SHA256 Checksum copied to clipboard!');
          setTimeout(() => {
            btn.textContent = original;
          }, 2000);
        }).catch(() => {
          showToast('Failed to copy checksum.');
        });
      }
    });
  });

  // Simulated download click triggers
  const dlButtons = document.querySelectorAll<HTMLElement>('.glow-download-button, .glass-download-button');
  dlButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.hasAttribute('disabled') || btn.classList.contains('btn-disabled')) {
        e.preventDefault();
        return;
      }
      const filename = btn.getAttribute('data-filename') || 'Comate-Installer';
      showToast(`Initiating download for ${filename}...`);
    });
  });
}
