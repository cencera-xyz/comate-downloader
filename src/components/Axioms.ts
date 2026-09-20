/**
 * Axioms Component (Clean Claymorphic Metric Cards)
 */

export function renderAxioms(): string {
  return `
  <section class="axioms-section" id="axioms">
    <div class="section-container">
      <div class="axioms-grid">
        <div class="clay-card axiom-card">
          <div class="axiom-header">
            <span class="axiom-chip">Grounded</span>
          </div>
          <h3 class="axiom-title">Sub-second Fact Grounding</h3>
          <p class="axiom-desc">Real-time web search and live DOM verification eliminate hallucinations before decisions execute.</p>
        </div>

        <div class="clay-card axiom-card">
          <div class="axiom-header">
            <span class="axiom-chip">Security</span>
          </div>
          <h3 class="axiom-title">Zero-Knowledge Local Vault</h3>
          <p class="axiom-desc">Credentials stored with AES-256 GCM hardware encryption. LLMs never see raw plaintext passwords.</p>
        </div>

        <div class="clay-card axiom-card">
          <div class="axiom-header">
            <span class="axiom-chip">Recovery</span>
          </div>
          <h3 class="axiom-title">Self-Healing ReAct Loop</h3>
          <p class="axiom-desc">Think-Apply-Test-Fix engine auto-recovers from 403 blocks, altered selectors, and modal overlays.</p>
        </div>

        <div class="clay-card axiom-card">
          <div class="axiom-header">
            <span class="axiom-chip">Migration</span>
          </div>
          <h3 class="axiom-title">1-Click Browser Migration</h3>
          <p class="axiom-desc">Instantly import bookmarks, history, extensions, and sessions from Chrome, Arc, Brave, and Firefox.</p>
        </div>
      </div>
    </div>
  </section>
  `;
}
