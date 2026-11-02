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
        Full-Stack AI Engineer &amp; Software Engineer
      </h1>

      <div className="hero-dual-roles" data-aos="fade-up" data-aos-delay="250">
        <span className="role-pill">
          <i className="bi bi-briefcase-fill"></i> Software Engineer Intern @ SolnetInfo
        </span>
        <span className="role-pill dark">
          <i className="bi bi-rocket-takeoff-fill"></i> Co-Founder &amp; CEO @ TechKreative
        </span>
      </div>

      <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
        &ldquo;From Ideation to Products&rdquo; — Helping businesses and creators turn ideas
        into practical, user-focused digital solutions through full-stack web development, AI tools, and SEO growth systems.
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
            <div className="exp-label">Web &amp; Digital Experience</div>
          </div>

          <div className="hero-badge-pill">
            <i className="bi bi-patch-check-fill"></i> 10-Member Team Backed
          </div>
        </div>
      </div>
    </section>
  );
}
