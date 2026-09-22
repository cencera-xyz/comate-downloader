/**
 * Header Component (Clean Navigation & Claymorphic Controls)
 */

export function renderHeader(): string {
  return `
  <header class="site-header" id="site-header">
    <div class="header-container">
      <a href="#" class="brand-link" aria-label="Comate Home">
        <div class="brand-logo-wrap">
          <img src="/icon.png" alt="Comate Logo" class="brand-logo-img" width="32" height="32" />
        </div>
        <div class="brand-text-group">
          <span class="brand-name">Comate</span>
          <span class="BASE-badge">BASE</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-menu" id="nav-menu" aria-label="Main Navigation">
        <a href="#features" class="nav-link">Features</a>
        <a href="#engine" class="nav-link">Engine</a>
        <a href="#workflows" class="nav-link">Workflows</a>
        <a href="#privacy" class="nav-link">Privacy &amp; Vault</a>
        <a href="#downloads" class="nav-link">Downloads</a>
        <a href="https://github.com/cencera-xyz/comate-downloader#readme" target="_blank" rel="noopener noreferrer" class="nav-link">Docs</a>
      </nav>

      <!-- Clean Header Action: Direct Download -->
      <div class="header-actions">
        <a href="#downloads" class="header-download-btn" id="header-download-btn">
          <span class="os-icon" id="header-os-icon">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </span>
          <span id="header-download-text">Download</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <nav class="mobile-nav">
        <a href="#features" class="mobile-nav-link">Features</a>
        <a href="#engine" class="mobile-nav-link">Engine</a>
        <a href="#workflows" class="mobile-nav-link">Workflows</a>
        <a href="#privacy" class="mobile-nav-link">Privacy &amp; Vault</a>
        <a href="#downloads" class="mobile-nav-link">Downloads</a>
        <a href="https://github.com/cencera-xyz/comate-downloader#readme" target="_blank" rel="noopener noreferrer" class="mobile-nav-link">Docs</a>
      </nav>
      <div class="mobile-drawer-footer">
        <a href="#downloads" class="header-download-btn w-full">Download Comate</a>
      </div>
    </div>
  </header>
  `;
}

export function initHeader(): void {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    const links = drawer.querySelectorAll('.mobile-nav-link');
    links.forEach(l => l.addEventListener('click', () => drawer.classList.remove('open')));
  }
}
