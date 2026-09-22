/**
 * CTABanner Component (Bottom Call to Action Banner)
 */

export function renderCTABanner(): string {
  return `
  <section class="cta-banner-section">
    <div class="section-container">
      <div class="cta-banner-card">
        <div class="banner-content">
          <span class="banner-eyebrow">Ready to upgrade your browsing?</span>
          <h2 class="banner-title">Stop manual tab switching.<br><span class="gradient-headline">Let Comate handle the rest.</span></h2>
          <p class="banner-desc">Download the public BASE today and experience the future of the autonomous desktop web.</p>
          <div class="banner-btn-row">
            <a href="#downloads" class="clay-primary-btn">
              <span>Download Comate Free BASE</span>
              <span class="btn-arrow">→</span>
            </a>
            <a href="#architecture" class="clay-secondary-btn">
              <span>Explore Architecture</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
