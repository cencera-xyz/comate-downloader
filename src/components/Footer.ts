/**
 * Footer Component — Cencera Studio Design
 * Matches the Cencera layout with giant watermark, services, company, and connect columns.
 */
import { openModal } from './Modals';

export function renderFooter(): string {
  return `
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Top Grid: Brand & Column Links -->
      <div class="footer-top-grid">
        <!-- Brand & Agency Description -->
        <div class="footer-brand-col">
          <div class="f-brand">
            <span class="f-cencera-logo">
              <svg viewBox="0 0 28 28" width="30" height="30" fill="none">
                <path d="M14 3a11 11 0 1 0 10.3 7.2l-3.8 1.4A7 7 0 1 1 14 7c2.1 0 4 .9 5.3 2.4l3.5-3.3A10.96 10.96 0 0 0 14 3z" fill="#ffffff"/>
                <circle cx="21" cy="7" r="3.2" fill="#00c8e6"/>
              </svg>
            </span>
            <span class="f-cencera-name">CENCERA</span>
          </div>
          <p class="f-cencera-desc">
            Elite software development studio and engineering agency specializing in AI systems, Web3 protocols, cloud infrastructure, and custom software.
          </p>
          <a href="https://cencera.xyz" target="_blank" rel="noopener noreferrer" class="f-cencera-link">
            <span>cencera.xyz</span>
            <svg class="f-link-arrow" viewBox="0 0 14 14" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"/>
            </svg>
          </a>
        </div>

        <!-- Col 1: Services -->
        <div class="footer-links-col">
          <h4 class="f-heading">SERVICES</h4>
          <a href="#features" class="f-link">DeFi &amp; dApps</a>
          <a href="#workflows" class="f-link">Smart Contracts</a>
          <a href="#features" class="f-link">Token &amp; CEX Listing</a>
          <a href="#features" class="f-link">AI Applications</a>
          <a href="#workflows" class="f-link">Web Development</a>
          <a href="#privacy" class="f-link">Smart Contract Audits</a>
        </div>

        <!-- Col 2: Company -->
        <div class="footer-links-col">
          <h4 class="f-heading">COMPANY</h4>
          <a href="#about" class="f-link">About Us</a>
          <a href="#features" class="f-link">Services</a>
          <a href="#workflows" class="f-link">Portfolio</a>
          <a href="#features" class="f-link">Hackathons</a>
          <a href="#about" class="f-link">Team</a>
          <a href="mailto:contact@cencera.xyz" class="f-link">Contact</a>
        </div>

        <!-- Col 3: Connect -->
        <div class="footer-links-col">
          <h4 class="f-heading">CONNECT</h4>
          <a href="https://github.com/cencera" target="_blank" rel="noopener noreferrer" class="f-link f-link-social">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/company/cencera" target="_blank" rel="noopener noreferrer" class="f-link f-link-social">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76a1.76 1.76 0 0 0-1.76-1.76 1.76 1.76 0 0 0-1.76 1.76c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://discord.gg/cencera" target="_blank" rel="noopener noreferrer" class="f-link f-link-social">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord</span>
          </a>
          <a href="mailto:contact@cencera.xyz" class="f-link f-link-social">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      <!-- Giant Centered Watermark Typography -->
      <div class="f-watermark-wrapper" aria-hidden="true">
        <span class="f-watermark-text">CENCERA</span>
      </div>

      <!-- Bottom Row: Copyright & Design Credit -->
      <div class="footer-bottom-row">
        <p class="f-copy">&copy; 2026 Cencera Developers. All rights reserved.</p>
        <p class="f-credit">Designed with Soft Light UI</p>
      </div>
    </div>
  </footer>
  `;
}

export function initFooter(): void {
  // Resilient initialization
  const footerClTrigger = document.getElementById('footer-changelog-trigger');
  if (footerClTrigger) {
    footerClTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('changelog-modal');
    });
  }
}
