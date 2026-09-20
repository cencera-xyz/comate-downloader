/**
 * Workflows Component (Interactive Workflow Showcase Tabs)
 */

import { LucideIcons } from './Icons';

export function renderWorkflows(): string {
  return `
  <section class="workflows-section" id="workflows">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-eyebrow">Real-World Automation</span>
        <h2 class="section-headline">Watch Comate tackle your hardest web chores</h2>
        <p class="section-subheadline">Select any scenario below to inspect how the autonomous engine executes from prompt to verified deliverable.</p>
      </div>

      <!-- Workflow Tabs -->
      <div class="workflow-tabs-wrap">
        <div class="workflow-tabs-nav" role="tablist">
          <button class="wf-tab-btn active" data-tab="tab-github" role="tab" aria-selected="true">
            <span class="tab-btn-icon">${LucideIcons.Zap({ size: 16, strokeWidth: 2 })}</span>
            <span class="tab-btn-title">Autonomous Web Tasks</span>
            <span class="tab-btn-subtitle">GitHub Repo &amp; Release</span>
          </button>
          <button class="wf-tab-btn" data-tab="tab-gpu" role="tab" aria-selected="false">
            <span class="tab-btn-icon">${LucideIcons.Search({ size: 16, strokeWidth: 2 })}</span>
            <span class="tab-btn-title">Deep Research</span>
            <span class="tab-btn-subtitle">Cross-Vendor GPU Benchmarks</span>
          </button>
          <button class="wf-tab-btn" data-tab="tab-table" role="tab" aria-selected="false">
            <span class="tab-btn-icon">${LucideIcons.BarChart3({ size: 16, strokeWidth: 2 })}</span>
            <span class="tab-btn-title">Data Extraction</span>
            <span class="tab-btn-subtitle">SaaS Financials to CSV</span>
          </button>
        </div>

        <!-- Workflow Content Panels -->
        <div class="workflow-showcase-card">
          <!-- Tab 1: Autonomous Web Tasks -->
          <div class="wf-panel active" id="tab-github">
            <div class="wf-panel-grid">
              <div class="wf-steps-col">
                <div class="wf-goal-card">
                  <span class="goal-label">User Goal</span>
                  <p class="goal-text">"Create a private repository 'vector-indexer' on GitHub, enable Discussions, and download the latest release binary for Ubuntu."</p>
                </div>
                <div class="wf-timeline">
                  <div class="timeline-step completed">
                    <div class="step-marker">1</div>
                    <div class="step-detail">
                      <span class="step-time">0.12s</span>
                      <h4 class="step-title">Navigate to GitHub &amp; Auth Check</h4>
                      <p class="step-text">Reads authenticated local session cookies from AES-256 vault without re-prompting login.</p>
                    </div>
                  </div>
                  <div class="timeline-step completed">
                    <div class="step-marker">2</div>
                    <div class="step-detail">
                      <span class="step-time">0.48s</span>
                      <h4 class="step-title">Form Autofill &amp; Settings Dispatch</h4>
                      <p class="step-text">Types repo name, checks 'Private' radio button, enables GitHub Discussions toggle.</p>
                    </div>
                  </div>
                  <div class="timeline-step active">
                    <div class="step-marker">3</div>
                    <div class="step-detail">
                      <span class="step-time">1.02s</span>
                      <h4 class="step-title">Navigate Releases &amp; Download .deb</h4>
                      <p class="step-text">Locates latest tag v1.2.0, validates checksum, and streams file to <code>~/Downloads/</code>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wf-preview-col">
                <div class="wf-terminal-view">
                  <div class="term-top-bar">
                    <span class="term-dots"><i></i><i></i><i></i></span>
                    <span class="term-file">comate-agent-session.log</span>
                    <span class="term-engine">Chromium DevTools CDP</span>
                  </div>
                  <div class="term-body">
                    <div class="log-row info">[00:00:00.12] Dispatching CDP target: 'Page.navigate' -&gt; https://github.com/new</div>
                    <div class="log-row success">[00:00:00.28] Session verified: user='workspace-dev' (Vault Permission Level: L2)</div>
                    <div class="log-row action">[00:00:00.41] Input: element='#repository_name' val='vector-indexer'</div>
                    <div class="log-row action">[00:00:00.64] Click: element='input[value="private"]'</div>
                    <div class="log-row action">[00:00:00.89] Submit: form='#new_repository' -&gt; HTTP 302 Created</div>
                    <div class="log-row info">[00:00:01.05] Navigating to releases: https://github.com/workspace-dev/vector-indexer/releases</div>
                    <div class="log-row success">[00:00:01.32] Download initiated: vector-indexer_1.2.0_amd64.deb (38.4 MB) -&gt; Saved</div>
                    <div class="log-row finish">[00:00:01.40] Workflow completed successfully with 0 errors.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 2: Deep Research -->
          <div class="wf-panel" id="tab-gpu">
            <div class="wf-panel-grid">
              <div class="wf-steps-col">
                <div class="wf-goal-card">
                  <span class="goal-label">User Goal</span>
                  <p class="goal-text">"Compare hourly on-demand and spot pricing for 8x H100 SXM5 nodes across RunPod, Lambda Labs, CoreWeave, and AWS."</p>
                </div>
                <div class="wf-timeline">
                  <div class="timeline-step completed">
                    <div class="step-marker">1</div>
                    <div class="step-detail">
                      <span class="step-time">0.25s</span>
                      <h4 class="step-title">Parallel DOM Scrapes</h4>
                      <p class="step-text">Simultaneously launches 4 headless tabs to query dynamic pricing endpoints.</p>
                    </div>
                  </div>
                  <div class="timeline-step completed">
                    <div class="step-marker">2</div>
                    <div class="step-detail">
                      <span class="step-time">0.88s</span>
                      <h4 class="step-title">Normalize Currency &amp; Availability</h4>
                      <p class="step-text">Converts disparate table schemas into a unified cost-per-GPU-hour matrix.</p>
                    </div>
                  </div>
                  <div class="timeline-step active">
                    <div class="step-marker">3</div>
                    <div class="step-detail">
                      <span class="step-time">1.20s</span>
                      <h4 class="step-title">Export Verified Markdown Report</h4>
                      <p class="step-text">Includes direct deep-links and timestamped cache verification proof.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wf-preview-col">
                <div class="wf-terminal-view">
                  <div class="term-top-bar">
                    <span class="term-dots"><i></i><i></i><i></i></span>
                    <span class="term-file">h100_market_analysis.md</span>
                    <span class="term-engine">MarkItDown Grounding</span>
                  </div>
                  <div class="term-body">
                    <div class="log-row info"># 8x H100 SXM5 Cloud Price Comparison (Live Scrape)</div>
                    <div class="log-row success">| Provider | On-Demand ($/hr) | Spot ($/hr) | Availability |</div>
                    <div class="log-row">| RunPod | $21.52 | $16.40 | In Stock (US-East) |</div>
                    <div class="log-row">| Lambda Labs | $19.92 | N/A | Waitlist |</div>
                    <div class="log-row">| CoreWeave | $22.40 | $17.10 | Low Stock |</div>
                    <div class="log-row">| AWS (p5.48xlarge)| $38.45 | $24.80 | Spot Available |</div>
                    <div class="log-row finish">Recommendation: RunPod offers lowest on-demand cost with instant cluster spin-up.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 3: Document & Data Extraction -->
          <div class="wf-panel" id="tab-table">
            <div class="wf-panel-grid">
              <div class="wf-steps-col">
                <div class="wf-goal-card">
                  <span class="goal-label">User Goal</span>
                  <p class="goal-text">"Extract the 5-tier SaaS pricing comparison table from this web page, normalize currency to USD, and save as clean CSV."</p>
                </div>
                <div class="wf-timeline">
                  <div class="timeline-step completed">
                    <div class="step-marker">1</div>
                    <div class="step-detail">
                      <span class="step-time">0.15s</span>
                      <h4 class="step-title">Semantic Table Parser</h4>
                      <p class="step-text">Traverses complex nested flexbox &amp; grid DOM trees that break standard HTML parsers.</p>
                    </div>
                  </div>
                  <div class="timeline-step completed">
                    <div class="step-marker">2</div>
                    <div class="step-detail">
                      <span class="step-time">0.52s</span>
                      <h4 class="step-title">Feature Flag &amp; Add-on Extraction</h4>
                      <p class="step-text">Maps checkmarks and tiered limits into structured boolean and numeric columns.</p>
                    </div>
                  </div>
                  <div class="timeline-step active">
                    <div class="step-marker">3</div>
                    <div class="step-detail">
                      <span class="step-time">0.74s</span>
                      <h4 class="step-title">Local CSV File Generation</h4>
                      <p class="step-text">Writes output directly to <code>~/Desktop/pricing_matrix.csv</code> with 1-click clipboard copy.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wf-preview-col">
                <div class="wf-terminal-view">
                  <div class="term-top-bar">
                    <span class="term-dots"><i></i><i></i><i></i></span>
                    <span class="term-file">pricing_matrix.csv</span>
                    <span class="term-engine">Artifact Dispatcher</span>
                  </div>
                  <div class="term-body">
                    <div class="log-row info">tier_name,monthly_usd,annual_usd,seats,storage_gb,sso_saml</div>
                    <div class="log-row">Starter,19,15,1,10,false</div>
                    <div class="log-row">Team,49,39,5,100,false</div>
                    <div class="log-row">Business,99,79,15,500,true</div>
                    <div class="log-row success">Enterprise,299,239,Unlimited,5000,true</div>
                    <div class="log-row finish">Total 4 rows, 6 columns generated. Format: RFC 4180 valid CSV.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export function initWorkflows(): void {
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.wf-tab-btn');
  const panels = document.querySelectorAll<HTMLElement>('.wf-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (targetId) {
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      }
    });
  });
}
