export default function Contact() {
  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <div className="contact-layout">
        <div className="contact-info">
          <span className="contact-intro-badge">Let&apos;s Connect</span>
          <h2>
            Got a wild idea?
            <br />
            Reach out if you dare.
          </h2>

          <div className="contact-location">
            <i className="bi bi-geo-alt-fill"></i> Lahore, Pakistan
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            <a
              href="mailto:moeezahmad.tech@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--text-light-muted)",
                fontSize: "0.95rem",
              }}
            >
              <i className="bi bi-envelope-fill" style={{ color: "#60a5fa" }}></i>
              moeezahmad.tech@gmail.com
            </a>
            <a
              href="https://wa.me/923266037125"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--text-light-muted)",
                fontSize: "0.95rem",
              }}
            >
              <i className="bi bi-whatsapp" style={{ color: "#22c55e" }}></i> +92 326
              6037125
            </a>
          </div>

          <div className="contact-social-icons">
            <a
              href="https://www.linkedin.com/in/moeezahmad-tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@moeezahmad.techkreative"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/moeezahmad.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/moeezahmad.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://wa.me/923266037125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <form
          className="modern-contact-form"
          action="https://formspree.io/f/meajloeo"
          method="POST"
        >
          <div className="form-row">
            <input
              type="text"
              className="modern-input"
              placeholder="First Name"
              name="first_name"
              required
            />
            <input
              type="text"
              className="modern-input"
              placeholder="Last Name"
              name="last_name"
              required
            />
          </div>

          <input
            type="email"
            className="modern-input"
            placeholder="Your Email Address"
            name="email"
            required
          />

          <select name="service" className="modern-select" defaultValue="" required>
            <option value="" disabled>
              What service do you need?
            </option>
            <option value="Custom Website Development">
              Custom Website Development
            </option>
            <option value="Full Stack Web Application">
              Full Stack Web Application
            </option>
            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
            <option value="SEO &amp; Performance Optimization">
              SEO &amp; Performance Optimization
            </option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Ongoing Maintenance &amp; Support">
              Ongoing Maintenance &amp; Support
            </option>
          </select>

          <textarea
            rows={4}
            className="modern-textarea"
            name="message"
            placeholder="Tell me about your project..."
            required
          ></textarea>

          <div className="form-checkbox-wrapper">
            <input
              type="checkbox"
              id="agreementCheck"
              name="agree_terms"
              required
            />
            <label htmlFor="agreementCheck">
              I agree with the <b>Terms and Conditions</b>
            </label>
          </div>

          <button type="submit" className="form-submit-btn">
            Send Message <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

