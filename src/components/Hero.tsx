import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-section" id="hero">
        {/* Headline */}
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          I&apos;m <span className="name-highlight">Moeez Ahmad,</span>
          <br />
          Full-Stack AI Engineer
        </h1>

        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="250">
          I build scalable websites, AI-powered tools, and SEO-driven digital products
          that help businesses and creators turn ideas into real results.
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
                &ldquo;Moeez&apos;s exceptional full-stack and AI engineering ensured our project&apos;s success. Highly recommended!&rdquo;
              </p>
            </div>

            <div className="hero-stat-card">
              <div className="stat-num">200+</div>
              <div className="stat-label">Projects Completed &bull; 50+ Clients</div>
            </div>
          </div>

          {/* Center: Blue Arch + Cutout Photo + Action Buttons */}
          <div className="hero-center-portrait" data-aos="zoom-in" data-aos-delay="350">
            <div className="arch-background"></div>

            <div className="portrait-img-wrapper">
              <img
                src="/images/me.png"
                alt="Moeez Ahmad - Full-Stack AI Engineer & Software Engineer Intern"
              />
            </div>

            <div className="hero-actions-container">
              <Link href="/projects" className="btn-primary-pill">
                View Projects <i className="bi bi-arrow-up-right"></i>
              </Link>
              <Link href="/contact" className="btn-secondary-pill">
                Work With TechKreative
              </Link>
            </div>
          </div>

          {/* Right Rating, Roles & Experience Box */}
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
              <div className="exp-label">Web &amp; Digital Experience</div>
            </div>

            {/* Structured Role Badges Card */}
            <div className="hero-roles-widget-box">
              <div className="hero-role-pill-item">
                <i className="bi bi-briefcase-fill" style={{ color: "var(--primary-blue)" }}></i>
                <div>
                  <strong>Software Engineer Intern</strong>
                  <span>@ SolnetInfo</span>
                </div>
              </div>
              <div className="hero-role-pill-item">
                <i className="bi bi-rocket-takeoff-fill" style={{ color: "#2563eb" }}></i>
                <div>
                  <strong>Co-Founder &amp; CEO</strong>
                  <span>@ TechKreative</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/moeezahmad-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-badge-pill"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <i className="bi bi-linkedin"></i> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" data-aos="fade-up" data-aos-delay="200">
        <a
          href="https://www.techkreative.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-item"
        >
          <i className="bi bi-rocket-takeoff"></i> Co-Founder &amp; CEO @ TechKreative
        </a>
        <div className="trust-item">
          <i className="bi bi-building-gear"></i> Software Engineer Intern @ SolnetInfo
        </div>
        <a
          href="https://colormagic.techkreative.com/open-source.html"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-item"
        >
          <i className="bi bi-palette2"></i> Color Magic
        </a>
        <div className="trust-item">
          <i className="bi bi-mortarboard-fill"></i> UET Lahore
        </div>
      </section>
    </>
  );
}
