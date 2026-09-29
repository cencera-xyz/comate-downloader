/**
 * Legal & Compliance Pages Component for Comate Browser & Cencera
 * Includes:
 *  1. Terms of Service (/terms)
 *  2. Privacy Policy (/privacy)
 *  3. Refund Policy (/refund)
 *  4. Anti-Piracy & Copyright Policy (/anti-piracy, /piracy)
 */


export type LegalDocType = 'terms' | 'privacy' | 'refund' | 'anti-piracy';

interface LegalMeta {
  title: string;
  badge: string;
  lastUpdated: string;
  effectiveDate: string;
  description: string;
}

export const LEGAL_METAS: Record<LegalDocType, LegalMeta> = {
  terms: {
    title: 'Terms of Service',
    badge: 'Legal Agreement',
    lastUpdated: 'March 29, 2026',
    effectiveDate: 'March 29, 2026',
    description: 'The legally binding terms and conditions governing your use of Comate Browser, Comate Downloader, desktop binaries, and Cencera software services.'
  },
  privacy: {
    title: 'Privacy Policy',
    badge: 'Zero-Knowledge Architecture',
    lastUpdated: 'March 29, 2026',
    effectiveDate: 'March 29, 2026',
    description: 'How we uphold complete client-side data sovereignty, zero cloud telemetry, hardware-enclave credential encryption, and regulatory compliance (GDPR, CCPA/CPRA).'
  },
  refund: {
    title: 'Refund Policy',
    badge: 'Paddle Merchant of Record',
    lastUpdated: 'March 29, 2026',
    effectiveDate: 'March 29, 2026',
    description: 'Clear, transparent rules regarding our 14-day money-back guarantee, subscription cancellations, billing disbursements, and Paddle.com refund procedures.'
  },
  'anti-piracy': {
    title: 'Anti-Piracy & Copyright Policy',
    badge: 'DMCA & IP Protection',
    lastUpdated: 'March 29, 2026',
    effectiveDate: 'March 29, 2026',
    description: 'Our strict stance against software piracy, commercial DRM circumvention, unauthorized media redistribution, and our statutory DMCA notice procedure.'
  }
};

export function renderLegalHeader(activeDoc: LegalDocType): string {
  return `
  <header class="legal-site-header">
    <div class="legal-header-container">
      <div class="legal-brand-group">
        <a href="/" class="brand-link" data-route="/" aria-label="Return to Comate Home">
          <div class="brand-logo-wrap">
            <img src="/icon.png" alt="Comate Logo" class="brand-logo-img" width="32" height="32" />
          </div>
          <div class="brand-text-group">
            <span class="brand-name">Comate</span>
            <span class="BASE-badge">LEGAL</span>
          </div>
        </a>
        <div class="legal-breadcrumbs">
          <span class="bc-sep">/</span>
          <a href="/" data-route="/" class="bc-link">Home</a>
          <span class="bc-sep">/</span>
          <span class="bc-current">${LEGAL_METAS[activeDoc].title}</span>
        </div>
      </div>

      <div class="legal-header-actions">
        <button type="button" class="legal-action-btn" id="legal-print-btn" title="Print or Save as PDF">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          <span>Print / PDF</span>
        </button>
        <button type="button" class="legal-action-btn" id="legal-copy-link-btn" title="Copy Direct Link">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <span id="legal-copy-text">Share</span>
        </button>
        <a href="/" data-route="/" class="legal-back-btn">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back to Comate Home</span>
        </a>
      </div>
    </div>
  </header>
  `;
}

export function renderLegalTabs(activeDoc: LegalDocType): string {
  const tabs: { id: LegalDocType; path: string; label: string; iconSvg: string }[] = [
    {
      id: 'terms',
      path: '/terms',
      label: 'Terms of Service',
      iconSvg: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>'
    },
    {
      id: 'privacy',
      path: '/privacy',
      label: 'Privacy Policy',
      iconSvg: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      id: 'refund',
      path: '/refund',
      label: 'Refund Policy',
      iconSvg: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>'
    },
    {
      id: 'anti-piracy',
      path: '/anti-piracy',
      label: 'Anti-Piracy Policy',
      iconSvg: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
    }
  ];

  return `
  <div class="legal-nav-sticky">
    <div class="legal-nav-container">
      <div class="legal-tabs-wrapper" role="tablist" aria-label="Legal Policies Navigation">
        ${tabs.map(tab => `
          <a href="${tab.path}" 
             data-route="${tab.path}" 
             class="legal-tab-btn ${activeDoc === tab.id ? 'active' : ''}"
             role="tab"
             aria-selected="${activeDoc === tab.id}">
            <span class="legal-tab-icon">${tab.iconSvg}</span>
            <span class="legal-tab-label">${tab.label}</span>
          </a>
        `).join('')}
      </div>
    </div>
  </div>
  `;
}

