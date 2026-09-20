/**
 * BrowserMockup Component
 * Authentic recreation of the Comate Desktop Browser interface in pure TypeScript & HTML.
 * Includes both "New Tab Home" (Image 1) and "Comate Assistant Active Workspace" (Image 2).
 */
import type { SimulatorStep } from '../types';
import { BrandIcons, LucideIcons } from './Icons';

export function renderBrowserMockup(): string {
  return `
  <div class="hero-mockup-wrapper">
    <div class="comate-desktop-window">
      <!-- Titlebar -->
      <div class="desktop-titlebar">
        <div class="titlebar-left">
          <span class="app-icon-tiny">
            <img src="/icon.png" width="14" height="14" alt="Comate" class="titlebar-icon-img" />
          </span>
        </div>
        <div class="titlebar-center">COMATE</div>
        <div class="titlebar-controls">
          <button class="win-control-btn win-min" aria-label="Minimize">–</button>
          <button class="win-control-btn win-max" aria-label="Maximize">□</button>
          <button class="win-control-btn win-close-btn" aria-label="Close">${LucideIcons.X({ size: 11, strokeWidth: 2 })}</button>
        </div>
      </div>

      <!-- Browser Navigation & Tab Strip -->
      <div class="browser-nav-strip">
        <div class="nav-actions-left">
          <button class="nav-icon-btn active" id="btn-toggle-sidebar" title="Toggle Sidebar">
            <svg viewBox="0 0 18 18" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="14" height="14" rx="3"/>
              <line x1="7" y1="2" x2="7" y2="16" stroke="#00ddff" stroke-width="2"/>
            </svg>
          </button>
          <button class="nav-icon-btn" title="Back">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13L5 8l5-5"/></svg>
          </button>
          <button class="nav-icon-btn" title="Forward">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3l5 5-5 5"/></svg>
          </button>
          <button class="nav-icon-btn" title="Reload">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9L14 2"/><path d="M14 6h-4"/></svg>
          </button>
        </div>

        <!-- Tab Strip -->
        <div class="browser-tab-strip">
          <div class="browser-tab active" id="browser-tab-newtab" title="Switch to New Tab">
            <span class="tab-lightning"><img src="/icon.png" class="tab-brand-icon" alt="Comate" width="13" height="13" /></span>
            <span class="tab-text">New Tab</span>
            <span class="tab-close-icon">${LucideIcons.X({ size: 10, strokeWidth: 2.2 })}</span>
          </div>
          <div class="browser-tab" id="browser-tab-assistant" title="Switch to Comate Assistant">
            <span class="tab-lightning">${LucideIcons.Brain({ size: 13, strokeWidth: 2 })}</span>
            <span class="tab-text">Comate Assistant</span>
            <span class="tab-close-icon">${LucideIcons.X({ size: 10, strokeWidth: 2.2 })}</span>
          </div>
          <button class="tab-new-btn" id="btn-add-tab" title="New Tab">${LucideIcons.Plus({ size: 12, strokeWidth: 2 })}</button>
        </div>

        <!-- Address / Omnibar -->
        <div class="browser-omnibar-wrap">
          <span class="omnibar-search-icon">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#64748b" stroke-width="2"><circle cx="7" cy="7" r="5"/><path d="M11 11l4 4"/></svg>
          </span>
          <input type="text" class="omnibar-input" id="browser-omnibar" value="Search with DuckDuckGo or enter URL" readonly>
          <div class="omnibar-actions-right">
            <button class="omnibar-ai-badge" id="omni-ai-btn" title="Toggle Comate AI">
              <span class="ai-spark">${LucideIcons.Sparkles({ size: 11, strokeWidth: 2 })}</span>
              <span>AI &gt;&gt;</span>
            </button>
            <button class="omni-icon-btn" title="Downloads">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 2v9M4 8l4 4 4-4M2 14h12"/></svg>
            </button>
            <button class="omni-icon-btn" title="User Profile">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3 3-4 6-4s6 1 6 4"/></svg>
            </button>
            <button class="omni-icon-btn" title="More Options">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Bookmarks Bar (Official Brand SVGs) -->
      <div class="browser-bookmarks-bar">
        <div class="bookmarks-list">
          <a href="#new-chat" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.ChatGPT({ size: 13 })}</span>
            <span class="bm-title">ChatGPT</span>
          </a>
          <a href="#github" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.GitHub({ size: 13 })}</span>
            <span class="bm-title">GitHub</span>
          </a>
          <a href="#arxiv" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.arXiv({ size: 13 })}</span>
            <span class="bm-title">arXiv AI Research</span>
          </a>
          <a href="#linear" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.Linear({ size: 13 })}</span>
            <span class="bm-title">Linear</span>
          </a>
          <a href="#huggingface" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.HuggingFace({ size: 13 })}</span>
            <span class="bm-title">Hugging Face</span>
          </a>
          <a href="#wikipedia" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.Wikipedia({ size: 13 })}</span>
            <span class="bm-title">Wikipedia</span>
          </a>
          <a href="#hackernews" class="bookmark-item">
            <span class="bm-icon">${BrandIcons.HackerNews({ size: 13 })}</span>
            <span class="bm-title">Hacker News</span>
          </a>
          <a href="#docs" class="bookmark-item">
            <span class="bm-icon"><img src="/icon.png" width="13" height="13" alt="Comate Docs" /></span>
            <span class="bm-title">Comate Docs</span>
          </a>
        </div>
        <div class="bookmarks-right">
          <span class="all-bookmarks-btn">
            <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3a1 1 0 0 1 1-1h3l2 2h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z"/></svg>
            <span>All Bookmarks</span>
          </span>
        </div>
      </div>

      <!-- Browser Main Workspace: Split Sidebar + Content Viewport -->
      <div class="comate-workspace-body">
        <!-- Left Collapsible Sidebar -->
        <aside class="comate-sidebar" id="comate-sidebar">
          <div class="sidebar-top">
            <button class="btn-new-chat" id="sidebar-new-chat">
              <span class="plus-icon">+</span>
              <span class="chat-btn-text">New Chat</span>
              <span class="chat-key-badge">Ctrl+N</span>
            </button>
            <button class="sidebar-collapse-icon" id="sidebar-collapse-icon" title="Toggle Collapse">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="12" height="12" rx="2"/>
                <line x1="6" y1="2" x2="6" y2="14"/>
              </svg>
            </button>
          </div>

          <!-- Chat History -->
          <div class="sidebar-history-area">
            <div class="empty-conversations-state" id="empty-history-view">
              <span class="sparkle-empty-icon">${LucideIcons.Sparkles({ size: 16, strokeWidth: 1.8 })}</span>
              <p class="empty-title">No conversations yet</p>
              <p class="empty-subtitle">Start a chat to begin exploring</p>
            </div>
            <div class="active-conversations-list" id="active-history-view" style="display: none;">
              <div class="chat-history-item active">
                <span class="ch-icon">${LucideIcons.Brain({ size: 13, strokeWidth: 1.8 })}</span>
                <div class="ch-text">
                  <span class="ch-title">Lead Generation Task</span>
                  <span class="ch-time">Just now • ReAct</span>
                </div>
              </div>
              <div class="chat-history-item">
                <span class="ch-icon">${LucideIcons.BarChart3({ size: 13, strokeWidth: 1.8 })}</span>
                <div class="ch-text">
                  <span class="ch-title">DeFi Yields Scrape</span>
                  <span class="ch-time">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar Footer -->
          <div class="sidebar-footer">
            <div class="sidebar-user-pill">
              <div class="user-avatar-circle">F</div>
              <span class="user-name">Friend</span>
              <span class="guest-badge">GUEST</span>
            </div>
            <button class="sidebar-settings-btn" title="Settings">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="8" r="3"/><path d="M14 8a6 6 0 0 0-.2-1.5l1.4-1.1-1.4-2.4-1.7.6a6 6 0 0 0-2.6-1.5L9.2 1H6.8l-.3 1.1A6 6 0 0 0 3.9 3.6L2.2 3 0.8 5.4l1.4 1.1A6 6 0 0 0 2 8c0 .5.1 1 .2 1.5L0.8 10.6l1.4 2.4 1.7-.6a6 6 0 0 0 2.6 1.5l.3 1.1h2.4l.3-1.1a6 6 0 0 0 2.6-1.5l1.7.6 1.4-2.4-1.4-1.1c.1-.5.2-1 .2-1.5z"/></svg>
              <span>Settings</span>
            </button>
          </div>
        </aside>

        <!-- Main Interactive Viewport -->
        <main class="comate-viewport-area">
          <!-- VIEW 1: AUTHENTIC COMATE NEW TAB PAGE (Image 1) -->
          <div class="comate-view-container active" id="view-comate-newtab">
            <div class="newtab-center-box">
              <div class="newtab-brand">
                <div class="newtab-logo-icon">
                  <img src="/icon.png" alt="Comate" class="newtab-logo-img" width="38" height="38" />
                </div>
                <h2 class="newtab-wordmark">COMATE</h2>
              </div>

              <!-- Prompt Input Card -->
              <div class="newtab-prompt-card">
                <div class="prompt-input-area">
                  <textarea class="prompt-input-text" id="newtab-prompt-input" rows="2" placeholder="Ask Comate to do anything, search the web, or enter a URL..."></textarea>
                </div>
                <div class="prompt-bottom-bar">
                  <div class="prompt-tools-left">
                    <button class="btn-prompt-tool btn-plus" title="Add Context or File">${LucideIcons.Plus({ size: 13, strokeWidth: 2.2 })}</button>
                    <button class="btn-prompt-tool active-cyan" id="btn-agent-pill" title="Autonomous Agent Mode">
                      <span class="tool-sparkle">${LucideIcons.Sparkles({ size: 12, strokeWidth: 2 })}</span>
                      <span>AI Agent</span>
                    </button>
                    <button class="btn-prompt-tool" id="btn-search-pill" title="Web Search Mode">
                      <span>${LucideIcons.Search({ size: 12, strokeWidth: 2 })} Web Search</span>
                    </button>
                  </div>
                  <div class="prompt-tools-right">
                    <div class="model-selector-pill">
                      <span class="model-status-dot"></span>
                      <span class="model-name">Nemotron 3.5</span>
                      <span class="model-tag">Medium</span>
                      <span class="model-arrow">▾</span>
                    </div>
                    <button class="btn-prompt-submit" id="btn-newtab-submit" title="Execute Task">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Quick Apps Speed Dial Grid (Official Brand Vectors) -->
              <div class="speeddial-grid">
                <div class="speeddial-card" data-app="ChatGPT">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.ChatGPT({ size: 16 })}</div>
                  <span class="speeddial-name">ChatGPT</span>
                </div>
                <div class="speeddial-card" data-app="GitHub">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.GitHub({ size: 16 })}</div>
                  <span class="speeddial-name">GitHub</span>
                </div>
                <div class="speeddial-card" data-app="arXiv">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.arXiv({ size: 16 })}</div>
                  <span class="speeddial-name">arXiv</span>
                </div>
                <div class="speeddial-card" data-app="Linear">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.Linear({ size: 15 })}</div>
                  <span class="speeddial-name">Linear</span>
                </div>
                <div class="speeddial-card" data-app="Hugging Face">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.HuggingFace({ size: 16 })}</div>
                  <span class="speeddial-name">HuggingFace</span>
                </div>
                <div class="speeddial-card" data-app="Vercel">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.Vercel({ size: 14 })}</div>
                  <span class="speeddial-name">Vercel</span>
                </div>
                <div class="speeddial-card" data-app="DuckDuckGo">
                  <span class="speeddial-del">${LucideIcons.X({ size: 9, strokeWidth: 2.2 })}</span>
                  <div class="speeddial-icon">${BrandIcons.DuckDuckGo({ size: 16 })}</div>
                  <span class="speeddial-name">DuckDuckGo</span>
                </div>
                <div class="speeddial-card speeddial-add">
                  <div class="speeddial-icon">${LucideIcons.Plus({ size: 14, strokeWidth: 2.2 })}</div>
                  <span class="speeddial-name">Add</span>
                </div>
              </div>

              <!-- Quick Tour Link -->
              <div class="newtab-tour-wrap">
                <a href="#workflows" class="newtab-tour-link">
                  <span class="tour-shield">${LucideIcons.ShieldCheck({ size: 13, strokeWidth: 2 })}</span>
                  <span>New to Comate? Take the Quick Tour</span>
                  <span class="tour-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          <!-- VIEW 2: AUTHENTIC COMATE ASSISTANT WORKSPACE (Image 2) -->
          <div class="comate-view-container" id="view-comate-assistant">
            <!-- Assistant Top Bar -->
            <div class="assistant-top-bar">
              <div class="assistant-id">
                <span class="asst-logo">
                  <img src="/icon.png" width="16" height="16" alt="Comate" class="asst-logo-img" />
                </span>
                <span class="asst-name">Comate Assistant</span>
                <span class="asst-active-chip">● Active</span>
              </div>
              <div class="assistant-actions">
                <button class="btn-asst-action" id="btn-asst-newchat">${LucideIcons.Plus({ size: 12, strokeWidth: 2 })} New Chat</button>
                <button class="btn-asst-action btn-upgrade">${LucideIcons.Sparkles({ size: 12, strokeWidth: 2 })} Upgrade</button>
                <button class="btn-asst-action">Share</button>
                <button class="btn-asst-action">···</button>
              </div>
            </div>

            <!-- Assistant Center Stage -->
            <div class="assistant-center-content">
              <h3 class="assistant-main-title">What's on your mind today?</h3>
              <p class="assistant-sub-title">Ask any question, research websites, generate code, or trigger autonomous tasks.</p>

              <!-- Two Starter Cards -->
              <div class="assistant-starter-cards">
                <div class="starter-card active-sim" id="card-starter-lead">
                  <h4 class="starter-card-title">Lead Generation</h4>
                  <p class="starter-card-desc">Find 50 active Web3 investors and compile to CSV</p>
                  <span class="starter-run-pill">${LucideIcons.Play({ size: 10, strokeWidth: 2 })} Run Workflow</span>
                </div>
                <div class="starter-card" id="card-starter-defi">
                  <h4 class="starter-card-title">DeFi Yields</h4>
                  <p class="starter-card-desc">Scrape TVL &amp; APY data from DeFiLlama</p>
                  <span class="starter-run-pill">${LucideIcons.Play({ size: 10, strokeWidth: 2 })} Run Workflow</span>
                </div>
              </div>

              <!-- Live Execution Stage -->
              <div class="assistant-live-execution-wrap">
                <div class="exec-split-container">
                  <!-- Left: Reasoning & Scratchpad -->
                  <div class="exec-reasoning-col">
                    <div class="reasoning-accordion expanded" id="reasoning-accordion">
                      <div class="accordion-header" id="accordion-toggle">
                        <div class="accordion-title-wrap">
                          <span class="brain-icon">${LucideIcons.Brain({ size: 14, strokeWidth: 2 })}</span>
                          <span class="reasoning-title">Cognitive Reasoning</span>
                          <span class="latency-badge" id="sim-latency">182ms</span>
                        </div>
                        <span class="accordion-chevron">▼</span>
                      </div>
                      <div class="accordion-content" id="accordion-content">
                        <div class="thought-stream" id="thought-stream">
                          <div class="thought-line"><span class="t-prefix">PLAN:</span> Connecting Chromium CDP. Navigating to investor directory and filtering active leads.</div>
                        </div>
                      </div>
                    </div>

                    <div class="scratchpad-card">
                      <div class="scratchpad-header">
                        <span class="sp-icon">${LucideIcons.Zap({ size: 13, strokeWidth: 2 })}</span>
                        <span>Live Action Scratchpad</span>
                        <span class="sp-step-count" id="sim-step-badge">Step 3 of 4</span>
                      </div>
                      <div class="scratchpad-list" id="scratchpad-list">
                        <!-- Dynamic items -->
                      </div>
                    </div>
                  </div>

                  <!-- Right: Simulated Live Viewport with Virtual Cursor -->
                  <div class="exec-viewport-col">
                    <div class="exec-vp-head">
                      <span class="vp-lock">${LucideIcons.Lock({ size: 12, strokeWidth: 2 })}</span>
                      <span class="vp-url" id="vp-current-url">https://directory.web3leads.io/active</span>
                      <span class="vp-status-pill">DOM Attached</span>
                    </div>
                    <div class="simulated-page" id="simulated-page">
                      <div class="sim-leads-table">
                        <div class="lead-row header">
                          <span>Entity / Lead</span>
                          <span>Focus</span>
                          <span>Check Size</span>
                          <span>Status</span>
                        </div>
                        <div class="lead-row" id="sim-article-1">
                          <span class="lead-name">Dragonfly Capital</span>
                          <span>Infrastructure / DeFi</span>
                          <span>$2M - $15M</span>
                          <span class="lead-stat-active">Verified</span>
                        </div>
                        <div class="lead-row highlighted" id="sim-article-2">
                          <span class="lead-name">Variant Fund</span>
                          <span>AI Agents &amp; Protocols</span>
                          <span>$1M - $5M</span>
                          <span class="lead-extract-pill">Extracting...</span>
                        </div>
                        <div class="lead-row" id="sim-article-3">
                          <span class="lead-name">1kx Network</span>
                          <span>Autonomous Systems</span>
                          <span>$500k - $3M</span>
                          <span class="lead-stat-active">Verified</span>
                        </div>
                      </div>

                      <!-- Extracted Artifact Preview -->
                      <div class="sim-artifact-preview" id="sim-artifact-preview">
                        <div class="art-preview-header">
                          <span class="art-preview-icon">${LucideIcons.FileText({ size: 13, strokeWidth: 2 })}</span>
                          <span>Generated: <code>web3_investors_50.csv</code></span>
                          <span class="art-success-badge">Verified</span>
                        </div>
                        <div class="art-preview-body">
                          <div class="code-preview-line"><span class="md-h">firm_name,focus_vertical,check_range,contact_handle</span></div>
                          <div class="code-preview-line"><span class="md-table">Dragonfly,Infrastructure,$2M-$15M,partner@dragonfly.xyz</span></div>
                          <div class="code-preview-line"><span class="md-table">Variant,AI Agents,$1M-$5M,deals@variant.fund</span></div>
                        </div>
                      </div>

                      <!-- Animated Virtual Glowing Cursor -->
                      <div class="virtual-cursor" id="virtual-cursor">
                        <div class="cursor-pointer">
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                            <polygon points="3 3 10 21 14 14 21 10 3 3" fill="#00ddff" stroke="#ffffff" stroke-width="1.5"/>
                          </svg>
                        </div>
                        <div class="cursor-pulse-ring" id="cursor-pulse-ring"></div>
                        <div class="cursor-agent-tag">Comate Operator</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistant Bottom Floating Chat Bar -->
            <div class="assistant-bottom-chat-bar">
              <div class="chat-input-pill-container">
                <button class="btn-chat-add" title="Attach file or link">+</button>
                <input type="text" class="chat-text-input" placeholder="Ask anything..." readonly>
                <div class="model-selector-pill">
                  <span class="model-status-dot"></span>
                  <span class="model-name">Nemotron 3.5</span>
                  <span class="model-tag">Medium</span>
                  <span class="model-arrow">▾</span>
                </div>
                <button class="btn-chat-mic" title="Voice dictation">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 11a3 3 0 0 0 3-3V4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"/><path d="M13 7a.5.5 0 0 0-1 0 4 4 0 0 1-8 0 .5.5 0 0 0-1 0 5 5 0 0 0 4.5 4.975V14H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8.5v-2.025A5 5 0 0 0 13 7z"/></svg>
                </button>
              </div>
              <div class="chat-disclaimer">Comate can make mistakes. Check important info.</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  `;
}

