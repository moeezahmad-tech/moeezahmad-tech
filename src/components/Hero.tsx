import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Hello Floating Pill */}
      <div data-aos="fade-down" data-aos-delay="100">
        <span className="hello-badge">
          Hello! <span className="sparkle"><i className="bi bi-stars"></i></span>
        </span>
      </div>

      {/* Headline matching profile */}
      <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
        I&apos;m <span className="name-highlight">Moeez Ahmad,</span>
        <br />
        Software &amp; Full-Stack AI Engineer
      </h1>

      <div className="hero-dual-roles" data-aos="fade-up" data-aos-delay="250">
        <span className="role-pill">
          <i className="bi bi-briefcase-fill"></i> Software Engineer @ SolnetInfo
        </span>
        <span className="role-pill dark">
          <i className="bi bi-rocket-takeoff-fill"></i> CEO &amp; Co-Founder @ TechKreative
        </span>
      </div>

      <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
        &ldquo;From Ideation to Products&rdquo; — Turning ideas into practical,
        reliable, and scalable digital products at the intersection of AI and full-stack engineering.
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
              &ldquo;Moeez&apos;s exceptional full-stack and AI development ensured our project&apos;s success. Highly recommended!&rdquo;
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
              alt="Moeez Ahmad - Software Engineer & Full-Stack AI Engineer"
            />
          </div>

          <div className="hero-actions-container">
            <Link href="/projects" className="btn-primary-pill">
              Portfolio <i className="bi bi-arrow-up-right"></i>
            </Link>
            <Link href="/contact" className="btn-secondary-pill">
              Hire Me
            </Link>
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
            <div className="exp-label">Industry &amp; Web Experience</div>
          </div>

          <div className="hero-badge-pill">
            <i className="bi bi-patch-check-fill"></i> Production-Ready Quality
          </div>
        </div>
      </div>
    </section>
  );
}
