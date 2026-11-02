export default function FeaturedProject() {
  return (
    <section className="featured-project-section" data-aos="fade-up">
      <div className="featured-project-card">
        <div className="featured-project-media">
          <img
            src="/images/colormagic-logo.png"
            alt="Color Magic - Color Palette Explorer"
          />
        </div>
        <div className="featured-project-info">
          <span className="featured-badge">Featured Open-Source Product</span>
          <h3>Color Magic</h3>
          <p>
            An open-source professional color-palette generator and explorer founded by TechKreative,
            with Moeez Ahmad as Founder and Lead Developer. Features 150+ curated palettes, hex-to-color-name
            identification, and 5-color harmony schemes based on color theory (Mono, Contrast, Triad, Tetrad, Analogic).
            Built with 100% privacy-friendly client-side calculations and zero external API dependencies.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "16px" }}>
            <a
              href="https://colormagic.techkreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Explore Color Magic <i className="bi bi-arrow-up-right"></i>
            </a>
            <a
              href="https://colormagic.techkreative.com/open-source.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-pill"
            >
              Open Source Info <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