export function initBrowserMockup(): void {
  const sidebar = document.getElementById('comate-sidebar');
  const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
  const btnCollapseIcon = document.getElementById('sidebar-collapse-icon');
  const tabNewTab = document.getElementById('browser-tab-newtab');
  const tabAssistant = document.getElementById('browser-tab-assistant');
  const btnAddTab = document.getElementById('btn-add-tab');
  const viewNewTab = document.getElementById('view-comate-newtab');
  const viewAssistant = document.getElementById('view-comate-assistant');
  const omniInput = document.getElementById('browser-omnibar') as HTMLInputElement | null;
  const omniAiBtn = document.getElementById('omni-ai-btn');
  const newtabSubmit = document.getElementById('btn-newtab-submit');
  const agentPill = document.getElementById('btn-agent-pill');
  const sidebarNewChat = document.getElementById('sidebar-new-chat');
  const starterLead = document.getElementById('card-starter-lead');
  const starterDefi = document.getElementById('card-starter-defi');
  const emptyHistory = document.getElementById('empty-history-view');
  const activeHistory = document.getElementById('active-history-view');

  // Sidebar Toggle
  const toggleSidebar = () => {
    if (sidebar) sidebar.classList.toggle('collapsed');
  };
  if (btnToggleSidebar) btnToggleSidebar.addEventListener('click', toggleSidebar);
  if (btnCollapseIcon) btnCollapseIcon.addEventListener('click', toggleSidebar);

  // View Switching Logic
  const switchToAssistant = () => {
    if (tabNewTab && tabAssistant && viewNewTab && viewAssistant) {
      tabNewTab.classList.remove('active');
      tabAssistant.classList.add('active');
      viewNewTab.classList.remove('active');
      viewAssistant.classList.add('active');
      if (omniInput) omniInput.value = 'comate://assistant?session=lead_generation';
      if (emptyHistory && activeHistory) {
        emptyHistory.style.display = 'none';
        activeHistory.style.display = 'flex';
      }
    }
  };

  const switchToNewTab = () => {
    if (tabNewTab && tabAssistant && viewNewTab && viewAssistant) {
      tabAssistant.classList.remove('active');
      tabNewTab.classList.add('active');
      viewAssistant.classList.remove('active');
      viewNewTab.classList.add('active');
      if (omniInput) omniInput.value = 'Search with DuckDuckGo or enter URL';
    }
  };

  if (tabNewTab) tabNewTab.addEventListener('click', switchToNewTab);
  if (tabAssistant) tabAssistant.addEventListener('click', switchToAssistant);
  if (btnAddTab) btnAddTab.addEventListener('click', switchToNewTab);
  if (sidebarNewChat) sidebarNewChat.addEventListener('click', switchToAssistant);
  if (omniAiBtn) omniAiBtn.addEventListener('click', switchToAssistant);
  if (newtabSubmit) newtabSubmit.addEventListener('click', switchToAssistant);
  if (agentPill) agentPill.addEventListener('click', switchToAssistant);

  // Starter Cards
  if (starterLead) {
    starterLead.addEventListener('click', () => {
      starterLead.classList.add('active-sim');
      if (starterDefi) starterDefi.classList.remove('active-sim');
      switchToAssistant();
    });
  }
  if (starterDefi) {
    starterDefi.addEventListener('click', () => {
      starterDefi.classList.add('active-sim');
      if (starterLead) starterLead.classList.remove('active-sim');
      switchToAssistant();
    });
  }

  // Live Agent Simulation Machine
  initSimulationLoop();
}

