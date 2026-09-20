/**
 * Architecture Component (TATF Closed-Loop Architecture Deep Dive)
 */

import { LucideIcons } from './Icons';

export function renderArchitecture(): string {
  return `
  <section class="engine-section" id="engine">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-eyebrow">Under The Hood</span>
        <h2 class="section-headline">The ReAct Loop That Never Freezes</h2>
        <p class="section-subheadline">How Comate fuses Chromium DevTools with a closed-loop perception engine to self-heal whenever websites break.</p>
      </div>

      <div class="architecture-flow-wrapper">
        <div class="arch-card">
          <div class="arch-step-num">01</div>
          <div class="arch-icon">${LucideIcons.MessageSquare({ size: 24, strokeWidth: 1.8 })}</div>
          <h3 class="arch-title">Human Intent</h3>
          <p class="arch-text">Natural language goals decomposed into atomic, testable browser actions.</p>
          <div class="arch-tag">Prompt Ingestion</div>
        </div>

        <div class="arch-connector">
          <span class="connector-line"></span>
          <span class="connector-pulse"></span>
        </div>

        <div class="arch-card highlight-cyan">
          <div class="arch-step-num">02</div>
          <div class="arch-icon">${LucideIcons.Brain({ size: 24, strokeWidth: 1.8 })}</div>
          <h3 class="arch-title">Cognitive Planner</h3>
          <p class="arch-text">Generates execution graph, assigns permission gates (L1-L3), and checks credentials.</p>
          <div class="arch-tag">ReAct Scheduler</div>
        </div>

        <div class="arch-connector">
          <span class="connector-line"></span>
          <span class="connector-pulse"></span>
        </div>

        <div class="arch-card">
          <div class="arch-step-num">03</div>
          <div class="arch-icon">${LucideIcons.Settings2({ size: 24, strokeWidth: 1.8 })}</div>
          <h3 class="arch-title">DevTools CDP Driver</h3>
          <p class="arch-text">Direct high-speed communication with Chromium C++ rendering engine. Zero lag.</p>
          <div class="arch-tag">Native Protocol</div>
        </div>

        <div class="arch-connector">
          <span class="connector-line"></span>
          <span class="connector-pulse"></span>
        </div>

        <div class="arch-card highlight-emerald">
          <div class="arch-step-num">04</div>
          <div class="arch-icon">${LucideIcons.RefreshCw({ size: 24, strokeWidth: 1.8 })}</div>
          <h3 class="arch-title">TATF Self-Healing</h3>
          <p class="arch-text">Detects 403, captcha, or layout shifts. Formulates dynamic recovery path in &lt;100ms.</p>
          <div class="arch-tag">Auto-Recovery</div>
        </div>

        <div class="arch-connector">
          <span class="connector-line"></span>
          <span class="connector-pulse"></span>
        </div>

        <div class="arch-card">
          <div class="arch-step-num">05</div>
          <div class="arch-icon">${LucideIcons.PackageCheck({ size: 24, strokeWidth: 1.8 })}</div>
          <h3 class="arch-title">Local Artifact</h3>
          <p class="arch-text">Saves pristine Markdown, CSV, or downloaded binaries directly to your desktop.</p>
          <div class="arch-tag">Zero Cloud Leak</div>
        </div>
      </div>
    </div>
  </section>
  `;
}