function renderLegalHero(activeDoc: LegalDocType): string {
  const meta = LEGAL_METAS[activeDoc];
  return `
  <div class="legal-hero-banner">
    <div class="legal-hero-inner">
      <div class="legal-badge-pill">
        <span class="badge-dot"></span>
        <span>${meta.badge}</span>
      </div>
      <h1 class="legal-hero-title">${meta.title}</h1>
      <p class="legal-hero-desc">${meta.description}</p>
      <div class="legal-meta-tags">
        <div class="meta-tag-item">
          <span class="meta-tag-label">Effective:</span>
          <span class="meta-tag-value">${meta.effectiveDate}</span>
        </div>
        <span class="meta-tag-divider">•</span>
        <div class="meta-tag-item">
          <span class="meta-tag-label">Last Revised:</span>
          <span class="meta-tag-value">${meta.lastUpdated}</span>
        </div>
        <span class="meta-tag-divider">•</span>
        <div class="meta-tag-item">
          <span class="meta-tag-label">Entity:</span>
          <span class="meta-tag-value">Cencera Technologies Inc.</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* ==========================================================================
   1. REFUND POLICY CONTENT
   ========================================================================== */
function renderRefundContent(): { toc: { id: string; label: string }[]; content: string } {
  const toc = [
    { id: 'refund-overview', label: '1. Overview & Scope' },
    { id: 'refund-mor', label: '2. Merchant of Record (Paddle)' },
    { id: 'refund-guarantee', label: '3. 14-Day Money-Back Guarantee' },
    { id: 'refund-subscriptions', label: '4. Subscription Cancellations' },
    { id: 'refund-renewals', label: '5. Automatic Renewal Grace Period' },
    { id: 'refund-exceptions', label: '6. Non-Refundable Scenarios' },
    { id: 'refund-process', label: '7. How to Request a Refund' },
    { id: 'refund-timelines', label: '8. Payment Disbursal & Timelines' },
    { id: 'refund-disputes', label: '9. Dispute Prevention & Contact' }
  ];

  const content = `
    <!-- Highlights Card -->
    <div class="legal-highlight-card">
      <div class="hl-card-header">
        <span class="hl-badge">Quick Summary for Customers</span>
        <span class="hl-tag">Paddle Compliant</span>
      </div>
      <div class="hl-grid">
        <div class="hl-item">
          <span class="hl-val">14 Days</span>
          <span class="hl-lbl">No-questions-asked money-back guarantee on all initial license purchases.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">Paddle.com</span>
          <span class="hl-lbl">Authorized Merchant of Record handling billing, global tax, and secure refund disbursements.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">24–48 Hours</span>
          <span class="hl-lbl">Average review SLA for direct refund submissions via email or Paddle portal.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">1-Click Cancel</span>
          <span class="hl-lbl">Cancel your active subscription at any time without fees or penalties.</span>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="legal-section" id="refund-overview">
      <h2 class="legal-sec-title">1. Overview &amp; Scope</h2>
      <p>
        This Refund Policy governs all purchases of digital software licenses, downloadable desktop packages, and premium recurring subscriptions associated with <strong>Comate Browser</strong> and <strong>Comate Downloader</strong>, developed and distributed by <strong>Cencera Technologies Inc.</strong> ("Cencera", "we", "us", or "our").
      </p>
      <p>
        We are dedicated to building state-of-the-art autonomous browsing and DOM automation software. We want you to be completely confident in your purchase. If Comate does not meet your technical requirements, productivity expectations, or operating system workflow, we provide a fair, straightforward, and transparent refund process in full accordance with consumer protection statutes and our reseller agreements.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="legal-section" id="refund-mor">
      <h2 class="legal-sec-title">2. Merchant of Record Disclosure (Paddle.com)</h2>
      <div class="legal-notice-box notice-cyan">
        <div class="notice-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
        </div>
        <div class="notice-content">
          <strong>Merchant of Record Notice:</strong> Our order process and billing are conducted by our online reseller and Merchant of Record, <strong>Paddle.com</strong> (Paddle Payments Ltd / Paddle.com Inc.). Paddle handles payment processing, currency conversions, localized Value Added Tax (VAT), Goods and Services Tax (GST), United States Sales Tax compliance, anti-fraud screening, and official refund remittances.
        </div>
      </div>
      <p>
        When you purchase a license or subscription for Comate, you enter into a contractual relationship with Paddle as the seller of record. Consequently, all refunds are approved in coordination with Paddle's merchant guidelines and disbursed back through Paddle's banking infrastructure to your original payment vehicle.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="legal-section" id="refund-guarantee">
      <h2 class="legal-sec-title">3. 14-Day Money-Back Guarantee</h2>
      <p>
        Every new Comate PRO or Enterprise purchase comes with an unconditional <strong>14-day money-back guarantee</strong>. You have <strong>14 calendar days</strong> from the timestamp of your initial order or first recurring activation to test Comate thoroughly on your systems (Windows 10/11, Linux distributions, or compatible hardware).
      </p>
      <p>
        You are eligible for a 100% full refund within this 14-day window under circumstances including, but not limited to:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Incompatibility:</strong> Comate fails to execute properly on your verified system configuration or conflicts with existing local security software, and our engineering support cannot resolve the defect.</li>
        <li><strong>Feature Mismatch:</strong> The automation workflows, DOM navigation, or headless compilation engines do not align with your technical requirements.</li>
        <li><strong>Unsatisfactory Experience:</strong> Any other reason where you determine Comate is not the right tool for your current workflow.</li>
      </ul>
      <p>
        No interrogations or burdensome justifications are required. We only ask for your feedback so our engineering team can continue improving the software.
      </p>
    </section>

    <!-- Section 4 -->
    <section class="legal-section" id="refund-subscriptions">
      <h2 class="legal-sec-title">4. Subscription Cancellations</h2>
      <p>
        If you are enrolled in a monthly or annual subscription tier, you retain total control over your billing cycle. You may cancel your subscription at any time without paying any cancellation penalty or early termination fees:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Self-Service In-App:</strong> Open Comate Settings &rarr; Billing &amp; Subscriptions &rarr; click <em>Manage Subscription via Paddle</em> &rarr; select <em>Cancel Subscription</em>.</li>
        <li><strong>Through Paddle Email Receipts:</strong> Every billing confirmation email sent by Paddle contains a direct, secure link to manage or cancel your active plan.</li>
        <li><strong>Direct Support Assistance:</strong> You may also email <a href="mailto:billing@cencera.xyz" class="legal-link">billing@cencera.xyz</a> with your license key or order email, and our team will immediately cancel your recurring subscription on your behalf.</li>
      </ul>
      <p>
        <strong>Access Continuation:</strong> Upon cancellation, your paid subscription will not renew for subsequent billing intervals. You will maintain full, unrestricted access to Comate PRO capabilities through the conclusion of your already paid billing cycle.
      </p>
    </section>

    <!-- Section 5 -->
    <section class="legal-section" id="refund-renewals">
      <h2 class="legal-sec-title">5. Automatic Renewal Grace Period</h2>
      <p>
        We understand that renewal dates can occasionally be overlooked. If your subscription automatically renews and you did not intend to continue service:
      </p>
      <div class="legal-callout">
        <strong>48-Hour Renewal Grace Period:</strong> If you submit a cancellation and refund request within <strong>48 hours</strong> of an automatic recurring charge, we will issue a full refund for that renewal charge, provided you have not actively utilized metered cloud-burst API quotas or bulk extraction runs during that 48-hour renewal window.
      </div>
    </section>

    <!-- Section 6 -->
    <section class="legal-section" id="refund-exceptions">
      <h2 class="legal-sec-title">6. Non-Refundable Scenarios</h2>
      <p>
        To protect against fraud, deliberate bad-faith exploitation, and excessive compute abuse, refunds cannot be granted under the following exceptional circumstances:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Expired Window:</strong> Requests submitted after the expiration of the 14-day guarantee period, unless required by mandatory local statutory consumer protection laws in your jurisdiction (such as statutory EU cooling-off rights where digital waivers have not been formally waived).</li>
        <li><strong>Terms of Service Violations:</strong> Accounts or keys that have been suspended or terminated due to malicious attacks, distribution of malware, running automated botnets, credential harvesting, or intentional circumvention of digital rights management (DRM) in violation of our Anti-Piracy Policy.</li>
        <li><strong>Consumed Raw Third-Party API Pass-Throughs:</strong> If you explicitly purchased external upstream LLM inference credits (e.g., custom enterprise cloud model bundles passed through at raw provider cost) that were already fully consumed by your autonomous agents.</li>
        <li><strong>Excessive Repeat Purchases:</strong> Purchasing, refunding, and repeatedly repurchasing the same software tier within short succession.</li>
      </ul>
    </section>

    <!-- Section 7 -->
    <section class="legal-section" id="refund-process">
      <h2 class="legal-sec-title">7. How to Request a Refund</h2>
      <p>
        Initiating a refund takes less than two minutes. You may use either of the two official channels below:
      </p>
      <div class="legal-steps-grid">
        <div class="step-card">
          <div class="step-number">Option A</div>
          <h4 class="step-title">Direct Email to Cencera Billing</h4>
          <p class="step-desc">
            Send an email to <a href="mailto:billing@cencera.xyz" class="legal-link">billing@cencera.xyz</a> (or <a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a>) with:
          </p>
          <ul class="step-mini-list">
            <li>Subject: <code>Refund Request - [Your Order ID]</code></li>
            <li>Your Paddle Order Number or Transaction ID (e.g. <code>#12345678</code>)</li>
            <li>The email address used during checkout</li>
            <li>A brief description of why you are requesting a refund</li>
          </ul>
        </div>

        <div class="step-card">
          <div class="step-number">Option B</div>
          <h4 class="step-title">Via Paddle Checkout Receipt</h4>
          <p class="step-desc">
            Open the order confirmation receipt sent to your email from <code>help@paddle.com</code>, click on <strong>"Manage Subscription"</strong> or <strong>"Contact Support / Request Refund"</strong>, and follow the automated on-screen wizard.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 8 -->
    <section class="legal-section" id="refund-timelines">
      <h2 class="legal-sec-title">8. Payment Disbursal &amp; Timelines</h2>
      <p>
        Once our billing department or Paddle reviews and approves your refund request:
      </p>
      <div class="legal-table-responsive">
        <table class="legal-table">
          <thead>
            <tr>
              <th>Payment Instrument</th>
              <th>Processing Time</th>
              <th>Disbursing Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Credit / Debit Card (Visa, Mastercard, Amex)</strong></td>
              <td>3 to 7 business days (varies by issuing bank)</td>
              <td>Paddle.com</td>
            </tr>
            <tr>
              <td><strong>PayPal Balance or Linked Account</strong></td>
              <td>1 to 3 business days</td>
              <td>Paddle.com</td>
            </tr>
            <tr>
              <td><strong>Apple Pay / Google Pay</strong></td>
              <td>3 to 5 business days</td>
              <td>Paddle.com</td>
            </tr>
            <tr>
              <td><strong>Wire Transfer / ACH (Enterprise)</strong></td>
              <td>5 to 10 business days</td>
              <td>Paddle.com / Cencera</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-muted mt-2">
        Note: The actual time for funds to appear on your bank statement depends on your card issuer or banking institution. Paddle issues refunds in the same currency and exchange rates as the original transaction.
      </p>
    </section>

    <!-- Section 9 -->
    <section class="legal-section" id="refund-disputes">
      <h2 class="legal-sec-title">9. Dispute Prevention &amp; Contact</h2>
      <p>
        If you experience any billing discrepancy, duplicate charge, or technical issue, we strongly encourage you to contact us first at <a href="mailto:billing@cencera.xyz" class="legal-link">billing@cencera.xyz</a> before filing a dispute or chargeback with your credit card company or PayPal.
      </p>
      <p>
        Bank chargebacks can take 60 to 90 days to resolve through formal payment network arbitration, whereas our billing team can review and issue an immediate refund in less than 24 hours. We are here to help and ensure a completely stress-free experience.
      </p>
      <div class="legal-contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div>
          <h4 class="contact-card-title">Cencera Billing &amp; Customer Support</h4>
          <p class="contact-card-text">
            Email: <a href="mailto:billing@cencera.xyz" class="legal-link">billing@cencera.xyz</a> / <a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a><br>
            Merchant of Record Support: <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" class="legal-link">Paddle Buyer Support (paddle.net)</a><br>
            Physical Address: Cencera Technologies Inc., Legal &amp; Compliance Dept., Delaware, USA.
          </p>
        </div>
      </div>
    </section>
  `;

  return { toc, content };
}

/* ==========================================================================
   2. TERMS OF SERVICE CONTENT
   ========================================================================== */
function renderTermsContent(): { toc: { id: string; label: string }[]; content: string } {
  const toc = [
    { id: 'terms-acceptance', label: '1. Acceptance of Terms' },
    { id: 'terms-description', label: '2. Software & Services' },
    { id: 'terms-eligibility', label: '3. Eligibility & Account Security' },
    { id: 'terms-license', label: '4. License Grant & Permitted Use' },
    { id: 'terms-billing', label: '5. Commercial Terms & Paddle MOR' },
    { id: 'terms-acceptable-use', label: '6. Acceptable Use Policy' },
    { id: 'terms-ip', label: '7. Intellectual Property & User Data' },
    { id: 'terms-ai', label: '8. Third-Party AI Integrations' },
    { id: 'terms-updates', label: '9. Updates & Zero-Telemetry' },
    { id: 'terms-warranty', label: '10. Disclaimer of Warranties' },
    { id: 'terms-liability', label: '11. Limitation of Liability' },
    { id: 'terms-indemnity', label: '12. Indemnification' },
    { id: 'terms-termination', label: '13. Termination & Survival' },
    { id: 'terms-governing', label: '14. Governing Law & Arbitration' },
    { id: 'terms-contact', label: '15. Contact & Formal Notices' }
  ];

  const content = `
    <!-- Highlights Card -->
    <div class="legal-highlight-card">
      <div class="hl-card-header">
        <span class="hl-badge">Key Terms At A Glance</span>
        <span class="hl-tag">Version 2.4</span>
      </div>
      <div class="hl-grid">
        <div class="hl-item">
          <span class="hl-val">Data Sovereignty</span>
          <span class="hl-lbl">Your local browser sessions, cookies, and automation data belong 100% to you and never leave your machine.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">Paddle Reseller</span>
          <span class="hl-lbl">Subscriptions and payments are transacted by Paddle.com Inc. as official Merchant of Record.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">Ethical Use</span>
          <span class="hl-lbl">Comate is built for legitimate research and automation; abuse, malware, and illegal harvesting are strictly prohibited.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">Bring Your LLM</span>
          <span class="hl-lbl">Run offline models via Ollama or supply your own API keys with direct device-to-provider connectivity.</span>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="legal-section" id="terms-acceptance">
      <h2 class="legal-sec-title">1. Acceptance of Terms</h2>
      <p>
        These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "you", or "your") and <strong>Cencera Technologies Inc.</strong> ("Cencera", "Company", "we", "us", or "our"), governing your access to and use of the <strong>Comate</strong> autonomous browser, <strong>Comate Downloader</strong> desktop software, binary packages (Windows, Linux, macOS), websites located at <code>comate.cencera.xyz</code> and <code>cencera.xyz</code>, documentation, and associated digital services.
      </p>
      <p>
        By downloading, installing, accessing, or using Comate in any form, you acknowledge that you have read, understood, and agree to be bound by these Terms and our companion policies, including our <a href="/privacy" data-route="/privacy" class="legal-link">Privacy Policy</a>, <a href="/refund" data-route="/refund" class="legal-link">Refund Policy</a>, and <a href="/anti-piracy" data-route="/anti-piracy" class="legal-link">Anti-Piracy Policy</a>. If you do not agree to these Terms, you must not download, install, or use Comate.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="legal-section" id="terms-description">
      <h2 class="legal-sec-title">2. Description of Software &amp; Services</h2>
      <p>
        Comate is an advanced desktop web browser engineered with an embedded local automation engine and Think-Apply-Test-Fix (TATF) loop. Comate executes multi-step web workflows, DOM extraction, research tasks, and automated interactions directly within your local desktop environment.
      </p>
      <p>
        Comate is distributed in dual tiers:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Comate BASE (Free):</strong> Core browser functionality, standard developer devtools, smart bookmark migration, manual automation commands, and local offline model support without subscription fees.</li>
        <li><strong>Comate PRO / Enterprise (Paid):</strong> Unlimited autonomous agent loops, background headless execution, multi-tab coordination, accelerated compiler pipelines, automated update mirrors, and priority developer support.</li>
      </ul>
    </section>

    <!-- Section 3 -->
    <section class="legal-section" id="terms-eligibility">
      <h2 class="legal-sec-title">3. Eligibility &amp; Account Security</h2>
      <p>
        You must be at least 13 years of age (or the minimum legal age required in your country of residence to form a binding contract) to use Comate. If you are accepting these Terms on behalf of an enterprise, corporation, partnership, or other legal entity, you represent and warrant that you possess the full legal authority to bind that entity to this Agreement.
      </p>
      <p>
        Because Comate utilizes a zero-knowledge hardware enclave (AES-256-GCM TPM/Keyring) to secure your credentials and local session tokens, you are solely responsible for maintaining the physical and logical security of your host workstation and any API keys you enter into the software.
      </p>
    </section>

    <!-- Section 4 -->
    <section class="legal-section" id="terms-license">
      <h2 class="legal-sec-title">4. License Grant &amp; Permitted Use</h2>
      <p>
        Subject to your compliance with these Terms and payment of applicable fees (for paid editions), Cencera grants you a limited, non-exclusive, non-transferable, revocable license to:
      </p>
      <ul class="legal-bullet-list">
        <li>Download, install, and execute the Comate binary executable packages solely for your internal personal or business operations on compatible hardware.</li>
        <li>Create, save, and export automated workflow scripts, JSON schemas, extraction templates, and custom browser macros.</li>
      </ul>
      <p>
        <strong>Restrictions:</strong> Except as explicitly permitted by applicable open-source component licenses (such as Chromium or Electron upstream libraries), you shall not: (a) reverse engineer, decompile, or disassemble proprietary binary components of Comate; (b) circumvent, disable, or tamper with license authentication routines; (c) resell, sublicense, rent, or lease Comate PRO binaries to third parties without an authorized Enterprise distribution agreement; or (d) remove any proprietary trademarks or legal notices.
      </p>
    </section>

    <!-- Section 5 -->
    <section class="legal-section" id="terms-billing">
      <h2 class="legal-sec-title">5. Commercial Terms &amp; Paddle Merchant of Record</h2>
      <p>
        All commercial billing, paid software tiers, and recurring subscriptions for Comate are processed exclusively by our authorized online reseller and Merchant of Record, <strong>Paddle.com</strong> (Paddle Payments Ltd / Paddle.com Inc.).
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Pricing &amp; Taxes:</strong> Prices are displayed in your local currency where supported. Paddle calculates and remits all applicable sales taxes, VAT, and GST based on your billing jurisdiction.</li>
        <li><strong>Automatic Renewals:</strong> Paid subscriptions automatically renew at the end of each billing cycle (monthly or annual) at the prevailing published rate unless canceled prior to the renewal date.</li>
        <li><strong>Cancellation:</strong> You may cancel auto-renewal at any time with one click through the in-app billing manager or Paddle receipt email. Cancellations prevent future charges while keeping your subscription active until the end of the current paid period.</li>
        <li><strong>Refunds:</strong> All refund requests are governed by our companion <a href="/refund" data-route="/refund" class="legal-link">Refund Policy</a>, which provides a 14-day money-back guarantee.</li>
      </ul>
    </section>

    <!-- Section 6 -->
    <section class="legal-section" id="terms-acceptable-use">
      <h2 class="legal-sec-title">6. Acceptable Use Policy &amp; System Integrity</h2>
      <p>
        Comate gives you unprecedented power to navigate, automate, and interact with the modern web. With that capability comes the strict obligation to act responsibly and lawfully. You agree that you will <strong>NOT</strong> use Comate to:
      </p>
      <ul class="legal-bullet-list">
        <li>Violate any applicable local, state, national, or international statute, ordinance, or regulation.</li>
        <li>Launch distributed denial-of-service (DDoS) attacks, flood servers with malicious traffic, or deliberately exhaust third-party server infrastructure in violation of stated rate limits.</li>
        <li>Bypass technical authentication controls, access accounts without proper authorization, or engage in credential stuffing or phishing.</li>
        <li>Circumvent Digital Rights Management (DRM) technologies or engage in copyright infringement in violation of our <a href="/anti-piracy" data-route="/anti-piracy" class="legal-link">Anti-Piracy Policy</a>.</li>
        <li>Harvest, scrape, or extract personal data of third parties in violation of applicable data protection statutes (e.g. GDPR, CCPA).</li>
        <li>Deploy autonomous agents to interact with financial, banking, or healthcare platforms in an automated manner without human supervision where prohibited by those platforms.</li>
      </ul>
      <p>
        Cencera reserves the right to immediately revoke license keys and terminate access to update servers for any user found violating this Acceptable Use Policy.
      </p>
    </section>

    <!-- Section 7 -->
    <section class="legal-section" id="terms-ip">
      <h2 class="legal-sec-title">7. Intellectual Property &amp; User Data</h2>
      <p>
        <strong>Cencera Intellectual Property:</strong> Comate, the Comate logo, Cencera branding, Soft Light UI designs, the Think-Apply-Test-Fix (TATF) engine code, and associated proprietary assets are the exclusive intellectual property of Cencera Technologies Inc. and its licensors.
      </p>
      <p>
        <strong>Your Data Sovereignty:</strong> You retain 100% full ownership of all data, extracted tables, research compilations, custom workflow scripts, and content generated through your use of Comate. Cencera claims zero ownership over your outputs and does not store or access your local datasets.
      </p>
    </section>

    <!-- Section 8 -->
    <section class="legal-section" id="terms-ai">
      <h2 class="legal-sec-title">8. Third-Party AI Integrations</h2>
      <p>
        Comate allows you to connect autonomous workflows to third-party artificial intelligence providers (such as OpenAI, Anthropic, Google Gemini) via your personal API keys ("Bring Your Own Key" / BYOK), or run local offline models (such as Ollama or LM Studio).
      </p>
      <p>
        When you connect third-party AI APIs, your interactions with those models are governed directly by the respective terms of service and privacy policies of those providers. Cencera does not act as an intermediary for third-party cloud LLM traffic; requests are transmitted directly from your client machine to the designated endpoint.
      </p>
    </section>

    <!-- Section 9 -->
    <section class="legal-section" id="terms-updates">
      <h2 class="legal-sec-title">9. Updates &amp; Zero-Telemetry Principle</h2>
      <p>
        Comate periodically pings our official release registry manifest (<code>version.json</code> hosted on GitHub Releases) to notify you of critical security patches, browser engine updates, and feature enhancements. These checks are purely functional and transmit zero tracking cookies, user profiling, or web browsing analytics.
      </p>
    </section>

    <!-- Section 10 -->
    <section class="legal-section" id="terms-warranty">
      <h2 class="legal-sec-title">10. Disclaimer of Warranties</h2>
      <p class="legal-caps">
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COMATE BROWSER, DOWNLOADER PACKAGES, AND ALL SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. CENCERA TECHNOLOGIES INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
      </p>
      <p>
        WE DO NOT WARRANT THAT COMATE WILL OPERATE UNINTERRUPTED OR ERROR-FREE, THAT THIRD-PARTY WEBSITES WILL REMAIN ACCESSIBLE TO AUTOMATED PARSING, OR THAT WEBSITES WILL NOT ALTER THEIR DOM ARCHITECTURES IN WAYS THAT AFFECT AUTOMATION ACCURACY.
      </p>
    </section>

    <!-- Section 11 -->
    <section class="legal-section" id="terms-liability">
      <h2 class="legal-sec-title">11. Limitation of Liability</h2>
      <p class="legal-caps">
        IN NO EVENT SHALL CENCERA TECHNOLOGIES INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, PARTNERS, OR RESELLERS (INCLUDING PADDLE.COM) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR BUSINESS REPUTATION, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE SOFTWARE.
      </p>
      <p>
        OUR AGGREGATE TOTAL LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY YOU TO CENCERA OR ITS RESELLER IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR FIFTY UNITED STATES DOLLARS ($50.00 USD), WHICHEVER IS GREATER.
      </p>
    </section>

    <!-- Section 12 -->
    <section class="legal-section" id="terms-indemnity">
      <h2 class="legal-sec-title">12. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Cencera Technologies Inc., its affiliates, licensors, and service providers against any third-party claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms, your violation of third-party website terms or intellectual property rights, or your misuse of automated web extraction capabilities.
      </p>
    </section>

    <!-- Section 13 -->
    <section class="legal-section" id="terms-termination">
      <h2 class="legal-sec-title">13. Termination &amp; Survival</h2>
      <p>
        You may terminate this Agreement at any time by uninstalling Comate, deleting all binary packages from your systems, and canceling any active subscriptions. Cencera may terminate or suspend your license key or access to update services immediately without prior notice if you breach any material provision of these Terms.
      </p>
      <p>
        Sections 6, 7, 10, 11, 12, 14, and 15 shall survive any expiration or termination of this Agreement.
      </p>
    </section>

    <!-- Section 14 -->
    <section class="legal-section" id="terms-governing">
      <h2 class="legal-sec-title">14. Governing Law &amp; Arbitration</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any dispute, controversy, or claim arising out of or relating to these Terms shall be resolved by binding arbitration conducted under the rules of the American Arbitration Association (AAA), except that either party may seek injunctive relief in any court of competent jurisdiction to protect intellectual property rights.
      </p>
    </section>

    <!-- Section 15 -->
    <section class="legal-section" id="terms-contact">
      <h2 class="legal-sec-title">15. Contact &amp; Formal Notices</h2>
      <div class="legal-contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div>
          <h4 class="contact-card-title">Cencera Legal &amp; Governance Team</h4>
          <p class="contact-card-text">
            For contractual inquiries, licensing questions, or formal notices:<br>
            Email: <a href="mailto:legal@cencera.xyz" class="legal-link">legal@cencera.xyz</a> / <a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a><br>
            Entity: Cencera Technologies Inc.<br>
            Web: <a href="https://cencera.xyz" target="_blank" rel="noopener noreferrer" class="legal-link">https://cencera.xyz</a>
          </p>
        </div>
      </div>
    </section>
  `;

  return { toc, content };
}

/* ==========================================================================
   3. PRIVACY POLICY CONTENT
   ========================================================================== */
function renderPrivacyContent(): { toc: { id: string; label: string }[]; content: string } {
  const toc = [
    { id: 'priv-philosophy', label: '1. Zero-Knowledge Architecture' },
    { id: 'priv-no-collect', label: '2. Data We Do NOT Collect' },
    { id: 'priv-collect', label: '3. Data We Collect (Website & Billing)' },
    { id: 'priv-paddle', label: '4. Paddle Payment Processing' },
    { id: 'priv-local-enclave', label: '5. Hardware Enclave & Local Vault' },
    { id: 'priv-ai-privacy', label: '6. AI Models & BYOK Data Flow' },
    { id: 'priv-gdpr-ccpa', label: '7. Your Rights (GDPR & CCPA)' },
    { id: 'priv-cookies', label: '8. Cookies & Local Storage' },
    { id: 'priv-retention', label: '9. Data Retention & Security' },
    { id: 'priv-children', label: '10. Children’s Privacy' },
    { id: 'priv-contact', label: '11. Privacy Contact & DPO' }
  ];

  const content = `
    <!-- Highlights Card -->
    <div class="legal-highlight-card">
      <div class="hl-card-header">
        <span class="hl-badge">Client-Side Privacy Guarantee</span>
        <span class="hl-tag">Zero Telemetry</span>
      </div>
      <div class="hl-grid">
        <div class="hl-item">
          <span class="hl-val">0 Bytes</span>
          <span class="hl-lbl">Zero browsing telemetry, keystrokes, screen recordings, or visited URLs sent to our servers.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">AES-256-GCM</span>
          <span class="hl-lbl">Your saved credentials and session cookies stay in local hardware-backed TPM / Keyring enclaves.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">No Data Sale</span>
          <span class="hl-lbl">We do not sell, rent, monetize, or trade your personal information under any circumstance.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">GDPR &amp; CCPA</span>
          <span class="hl-lbl">Full statutory privacy rights for global users, including access, correction, and deletion.</span>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="legal-section" id="priv-philosophy">
      <h2 class="legal-sec-title">1. Our Architectural Privacy Philosophy</h2>
      <p>
        At <strong>Cencera Technologies Inc.</strong> ("Cencera", "we", "us", or "our"), privacy is not a decorative marketing slogan—it is the foundational pillar of our system architecture. Most cloud-based web agents send your raw session cookies, page contents, and live browser screens to centralized remote servers.
      </p>
      <p>
        Comate was deliberately built from the ground up on a <strong>Zero-Knowledge, Local-First Architecture</strong>. Your browser runs entirely on your local machine. All DOM traversal, automated form-filling, workflow execution, and research parsing happen directly inside your local desktop environment.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="legal-section" id="priv-no-collect">
      <h2 class="legal-sec-title">2. Data We Do NOT Collect</h2>
      <p>
        To ensure total clarity regarding your privacy, the following categories of data <strong>never</strong> leave your machine and are <strong>never</strong> transmitted to Cencera:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Browsing Activity:</strong> We do not track, log, or inspect URLs visited, page views, search queries, or downloaded files.</li>
        <li><strong>Live DOM &amp; Screen Data:</strong> Comate's automated agent inspects web pages locally in Chromium memory; no screenshots, DOM trees, or recording videos are uploaded to our cloud.</li>
        <li><strong>Credentials &amp; Passwords:</strong> Logins, passwords, and two-factor authentication tokens remain strictly locked inside your local operating system keyring.</li>
        <li><strong>Extracted Datasets:</strong> Tables, JSON outputs, CSVs, and academic summaries generated by your workflows reside solely on your local hard drive.</li>
        <li><strong>AI Prompts (Local):</strong> Prompts processed using local LLMs (such as Ollama, LM Studio, or local GGUF weights) stay 100% offline.</li>
      </ul>
    </section>

    <!-- Section 3 -->
    <section class="legal-section" id="priv-collect">
      <h2 class="legal-sec-title">3. Data We Collect (Website &amp; Distribution)</h2>
      <p>
        The limited data we collect is strictly necessary to operate our website, distribute software updates, and support paying customers:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Website Server Logs:</strong> Standard HTTP request logs (IP address, operating system, browser user-agent, timestamp) collected by our hosting provider (Vercel) for DDoS mitigation and server stability.</li>
        <li><strong>Download Optimization:</strong> When visiting <code>comate.cencera.xyz</code>, your browser user-agent is analyzed client-side in JavaScript to highlight the correct binary package (.exe for Windows, .deb/AppImage for Linux). This detection is client-side.</li>
        <li><strong>Update Manifest Checks:</strong> When Comate checks for new releases, it performs a standard GET request to <code>version.json</code> on our GitHub repository mirror. No unique hardware identifiers or tracking tokens are attached.</li>
        <li><strong>Customer Support Communications:</strong> If you contact us via email (<a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a>), we retain your message and email address to resolve your inquiry.</li>
      </ul>
    </section>

    <!-- Section 4 -->
    <section class="legal-section" id="priv-paddle">
      <h2 class="legal-sec-title">4. Paddle Payment Processing &amp; Billing Data</h2>
      <p>
        When you purchase Comate PRO or Enterprise licenses, all payment transactions are handled directly by our authorized Merchant of Record, <strong>Paddle.com</strong> (Paddle Payments Ltd / Paddle.com Inc.).
      </p>
      <p>
        <strong>What Paddle Processes:</strong> Paddle collects your payment information, credit card numbers, billing address, and tax residency to fulfill your order and ensure PCI-DSS Level 1 compliance.
      </p>
      <p>
        <strong>What Cencera Receives:</strong> Cencera receives only confirmation metadata via secure webhooks: your customer email, subscription status, plan name, Paddle transaction ID, and country of purchase. <strong>Cencera never sees, receives, or stores your full credit card numbers or bank credentials.</strong>
      </p>
    </section>

    <!-- Section 5 -->
    <section class="legal-section" id="priv-local-enclave">
      <h2 class="legal-sec-title">5. Hardware Enclave &amp; Local Privacy Vault</h2>
      <p>
        Comate features a built-in Hardware Enclave keystore. On Windows, credentials and session cookies are encrypted via the Windows Data Protection API (DPAPI). On Linux, they are safeguarded via the GNOME Keyring or KWallet Secret Service API using <strong>AES-256-GCM</strong> encryption.
      </p>
      <p>
        Even if an external extension or malicious script attempts to extract credentials from memory, Comate enforces strict isolation boundaries to protect your session tokens from unauthorized exfiltration.
      </p>
    </section>

    <!-- Section 6 -->
    <section class="legal-section" id="priv-ai-privacy">
      <h2 class="legal-sec-title">6. Third-Party AI Models &amp; BYOK Data Flow</h2>
      <p>
        If you choose to configure cloud LLM providers (e.g. OpenAI, Anthropic, Google Gemini) inside Comate using your personal API keys (BYOK):
      </p>
      <ul class="legal-bullet-list">
        <li>Your API keys are stored encrypted locally on your workstation.</li>
        <li>Requests to these AI models are routed directly from your desktop machine to the provider's official REST API endpoint over TLS 1.3 encryption.</li>
        <li>Requests do <strong>not</strong> route through Cencera servers. The collection and retention of prompt data by those third-party models is subject to the provider's respective privacy policy.</li>
      </ul>
    </section>

    <!-- Section 7 -->
    <section class="legal-section" id="priv-gdpr-ccpa">
      <h2 class="legal-sec-title">7. Your Rights (GDPR &amp; CCPA / CPRA)</h2>
      <p>
        Regardless of your geographic location, we respect your comprehensive privacy rights under the European Union General Data Protection Regulation (GDPR), the UK Data Protection Act, and the California Consumer Privacy Act (CCPA/CPRA):
      </p>
      <ul class="legal-bullet-list">
        <li><strong>Right to Access:</strong> You can request a summary of the minimal personal data we hold about your account (such as purchase email and license status).</li>
        <li><strong>Right to Rectification:</strong> You may update or correct your billing contact information at any time.</li>
        <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You may request complete deletion of your customer support records and email associations from our active databases.</li>
        <li><strong>Do Not Sell or Share My Information:</strong> We do not sell, rent, or share personal data with data brokers or ad networks.</li>
      </ul>
      <p>
        To exercise any of these statutory rights, please email our Data Protection team at <a href="mailto:privacy@cencera.xyz" class="legal-link">privacy@cencera.xyz</a>.
      </p>
    </section>

    <!-- Section 8 -->
    <section class="legal-section" id="priv-cookies">
      <h2 class="legal-sec-title">8. Cookies &amp; Local Storage</h2>
      <p>
        Our landing website uses only strictly essential cookies and browser LocalStorage entries to preserve your interface preferences (e.g., active platform tab or dismissal of notification banners). We do not deploy third-party advertising cookies, cross-site trackers, or behavioral profiling pixels.
      </p>
    </section>

    <!-- Section 9 -->
    <section class="legal-section" id="priv-retention">
      <h2 class="legal-sec-title">9. Data Retention &amp; Security</h2>
      <p>
        We retain customer transaction metadata only as long as necessary to fulfill legal, tax, accounting, and anti-fraud statutory obligations (typically up to seven years pursuant to commercial tax regulations). All communications between your client and our services are protected with modern cryptographic ciphers (TLS 1.3).
      </p>
    </section>

    <!-- Section 10 -->
    <section class="legal-section" id="priv-children">
      <h2 class="legal-sec-title">10. Children’s Privacy</h2>
      <p>
        Our software and website are not directed to individuals under the age of 13 (or under 16 in the EEA). We do not knowingly collect personal data from children. If we discover that a child has provided us with personal data, we will promptly delete it.
      </p>
    </section>

    <!-- Section 11 -->
    <section class="legal-section" id="priv-contact">
      <h2 class="legal-sec-title">11. Privacy Contact &amp; DPO</h2>
      <div class="legal-contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <h4 class="contact-card-title">Cencera Data Protection &amp; Privacy Officer</h4>
          <p class="contact-card-text">
            For all inquiries regarding our Zero-Knowledge architecture or data rights:<br>
            Email: <a href="mailto:privacy@cencera.xyz" class="legal-link">privacy@cencera.xyz</a> / <a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a><br>
            Entity: Cencera Technologies Inc.<br>
            Location: Delaware, United States
          </p>
        </div>
      </div>
    </section>
  `;

  return { toc, content };
}

/* ==========================================================================
   4. ANTI-PIRACY & COPYRIGHT POLICY CONTENT
   ========================================================================== */
function renderAntiPiracyContent(): { toc: { id: string; label: string }[]; content: string } {
  const toc = [
    { id: 'piracy-mission', label: '1. Principle & Mission' },
    { id: 'piracy-prohibited', label: '2. Prohibited Uses of Downloader' },
    { id: 'piracy-software', label: '3. Software Piracy & Licensing' },
    { id: 'piracy-dmca', label: '4. DMCA Notice & Takedown' },
    { id: 'piracy-counter', label: '5. Counter-Notification Procedure' },
    { id: 'piracy-agent', label: '6. Designated Copyright Agent' },
    { id: 'piracy-repeat', label: '7. Repeat Infringer Policy' },
    { id: 'piracy-security', label: '8. Responsible Vulnerability Disclosure' }
  ];

  const content = `
    <!-- Highlights Card -->
    <div class="legal-highlight-card">
      <div class="hl-card-header">
        <span class="hl-badge">Anti-Piracy &amp; IP Protection</span>
        <span class="hl-tag">DMCA Compliant</span>
      </div>
      <div class="hl-grid">
        <div class="hl-item">
          <span class="hl-val">Ethical Tool</span>
          <span class="hl-lbl">Comate is built for research and developer automation, not for circumvention of digital rights.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">Zero DRM Crack</span>
          <span class="hl-lbl">Decryption of Widevine, FairPlay, or protected commercial media streams is strictly prohibited.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">DMCA Agent</span>
          <span class="hl-lbl">Statutory DMCA notice intake and rapid takedown procedures handled at dmca@cencera.xyz.</span>
        </div>
        <div class="hl-item">
          <span class="hl-val">License Integrity</span>
          <span class="hl-lbl">Zero tolerance for cracked binaries, unauthorized key generation, or illicit software redistribution.</span>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="legal-section" id="piracy-mission">
      <h2 class="legal-sec-title">1. Principle &amp; Mission</h2>
      <p>
        <strong>Cencera Technologies Inc.</strong> ("Cencera", "we", "us", or "our") is steadfastly committed to respecting and protecting intellectual property rights, copyright laws, and digital creations worldwide.
      </p>
      <p>
        The <strong>Comate</strong> browser and <strong>Comate Downloader</strong> engine were engineered to empower software engineers, data analysts, researchers, and knowledge workers to automate complex multi-step web workflows, inspect live DOM elements, test responsive web applications, and archive authorized personal or public data. Comate is <strong>not</strong> designed, promoted, or licensed as a tool for copyright infringement or digital piracy.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="legal-section" id="piracy-prohibited">
      <h2 class="legal-sec-title">2. Prohibited Uses of Comate Downloader &amp; Browser</h2>
      <p>
        Users are expressly forbidden from utilizing Comate or any of its embedded download routines to:
      </p>
      <ul class="legal-bullet-list">
        <li><strong>DRM Circumvention:</strong> Bypass, disable, strip, or decrypt Digital Rights Management (DRM) mechanisms, Content Scramble Systems (CSS), Google Widevine, Apple FairPlay, or Microsoft PlayReady protected media streams.</li>
        <li><strong>Commercial Media Ripping:</strong> Mass rip, capture, or systematically redistribute copyrighted music, cinematic releases, premium streaming video, or proprietary digital games without explicit authorization from the respective rights holders.</li>
        <li><strong>Paywall Evasion:</strong> Automatically circumvent subscriber authentication gates, paid publication paywalls, or premium pay-per-view access controls in violation of publishing rights.</li>
        <li><strong>Distribution of Infringing Assets:</strong> Host, mirror, index, or distribute pirated software, torrent trackers, or unauthorized copies of digital works using Comate's network capabilities.</li>
      </ul>
      <p>
        Any use of Comate for the unauthorized reproduction, public display, or distribution of copyrighted works constitutes a material breach of our Terms of Service and grounds for immediate revocation of software licenses.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="legal-section" id="piracy-software">
      <h2 class="legal-sec-title">3. Software Piracy &amp; License Integrity</h2>
      <p>
        Cencera vigorously defends its proprietary software, compiled binaries, and trademarked technologies. The following activities constitute software piracy and will be prosecuted to the fullest extent of the law:
      </p>
      <ul class="legal-bullet-list">
        <li>Reverse engineering, patching, cracking, or modifying Comate PRO binary executables to disable license verification or quota enforcement routines.</li>
        <li>Generating, sharing, trading, or distributing unauthorized license keys, activation codes, or spoofed Paddle webhook signatures.</li>
        <li>Hosting unofficial mirrors or modified binary repackages of Comate containing trojans, malware, or illicit unlock patches.</li>
      </ul>
      <p>
        Official binaries are cryptographically published only through our verified domain (<code>comate.cencera.xyz</code>) and official GitHub release repository (<code>github.com/cencera-xyz/comate-downloader</code>). Releases can be verified against published SHA-256 hashes.
      </p>
    </section>

    <!-- Section 4 -->
    <section class="legal-section" id="piracy-dmca">
      <h2 class="legal-sec-title">4. Digital Millennium Copyright Act (DMCA) Notice &amp; Takedown</h2>
      <p>
        Cencera complies with the provisions of Title 17, United States Code, Section 512 (the Digital Millennium Copyright Act or "DMCA") and equivalent international copyright directives. If you are a copyright owner or an authorized agent and believe that content accessible through our websites or release registry infringes upon your copyright, you may submit a formal notification containing:
      </p>
      <div class="legal-steps-grid">
        <div class="step-card">
          <div class="step-number">Step 1</div>
          <h4 class="step-title">Identification of Work</h4>
          <p class="step-desc">A physical or electronic signature of the copyright owner or authorized representative, and a detailed description of the copyrighted work claimed to have been infringed.</p>
        </div>
        <div class="step-card">
          <div class="step-number">Step 2</div>
          <h4 class="step-title">Specific Location (URL)</h4>
          <p class="step-desc">The specific URL, repository commit, or file identifier where the allegedly infringing material is located on our distribution mirror.</p>
        </div>
        <div class="step-card">
          <div class="step-number">Step 3</div>
          <h4 class="step-title">Contact Information</h4>
          <p class="step-desc">Your full legal name, physical address, telephone number, and electronic mail address.</p>
        </div>
        <div class="step-card">
          <div class="step-number">Step 4</div>
          <h4 class="step-title">Good Faith &amp; Perjury Statements</h4>
          <p class="step-desc">A statement that you have a good faith belief that use of the material is not authorized, and a statement made under penalty of perjury that the information is accurate.</p>
        </div>
      </div>
      <p class="mt-4">
        All DMCA notices should be transmitted to our Designated Copyright Agent at <a href="mailto:dmca@cencera.xyz" class="legal-link">dmca@cencera.xyz</a>.
      </p>
    </section>

    <!-- Section 5 -->
    <section class="legal-section" id="piracy-counter">
      <h2 class="legal-sec-title">5. DMCA Counter-Notification Procedure</h2>
      <p>
        If material that you posted or contributed has been removed or disabled as a result of a DMCA takedown notice and you believe this was due to mistake, misidentification, or fair use, you may file a written counter-notification pursuant to 17 U.S.C. &sect; 512(g)(3).
      </p>
      <p>
        Your counter-notification must contain your physical/electronic signature, identification of the removed material, your contact details, a statement under penalty of perjury consenting to the jurisdiction of the federal district court, and a statement that you will accept service of process from the original claimant.
      </p>
    </section>

    <!-- Section 6 -->
    <section class="legal-section" id="piracy-agent">
      <h2 class="legal-sec-title">6. Designated DMCA Copyright Agent</h2>
      <div class="legal-contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <h4 class="contact-card-title">Cencera Designated Copyright Agent</h4>
          <p class="contact-card-text">
            Attn: Copyright Compliance &amp; Legal Department<br>
            Cencera Technologies Inc.<br>
            Email: <a href="mailto:dmca@cencera.xyz" class="legal-link">dmca@cencera.xyz</a> / <a href="mailto:legal@cencera.xyz" class="legal-link">legal@cencera.xyz</a><br>
            Jurisdiction: Delaware, United States<br>
            Website: <a href="https://cencera.xyz" target="_blank" rel="noopener noreferrer" class="legal-link">https://cencera.xyz</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Section 7 -->
    <section class="legal-section" id="piracy-repeat">
      <h2 class="legal-sec-title">7. Repeat Infringer Policy</h2>
      <p>
        In accordance with the DMCA and global intellectual property standards, Cencera maintains a strict <strong>Repeat Infringer Policy</strong>. Under appropriate circumstances and at our sole discretion, we will immediately and permanently terminate the accounts, license keys, and access privileges of users who are found to repeatedly infringe copyrights or who attempt to operate commercial piracy networks through our software.
      </p>
    </section>

    <!-- Section 8 -->
    <section class="legal-section" id="piracy-security">
      <h2 class="legal-sec-title">8. Ethical Security Research &amp; Responsible Disclosure</h2>
      <p>
        We strongly believe in collaborating with white-hat security researchers. If you discover a vulnerability in Comate's enclave isolation, update mechanism, or license verification:
      </p>
      <p>
        Please report your findings directly to <a href="mailto:security@cencera.xyz" class="legal-link">security@cencera.xyz</a>. We pledge to investigate all legitimate disclosures within 48 business hours and will not pursue legal action against researchers who adhere to responsible disclosure principles.
      </p>
    </section>
  `;

  return { toc, content };
}

/* ==========================================================================
   MAIN RENDERER: COMBINES HEADER, TABS, HERO, TOC & CONTENT
   ========================================================================== */
export function renderLegalPage(activeDoc: LegalDocType): string {
  let docData: { toc: { id: string; label: string }[]; content: string };

  switch (activeDoc) {
    case 'refund':
      docData = renderRefundContent();
      break;
    case 'privacy':
      docData = renderPrivacyContent();
      break;
    case 'anti-piracy':
      docData = renderAntiPiracyContent();
      break;
    case 'terms':
    default:
      docData = renderTermsContent();
      break;
  }

  return `
  <div class="legal-page-root">
    ${renderLegalHeader(activeDoc)}
    ${renderLegalTabs(activeDoc)}
    ${renderLegalHero(activeDoc)}

    <div class="legal-main-container">
      <div class="legal-layout-grid">
        <!-- Sticky Sidebar with Table of Contents -->
        <aside class="legal-sidebar" aria-label="Document Sections">
          <div class="legal-toc-card">
            <h3 class="toc-heading">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
              <span>Table of Contents</span>
            </h3>
            <nav class="toc-nav">
              ${docData.toc.map(item => `
                <a href="#${item.id}" class="toc-link" data-toc-target="${item.id}">
                  <span class="toc-dot"></span>
                  <span class="toc-text">${item.label}</span>
                </a>
              `).join('')}
            </nav>

            <div class="toc-footer-card">
              <span class="toc-sub-title">Need Legal Assistance?</span>
              <p class="toc-sub-desc">Our compliance team is available to assist with billing and contract inquiries.</p>
              <a href="mailto:contact@cencera.xyz" class="toc-contact-btn">Email Support</a>
            </div>
          </div>
        </aside>

        <!-- Main Document Body -->
        <main class="legal-content-body" id="legal-content">
          ${docData.content}

          <!-- Document End Navigation -->
          <div class="legal-doc-footer-nav">
            <div class="doc-f-row">
              <span class="doc-f-text">Questions about this policy? Contact our team at <a href="mailto:contact@cencera.xyz" class="legal-link">contact@cencera.xyz</a></span>
              <a href="#" class="legal-scroll-top-btn" id="legal-scroll-top">
                <span>Back to top</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="18 15 12 9 6 15"/></svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  `;
}

export function initLegalPage(): void {
  // 1. Print / PDF Button
  const printBtn = document.getElementById('legal-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 2. Share / Copy Link Button
  const copyBtn = document.getElementById('legal-copy-link-btn');
  const copyText = document.getElementById('legal-copy-text');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (copyText) {
          copyText.textContent = 'Copied!';
          setTimeout(() => {
            copyText.textContent = 'Share';
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy URL', err);
      }
    });
  }

  // 3. Scroll to top button
  const scrollTopBtn = document.getElementById('legal-scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Smooth scroll & active highlight for TOC
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>('.toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-toc-target');
      if (!targetId) return;
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const headerOffset = 130;
        const elemPosition = targetElem.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elemPosition - headerOffset,
          behavior: 'smooth'
        });
        history.replaceState(null, '', `#${targetId}`);
        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // 5. ScrollSpy to highlight TOC links as user scrolls
  const sections = document.querySelectorAll<HTMLElement>('.legal-section');
  const onScroll = () => {
    const scrollY = window.scrollY;
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id') || '';
      }
    });

    if (currentId) {
      tocLinks.forEach(link => {
        if (link.getAttribute('data-toc-target') === currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}