function initSimulationLoop(): void {
  const cursor = document.getElementById('virtual-cursor') as HTMLElement | null;
  const pulseRing = document.getElementById('cursor-pulse-ring') as HTMLElement | null;
  const scratchpadList = document.getElementById('scratchpad-list') as HTMLElement | null;
  const thoughtStream = document.getElementById('thought-stream') as HTMLElement | null;
  const latencyBadge = document.getElementById('sim-latency') as HTMLElement | null;
  const stepBadge = document.getElementById('sim-step-badge') as HTMLElement | null;
  const accordionToggle = document.getElementById('accordion-toggle') as HTMLElement | null;
  const reasoningAccordion = document.getElementById('reasoning-accordion') as HTMLElement | null;
  const row1 = document.getElementById('sim-article-1') as HTMLElement | null;
  const row2 = document.getElementById('sim-article-2') as HTMLElement | null;
  const row3 = document.getElementById('sim-article-3') as HTMLElement | null;
  const artifactPreview = document.getElementById('sim-artifact-preview') as HTMLElement | null;

  if (accordionToggle && reasoningAccordion) {
    accordionToggle.addEventListener('click', () => {
      reasoningAccordion.classList.toggle('expanded');
    });
  }

  const steps: SimulatorStep[] = [
    {
      stepNum: '1 of 4',
      latency: '124ms',
      thought: '<span class="t-prefix">PLAN:</span> Connecting Chromium CDP. Navigating to investor directory and filtering active leads.',
      scratchpads: [
        { text: 'Target acquired: directory.web3leads.io', status: 'completed' },
        { text: 'Filtering active seed & series-A lead candidates...', status: 'active' }
      ],
      cursorX: 50,
      cursorY: 35,
      action: () => {
        if (row1) row1.classList.remove('highlighted');
        if (row2) row2.classList.remove('highlighted');
        if (row3) row3.classList.remove('highlighted');
        if (artifactPreview) artifactPreview.style.display = 'none';
      }
    },
    {
      stepNum: '2 of 4',
      latency: '188ms',
      thought: '<span class="t-prefix">INSPECT:</span> Entity 1 "Dragonfly Capital" verified. Extracting check size parameters & partners.',
      scratchpads: [
        { text: '50 candidate entities shortlisted', status: 'completed' },
        { text: 'Extracting portfolio & ticket parameters...', status: 'active' }
      ],
      cursorX: 180,
      cursorY: 55,
      action: () => {
        if (row1) row1.classList.add('highlighted');
        triggerPulse();
      }
    },
    {
      stepNum: '3 of 4',
      latency: '146ms',
      thought: '<span class="t-prefix">TATF:</span> Processing Entity 2 "Variant Fund". Resolving dynamic data attributes without page refresh.',
      scratchpads: [
        { text: 'Dragonfly Capital parsed ($2M-$15M)', status: 'completed' },
        { text: 'Extracting Variant Fund partner contacts...', status: 'active' }
      ],
      cursorX: 210,
      cursorY: 95,
      action: () => {
        if (row1) row1.classList.remove('highlighted');
        if (row2) row2.classList.add('highlighted');
        triggerPulse();
      }
    },
    {
      stepNum: '4 of 4',
      latency: '62ms',
      thought: '<span class="t-prefix">SYNTHESIZE:</span> 50 verified investor records extracted. Compiling local CSV deliverable.',
      scratchpads: [
        { text: 'All 50 investor records parsed & validated', status: 'completed' },
        { text: 'Saved artifact: web3_investors_50.csv (Desktop)', status: 'completed' }
      ],
      cursorX: 160,
      cursorY: 180,
      action: () => {
        if (row2) row2.classList.remove('highlighted');
        if (artifactPreview) {
          artifactPreview.style.display = 'block';
          artifactPreview.style.animation = 'fadeIn 0.3s ease-out';
        }
        triggerPulse();
      }
    }
  ];

  let currentIdx = 0;

  function renderStep(idx: number): void {
    const s = steps[idx];
    if (!s) return;

    if (stepBadge) stepBadge.textContent = `Step ${s.stepNum}`;
    if (latencyBadge) latencyBadge.textContent = s.latency;
    if (thoughtStream) {
      thoughtStream.innerHTML = `<div class="thought-line">${s.thought}</div>`;
    }

    if (scratchpadList) {
      scratchpadList.innerHTML = s.scratchpads.map(item => `
        <div class="scratchpad-item ${item.status}">
          <span class="sp-status-icon">${item.status === 'completed' ? LucideIcons.CheckCircle2({ size: 12, strokeWidth: 2.2 }) : LucideIcons.Zap({ size: 12, strokeWidth: 2.2 })}</span>
          <span>${item.text}</span>
        </div>
      `).join('');
    }

    if (cursor) {
      cursor.style.left = `${s.cursorX}px`;
      cursor.style.top = `${s.cursorY}px`;
    }

    if (s.action) s.action();
  }

  function triggerPulse(): void {
    if (!pulseRing) return;
    pulseRing.classList.remove('pulsing');
    void pulseRing.offsetWidth;
    pulseRing.classList.add('pulsing');
  }

  renderStep(0);

  setInterval(() => {
    currentIdx = (currentIdx + 1) % steps.length;
    renderStep(currentIdx);
  }, 3400);
}
