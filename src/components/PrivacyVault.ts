/**
 * PrivacyVault Component (Architectural Security & Hardware Enclave)
 */

import { LucideIcons } from './Icons';

export function renderPrivacyVault(): string {
  return `
  <section class="privacy-section" id="privacy">
    <div class="section-container">
      <div class="privacy-split-grid">
        <div class="privacy-info-col">
          <span class="section-eyebrow">Architectural Security</span>
          <h2 class="section-headline">A Browser with a Brain.<br><span class="gradient-headline">A Vault for a Heart.</span></h2>
          <p class="section-subheadline">
            Traditional web agents send your raw session tokens and screen recordings to centralized cloud servers. Comate is engineered from day one with a strict Zero-Knowledge paradigm.
          </p>

          <div class="privacy-features-list">
            <div class="p-feature-item">
              <div class="p-feat-icon">${LucideIcons.KeyRound({ size: 20, strokeWidth: 2 })}</div>
              <div>
                <h4 class="p-feat-title">AES-256 GCM Hardware Keystore</h4>
                <p class="p-feat-desc">Your passwords and session cookies remain encrypted at rest using system TPM/Keyring. Keys never touch LLM contexts.</p>
              </div>
            </div>

            <div class="p-feature-item">
              <div class="p-feat-icon">${LucideIcons.ShieldAlert({ size: 20, strokeWidth: 2 })}</div>
              <div>
                <h4 class="p-feat-title">Strict Human-in-the-Loop Safeguards</h4>
                <p class="p-feat-desc">High-risk actions (payment checkout, deleting accounts, authorizing OAuth scopes) trigger a prominent physical confirmation modal.</p>
              </div>
            </div>

            <div class="p-feature-item">
              <div class="p-feat-icon">${LucideIcons.Cpu({ size: 20, strokeWidth: 2 })}</div>
              <div>
                <h4 class="p-feat-title">100% Offline &amp; Local Model Capable</h4>
                <p class="p-feat-desc">Bring your own Ollama, LM Studio, or local GGUF models. Run complex web automation completely disconnected from the internet.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Vault Graphic -->
        <div class="privacy-graphic-col">
          <div class="vault-container-card">
            <div class="vault-header">
              <div class="vault-badge-secure">
                <span class="secure-dot"></span>
                <span>Hardware Enclave: Locked</span>
              </div>
              <span class="vault-cipher">AES-256-GCM</span>
            </div>

            <div class="vault-visual-core">
              <div class="vault-ring-outer"></div>
              <div class="vault-ring-inner"></div>
              <div class="vault-center-core">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#00ddff" stroke-width="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>

            <div class="vault-stats-grid">
              <div class="v-stat-card">
                <span class="v-stat-number">0 bytes</span>
                <span class="v-stat-label">Cloud Telemetry Sent</span>
              </div>
              <div class="v-stat-card">
                <span class="v-stat-number">100%</span>
                <span class="v-stat-label">Local Keystore Isolation</span>
              </div>
              <div class="v-stat-card">
                <span class="v-stat-number">L1-L3</span>
                <span class="v-stat-label">Permission Enforcement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
