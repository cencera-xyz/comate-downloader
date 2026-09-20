/**
 * FAQ Component (Expandable Technical & Privacy Accordion)
 */

export function renderFAQ(): string {
  return `
  <section class="faq-section" id="faq">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-eyebrow">Frequently Asked Questions</span>
        <h2 class="section-headline">Everything you need to know</h2>
        <p class="section-subheadline">Clear answers about privacy, local execution, model connections, and browser migration.</p>
      </div>

      <div class="faq-accordion-list">
        <div class="faq-item">
          <button class="faq-question-btn" aria-expanded="false">
            <span>How does Comate safeguard my sensitive banking and login credentials?</span>
            <span class="faq-plus">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>Comate incorporates a strict 3-tier permission enclave (L1/L2/L3). Credentials are encrypted using AES-256 GCM in your operating system's native hardware keystore (Linux Secret Service / Windows Credential Manager / Apple Keychain). Raw plaintext passwords never enter LLM system prompts or agent contexts. High-risk actions always require human biometric approval.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" aria-expanded="false">
            <span>Does Comate send my browsing history or screen captures to external servers?</span>
            <span class="faq-plus">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>No. Comate operates under a zero-knowledge telemetry model. We have no user tracking, no session recording, and no centralized telemetry servers. When you run Comate with a local model (via Ollama or LM Studio), not a single byte of your browsing data leaves your machine.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" aria-expanded="false">
            <span>Can I use my own API keys or local LLMs?</span>
            <span class="faq-plus">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>Yes. Comate is completely model-agnostic. You can configure any OpenAI-compatible endpoint, Anthropic Claude, Google Gemini, or local models running via Ollama (e.g., Qwen 2.5 Coder, Llama 3.3). Your API keys are stored in your encrypted local vault.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" aria-expanded="false">
            <span>How does the Think-Apply-Test-Fix (TATF) engine handle captchas and anti-bot blocks?</span>
            <span class="faq-plus">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>Unlike raw headless scripts, Comate runs on genuine desktop Chromium with authentic human-like mouse trajectories, keyboard typing rhythms, and browser fingerprint profiles. If an obstacle like Cloudflare Turnstile or reCAPTCHA appears, Comate can either diagnose alternative API endpoints or request a 5-second human-in-the-loop solve before resuming the automated workflow.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" aria-expanded="false">
            <span>Can I import my existing Chrome, Arc, or Firefox bookmarks and extensions?</span>
            <span class="faq-plus">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>Yes. During onboarding, Comate offers an instant 1-click migration wizard. You can import your bookmarks, saved history, passwords, and favorite Chrome Web Store extensions seamlessly.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export function initFAQ(): void {
  const items = document.querySelectorAll<HTMLElement>('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector<HTMLButtonElement>('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach(i => {
        i.classList.remove('open');
        const b = i.querySelector<HTMLButtonElement>('.faq-question-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
