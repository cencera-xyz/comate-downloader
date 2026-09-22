/**
 * Modals Component (Demo Video Player, Changelog, Toast)
 */

let toastTimeout: ReturnType<typeof setTimeout> | null = null;

export function showToast(message: string): void {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

export function openModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

import { LucideIcons } from './Icons';

export function renderModals(): string {
  return `
  <!-- MODAL: INTERACTIVE SIMULATION DEMO -->
  <div class="modal-backdrop" id="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
    <div class="modal-card modal-card-wide">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-glow-dot"></span>
          <h3 class="modal-title" id="demo-modal-title">Interactive Sequence Preview</h3>
        </div>
        <button class="modal-close-btn" id="demo-modal-close" aria-label="Close dialog">&times;</button>
      </div>
      <div class="modal-body">
        <div class="demo-video-wrapper">
          <div class="demo-simulated-screen">
            <div class="demo-video-header">
              <span class="stage-tag">Autonomous Sequence Demo</span>
              <span class="stage-time" id="demo-timer">00:24 / 01:00</span>
            </div>
            <div class="demo-screen-content">
              <div class="demo-stage-bubble">
                <span class="demo-bubble-icon">${LucideIcons.Zap({ size: 14, strokeWidth: 2 })}</span>
                <span>Executing goal: "Cross-correlate arXiv citations and generate executive summary table"</span>
              </div>
              <div class="demo-radar-sweep"></div>
              <div class="demo-hud-overlay">
                <div class="hud-item"><span class="hud-label">Action:</span> <span class="hud-val">DOM Traversal (12 nodes)</span></div>
                <div class="hud-item"><span class="hud-label">TATF Status:</span> <span class="hud-val text-green">Nominal (0 errors)</span></div>
                <div class="hud-item"><span class="hud-label">Speed:</span> <span class="hud-val">4.2 ops/sec</span></div>
              </div>
            </div>
            <div class="demo-player-bar">
              <button class="demo-bar-play" id="demo-bar-play-toggle">${LucideIcons.Pause({ size: 12, strokeWidth: 2 })} Pause</button>
              <div class="demo-progress-track">
                <div class="demo-progress-fill" id="demo-progress-fill"></div>
              </div>
              <span class="demo-hd-tag">1080p 60FPS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#downloads" class="glow-primary-btn" id="modal-download-cta">
          <span>Download Comate BASE Now</span>
        </a>
      </div>
    </div>
  </div>

  <!-- MODAL: CHANGELOG / RELEASE NOTES (V0.1.100) -->
  <div class="modal-backdrop" id="changelog-modal" role="dialog" aria-modal="true" aria-labelledby="cl-modal-title">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-glow-dot"></span>
          <h3 class="modal-title" id="cl-modal-title">Release Notes — Comate V0.1.100 BASE</h3>
        </div>
        <button class="modal-close-btn" id="changelog-modal-close" aria-label="Close dialog">&times;</button>
      </div>
      <div class="modal-body changelog-body">
        <div class="cl-meta-header">
          <span class="cl-version-pill">V0.1.100 BASE</span>
          <span class="cl-date">Release Tag: <code>V0.1.100</code></span>
          <a href="https://github.com/cencera-xyz/comate-downloader/releases/tag/V0.1.100" target="_blank" rel="noopener noreferrer" class="cl-commit">View on GitHub ↗</a>
        </div>

        <div class="cl-section">
          <h4 class="cl-heading">${LucideIcons.Rocket({ size: 16, strokeWidth: 2 })} Core Engine &amp; Automation</h4>
          <ul class="cl-list">
            <li><strong>Autonomous TATF ReAct Loop:</strong> Upgraded Think-Apply-Test-Fix engine with autonomous obstacle self-healing, collision detection, and dynamic recovery for complex web form automations.</li>
            <li><strong>Smart Browser Migration:</strong> Detects actively installed browsers across Linux and Windows, intelligently parses bookmark hierarchies, and imports directly to Comate's Bookmarks Bar while stripping vendor promotional links.</li>
            <li><strong>Paddle Billing &amp; Subscriptions:</strong> Integrated Paddle Sandbox billing lifecycle with automated webhook provisioning, tier quota enforcement, and live in-app billing status.</li>
          </ul>
        </div>

        <div class="cl-section">
          <h4 class="cl-heading">${LucideIcons.PackageCheck({ size: 16, strokeWidth: 2 })} Packaging &amp; Artifact Deliverables</h4>
          <ul class="cl-list">
            <li><strong>Windows Executables:</strong> Clean NSIS setup wizard (<code>108 MB</code>) and standalone zero-install portable executable (<code>107 MB</code>) for Windows 10/11 x64.</li>
            <li><strong>Linux Distributions:</strong> Official Debian/Ubuntu package (<code>95.7 MB</code>) with automated <code>gtk-update-icon-cache</code> drawer integration, and universal Linux AppImage (<code>121 MB</code>).</li>
            <li><strong>Offline Brand Vector Assets:</strong> Bundled crisp vector assets for DuckDuckGo, Google, Brave, Bing, and major LLM providers for packaged offline rendering.</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#downloads" class="glow-primary-btn" id="cl-download-btn">Go to Downloads</a>
      </div>
    </div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div class="toast-notification" id="toast" role="alert" aria-live="assertive">
    <span class="toast-icon">${LucideIcons.CheckCircle2({ size: 15, strokeWidth: 2.2 })}</span>
    <span class="toast-message" id="toast-message">Notification</span>
  </div>
  `;
}

export function initModals(): void {
  const demoModal = document.getElementById('demo-modal');
  const changelogModal = document.getElementById('changelog-modal');
  const demoCloseBtn = document.getElementById('demo-modal-close');
  const demoTimer = document.getElementById('demo-timer');
  const demoProgressFill = document.getElementById('demo-progress-fill');
  const demoPlayToggle = document.getElementById('demo-bar-play-toggle');
  const clCloseBtn = document.getElementById('changelog-modal-close');
  const clDownloadBtn = document.getElementById('cl-download-btn');

  let demoInterval: ReturnType<typeof setInterval> | null = null;
  let demoSeconds = 24;
  let demoPlaying = true;

  if (demoCloseBtn) {
    demoCloseBtn.addEventListener('click', () => {
      closeModal('demo-modal');
      if (demoInterval) clearInterval(demoInterval);
    });
  }

  if (clCloseBtn) {
    clCloseBtn.addEventListener('click', () => closeModal('changelog-modal'));
  }
  if (clDownloadBtn) {
    clDownloadBtn.addEventListener('click', () => closeModal('changelog-modal'));
  }

  // Backdrop click
  [demoModal, changelogModal].forEach(m => {
    if (!m) return;
    m.addEventListener('click', (e) => {
      if (e.target === m) {
        closeModal(m.id);
        if (m.id === 'demo-modal' && demoInterval) clearInterval(demoInterval);
      }
    });
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('demo-modal');
      closeModal('changelog-modal');
      if (demoInterval) clearInterval(demoInterval);
    }
  });

  // Demo Player logic
  const watchDemoBtn = document.getElementById('watch-demo-btn');
  if (watchDemoBtn) {
    watchDemoBtn.addEventListener('click', () => {
      openModal('demo-modal');
      if (demoInterval) clearInterval(demoInterval);
      demoInterval = setInterval(() => {
        if (demoPlaying) {
          demoSeconds = (demoSeconds + 1) % 60;
          const formatted = `00:${demoSeconds < 10 ? '0' : ''}${demoSeconds} / 01:00`;
          if (demoTimer) demoTimer.textContent = formatted;
          if (demoProgressFill) {
            demoProgressFill.style.width = `${(demoSeconds / 60) * 100}%`;
          }
        }
      }, 1000);
    });
  }

  if (demoPlayToggle) {
    demoPlayToggle.addEventListener('click', () => {
      demoPlaying = !demoPlaying;
      demoPlayToggle.innerHTML = demoPlaying ? `${LucideIcons.Pause({ size: 12, strokeWidth: 2 })} Pause` : `${LucideIcons.Play({ size: 12, strokeWidth: 2 })} Play`;
    });
  }
}
