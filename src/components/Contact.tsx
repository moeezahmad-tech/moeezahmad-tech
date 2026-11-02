"use client";

import { useState } from "react";

const serviceOptions = [
  { id: "fullstack", label: "Full-Stack Web App", icon: "bi-code-slash" },
  { id: "ai", label: "AI & LLM Integration", icon: "bi-cpu-fill" },
  { id: "website", label: "Custom Website / Redesign", icon: "bi-laptop" },
  { id: "seo", label: "SEO & Digital Growth", icon: "bi-graph-up-arrow" },
  { id: "branding", label: "Brand Identity & Design", icon: "bi-palette-fill" },
  { id: "agency", label: "TechKreative Retainer", icon: "bi-rocket-takeoff-fill" },
];

const budgetOptions = [
  "< $500",
  "$500 – $1,500",
  "$1,500 – $3,500",
  "$3,500+",
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>("Full-Stack Web App");
  const [selectedBudget, setSelectedBudget] = useState<string>("$1,500 – $3,500");
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("moeezahmad.tech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <div className="contact-ambient-glow"></div>

      <div className="contact-layout">
        {/* Left Column: Direct info, availability & channels */}
        <div className="contact-info">
          <div className="contact-badge-pill">
            <span className="live-pulse-dot"></span> Available for Projects
          </div>

          <h2>
            Looking to build a website
            <br />
            or AI tool? <span className="text-gradient-blue">Let&apos;s talk.</span>
          </h2>

          <p className="contact-lead-desc">
            Whether you are a startup needing a zero-to-one full-stack build, an established company integrating AI, or looking to scale with TechKreative, I&apos;m ready to turn your vision into code.
          </p>

          {/* Quick Contact Cards */}
          <div className="contact-mini-cards">
            <div className="contact-mini-card">
              <div className="mini-card-icon email-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="mini-card-details">
                <span className="mini-card-label">Direct Email</span>
                <span className="mini-card-val">moeezahmad.tech@gmail.com</span>
              </div>
              <button
                type="button"
                className="mini-card-copy-btn"
                onClick={copyEmail}
                title="Copy Email"
                aria-label="Copy Email"
              >
                <i className={`bi ${copied ? "bi-check2 text-emerald" : "bi-copy"}`}></i>
                <span className="copy-tooltip">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <a
              href="https://wa.me/923266037125"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-mini-card hover-lift"
            >
              <div className="mini-card-icon whatsapp-icon">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div className="mini-card-details">
                <span className="mini-card-label">WhatsApp Direct</span>
                <span className="mini-card-val">+92 326 6037125</span>
              </div>
              <i className="bi bi-arrow-up-right mini-card-arrow"></i>
            </a>

            <div className="contact-mini-card">
              <div className="mini-card-icon location-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="mini-card-details">
                <span className="mini-card-label">Location &amp; Timezone</span>
                <span className="mini-card-val">Lahore, Pakistan (PKT &bull; UTC+5)</span>
              </div>
            </div>
          </div>

          {/* Social Presence Pills */}
          <div className="contact-social-bar">
            <span className="social-bar-label">Follow &amp; Connect:</span>
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
        </div>

        {/* Right Column: High-end Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-glow-header">
            <h3>Start a Project</h3>
            <span className="form-sub-badge">
              <i className="bi bi-clock-history"></i> Reply within 24h guaranteed
            </span>
          </div>

          <form
            className="modern-contact-form"
            action="https://formspree.io/f/meajloeo"
            method="POST"
          >
            {/* Hidden inputs to pass state-selected service and budget */}
            <input type="hidden" name="service_selected" value={selectedService} />
            <input type="hidden" name="budget_selected" value={selectedBudget} />

            {/* Service Selection Chips */}
            <div className="form-field-group">
              <label className="form-field-label">
                <i className="bi bi-layers-fill"></i> Select the Service You Need:
              </label>
              <div className="service-chips-grid">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`service-chip-btn ${selectedService === opt.label ? "active" : ""}`}
                    onClick={() => setSelectedService(opt.label)}
                  >
                    <i className={`bi ${opt.icon}`}></i>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name Fields */}
            <div className="form-row">
              <div className="input-with-icon">
                <i className="bi bi-person input-icon"></i>
                <input
                  type="text"
                  className="modern-input"
                  placeholder="First Name *"
                  name="first_name"
                  required
                />
              </div>
              <div className="input-with-icon">
                <i className="bi bi-person input-icon"></i>
                <input
                  type="text"
                  className="modern-input"
                  placeholder="Last Name *"
                  name="last_name"
                  required
                />
              </div>
            </div>

            {/* Email & Phone / WhatsApp */}
            <div className="form-row">
              <div className="input-with-icon">
                <i className="bi bi-envelope input-icon"></i>
                <input
                  type="email"
                  className="modern-input"
                  placeholder="Your Email Address *"
                  name="email"
                  required
                />
              </div>
              <div className="input-with-icon">
                <i className="bi bi-whatsapp input-icon"></i>
                <input
                  type="text"
                  className="modern-input"
                  placeholder="WhatsApp / Phone (optional)"
                  name="phone"
                />
              </div>
            </div>

            {/* Budget Range Selection */}
            <div className="form-field-group">
              <label className="form-field-label">
                <i className="bi bi-cash-stack"></i> Estimated Budget:
              </label>
              <div className="budget-chips-row">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className={`budget-chip-btn ${selectedBudget === budget ? "active" : ""}`}
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details Message */}
            <div className="form-field-group">
              <label className="form-field-label">
                <i className="bi bi-chat-left-text-fill"></i> Project Overview:
              </label>
              <textarea
                rows={4}
                className="modern-textarea"
                name="message"
                placeholder="Tell me about your project, goals, key requirements, or timeline..."
                required
              ></textarea>
            </div>

            {/* Agreement & Submit */}
            <div className="form-footer-row">
              <div className="form-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="agreementCheck"
                  name="agree_terms"
                  required
                  defaultChecked
                />
                <label htmlFor="agreementCheck">
                  I agree with confidentiality &amp; project communication terms.
                </label>
              </div>

              <button type="submit" className="form-submit-btn-glow">
                <span>Send Message &amp; Start</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="form-privacy-note">
              <i className="bi bi-shield-lock-fill"></i>
              <span>100% Confidential. Zero spam. Direct reply from Moeez Ahmad.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
