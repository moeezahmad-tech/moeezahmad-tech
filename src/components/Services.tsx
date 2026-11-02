export default function Services() {
  return (
    <section
      className="services-dark-container"
      id="services"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="services-header">
        <div>
          <h2>
            My <span>Services</span>
          </h2>
        </div>
        <p>
          Comprehensive digital solutions covering custom frontend &amp; backend
          engineering, responsive modern layouts, and search performance
          optimization.
        </p>
      </div>

      <div className="services-cards-grid">
        {/* Service Card 1: Website Design */}
        <div className="dark-service-card" data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="service-card-top">
              <div>
                <h3 className="service-title">UI/UX &amp; Web Design</h3>
                <p className="service-summary">
                  Custom, responsive websites tailored to your brand identity
                  and business objectives.
                </p>
              </div>
            </div>

            <div className="service-card-mockup">
              <img
                src="/images/projects/p (1).webp"
                alt="Website Design Preview"
                className="mockup-preview-img"
              />
            </div>
          </div>

          <div className="service-card-bottom">
            <span className="service-icon-label">
              <i className="bi bi-window-fullscreen"></i> Design System
            </span>
            <a
              href="#projects"
              className="service-arrow-btn"
              aria-label="View design projects"
            >
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* Service Card 2: Web Development / Redesign (HIGHLIGHTED BLUE) */}
        <div
          className="dark-service-card highlight-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="service-card-top">
              <div>
                <h3 className="service-title">Full Stack Web Dev</h3>
                <p className="service-summary">
                  Modernizing outdated websites with clean UX, blazing fast
                  performance, and full-stack capabilities.
                </p>
              </div>
            </div>

            <div className="service-card-mockup">
              <img
                src="/images/projects/p (9).webp"
                alt="Web Development Preview"
                className="mockup-preview-img"
              />
            </div>
          </div>

          <div className="service-card-bottom">
            <span className="service-icon-label">
              <i className="bi bi-code-slash"></i> Clean Architecture
            </span>
            <a
              href="#contact"
              className="service-arrow-btn"
              aria-label="Hire for web dev"
            >
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* Service Card 3: Landing Pages & Growth */}
        <div className="dark-service-card" data-aos="fade-up" data-aos-delay="300">
          <div>
            <div className="service-card-top">
              <div>
                <h3 className="service-title">Landing Pages &amp; SEO</h3>
                <p className="service-summary">
                  Strategic digital solutions to maximize conversions and
                  visibility across search engines &amp; social channels.
                </p>
              </div>
            </div>

            <div className="service-card-mockup">
              <img
                src="/images/projects/p (10).webp"
                alt="Landing Page Preview"
                className="mockup-preview-img"
              />
            </div>
          </div>

          <div className="service-card-bottom">
            <span className="service-icon-label">
              <i className="bi bi-graph-up-arrow"></i> High Conversion
            </span>
            <a
              href="#projects"
              className="service-arrow-btn"
              aria-label="View landing pages"
            >
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

