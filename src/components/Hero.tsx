export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Hello Floating Pill */}
      <div data-aos="fade-down" data-aos-delay="100">
        <span className="hello-badge">
          Hello! <span className="sparkle"><i className="bi bi-stars"></i></span>
        </span>
      </div>

      {/* Big Headline */}
      <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
        I&apos;m <span className="name-highlight">Moeez,</span>
        <br />
        Software Engineer
      </h1>

      <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
        Transforming ideas into flawless code, one pixel-perfect website at a time.
      </p>

      {/* Hero Showcase Grid (Left widget, Center Arch Portrait, Right widget) */}
      <div className="hero-showcase">
        {/* Left Quote Card & Client Stats */}
        <div className="hero-left-widget" data-aos="fade-right" data-aos-delay="400">
          <div className="hero-quote-card">
            <span className="quote-icon">
              <i className="bi bi-quote"></i>
            </span>
            <p>
              &ldquo;Moeez&apos;s exceptional web development ensured our project&apos;s success. Highly recommended!&rdquo;
            </p>
          </div>

          <div className="hero-stat-card">
            <div className="stat-num">100+</div>
            <div className="stat-label">Clients &amp; Projects Served</div>
          </div>
        </div>

        {/* Center: Blue Arch + Cutout Photo + Action Buttons */}
        <div className="hero-center-portrait" data-aos="zoom-in" data-aos-delay="350">
          <div className="arch-background"></div>

          <div className="portrait-img-wrapper">
            <img
              src="/images/me.png"
              alt="Moeez Ahmad - Software Engineer"
            />
          </div>

          <div className="hero-actions-container">
            <a href="#projects" className="btn-primary-pill">
              Portfolio <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#contact" className="btn-secondary-pill">
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Rating & Experience Box */}
        <div className="hero-right-widget" data-aos="fade-left" data-aos-delay="400">
          <div className="hero-rating-box">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="exp-num">5+ Years</div>
            <div className="exp-label">Industry Experience</div>
          </div>

          <div className="hero-badge-pill">
            <i className="bi bi-patch-check-fill"></i> 100% Quality Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
}
