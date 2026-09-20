/**
 * BentoGrid Component (Claymorphic Feature Cards)
 */
import { showToast } from './Modals';
import { LucideIcons } from './Icons';

export function renderBentoGrid(): string {
  return `
  <section class="features-section" id="features">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-eyebrow">Engine Capabilities</span>
        <h2 class="section-headline">Everything your browser does.<br><span class="highlight-text">Now on autopilot.</span></h2>
        <p class="section-subheadline">Built from the ground up on Chromium with a dedicated neural DevTools orchestration engine.</p>
      </div>

      <!-- Bento Grid (Balanced 3-Column 2-Row Matrix: 2+1 on Row 1, 1+1+1 on Row 2) -->
      <div class="bento-grid">
        <!-- Card 1: Autonomous Browser Operator (Span 2) -->
        <div class="clay-card bento-card bento-span-2">
          <div class="bento-content">
            <div class="bento-badge-row">
              <span class="clay-badge">@browser</span>
              <span class="bento-meta">Live DOM Automation</span>
            </div>
            <h3 class="bento-title">Autonomous Browser Operator</h3>
            <p class="bento-desc">
              Interacts with the live DOM just like a human engineer. Clicks buttons, handles dynamic multi-step form sequences, solves captchas, and navigates obstacles autonomously while providing instant manual take-over anytime.
            </p>
            <div class="bento-visual">
              <div class="clay-inset-box mock-terminal">
                <div class="term-line"><span class="cmd-cyan">❯ @browser</span> .click("#submit-billing") <span class="term-tag">200 OK</span></div>
                <div class="term-line"><span class="cmd-cyan">❯ @browser</span> .type("#org-slug", "cencera-prime")</div>
                <div class="term-line"><span class="cmd-muted">Alert:</span> Stale DOM reference detected. Re-acquiring target node...</div>
                <div class="term-line"><span class="cmd-success">Solved:</span> Node bound in 14ms. Form dispatched.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Grounded Real-Time Research (@research) -->
        <div class="clay-card bento-card">
          <div class="bento-content">
            <div class="bento-badge-row">
              <span class="clay-badge">@research</span>
              <span class="bento-meta">Zero Hallucination</span>
            </div>
            <h3 class="bento-title">Grounded Real-Time Research</h3>
            <p class="bento-desc">
              Answers factual queries with live cross-referenced multi-source queries, Wikipedia verification, and automatic primary citation attribution.
            </p>
            <div class="bento-visual">
              <div class="clay-inset-box visual-sources">
                <div class="source-chip"><span class="source-icon">${LucideIcons.CheckCircle2({ size: 14, strokeWidth: 2.2 })}</span> arXiv:2408.120</div>
                <div class="source-chip"><span class="source-icon">${LucideIcons.CheckCircle2({ size: 14, strokeWidth: 2.2 })}</span> Wikipedia API</div>
                <div class="source-chip"><span class="source-icon">${LucideIcons.CheckCircle2({ size: 14, strokeWidth: 2.2 })}</span> Reuters Wire</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Think-Apply-Test-Fix (TATF) Engine -->
        <div class="clay-card bento-card">
          <div class="bento-content">
            <div class="bento-badge-row">
              <span class="clay-badge">TATF Engine</span>
              <span class="bento-meta">Self-Healing</span>
            </div>
            <h3 class="bento-title">Self-Healing TATF Loop</h3>
            <p class="bento-desc">
              When a page layout shifts, a selector changes, or a login collides, Comate doesn't fail. It executes a diagnostic loop to find an alternate route.
            </p>
            <div class="bento-visual">
              <div class="clay-inset-box visual-loop">
                <span class="loop-step">Think</span>
                <span class="loop-arrow">→</span>
                <span class="loop-step">Apply</span>
                <span class="loop-arrow">→</span>
                <span class="loop-step">Test</span>
                <span class="loop-arrow">→</span>
                <span class="loop-step active">Fix</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: Local Credential Vault (L1/L2/L3) -->
        <div class="clay-card bento-card">
          <div class="bento-content">
            <div class="bento-badge-row">
              <span class="clay-badge">Zero-Trust</span>
              <span class="bento-meta">Hardware Enclave</span>
            </div>
            <h3 class="bento-title">L1/L2/L3 Permission Vault</h3>
            <p class="bento-desc">
              Your passwords never touch LLM prompts or remote servers. Read-only actions flow freely, while financial or auth events mandate strict confirmation.
            </p>
            <div class="bento-visual">
              <div class="clay-inset-box visual-perms">
                <div class="perm-row">
                  <span class="perm-tag">L1: Read-Only</span>
                  <span class="perm-status">Autonomous</span>
                </div>
                <div class="perm-row">
                  <span class="perm-tag">L2: Form Submit</span>
                  <span class="perm-status">Supervised</span>
                </div>
                <div class="perm-row">
                  <span class="perm-tag">L3: Sensitive Vault</span>
                  <span class="perm-status highlight">Human Auth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 5: MarkItDown & Artifact System (Span 1 — Perfectly fills Row 2!) -->
        <div class="clay-card bento-card">
          <div class="bento-content">
            <div class="bento-badge-row">
              <span class="clay-badge">MarkItDown</span>
              <span class="bento-meta">Deliverable Engine</span>
            </div>
            <h3 class="bento-title">MarkItDown &amp; Deliverables</h3>
            <p class="bento-desc">
              Converts unstructured tables, PDFs, and web pages into clean GitHub Markdown, JSON, or structured CSVs saved locally.
            </p>
            <div class="bento-visual">
              <div class="clay-inset-box code-export-box">
                <div class="box-head">
                  <span class="file-name">benchmarks.csv</span>
                  <button class="clay-btn-sm" id="copy-sample-code">Copy CSV</button>
                </div>
                <pre class="box-code">vendor,model,tps,price
Cencera,qwen-2.5,88.4,$0.00
CloudA,r1-distill,64.1,$0.14
CloudB,claude-3-5,58.2,$3.00</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export function initBentoGrid(): void {
  const copyCsvBtn = document.getElementById('copy-sample-code') as HTMLButtonElement | null;
  if (copyCsvBtn) {
    copyCsvBtn.addEventListener('click', () => {
      const csv = `vendor,model,tps,price
Cencera,qwen-2.5,88.4,$0.00
CloudA,r1-distill,64.1,$0.14
CloudB,claude-3-5,58.2,$3.00`;
      navigator.clipboard.writeText(csv).then(() => {
        copyCsvBtn.textContent = 'Copied!';
        showToast('Sample CSV copied to clipboard!');
        setTimeout(() => {
          copyCsvBtn.textContent = 'Copy CSV';
        }, 2000);
      });
    });
  }
}
