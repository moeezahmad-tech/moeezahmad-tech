import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Moeez Ahmad — Software & Full-Stack AI Engineer",
  description:
    "Get in touch with Moeez Ahmad for full-stack web development, AI engineering, custom websites, and TechKreative agency partnerships.",
};

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on full-stack web applications, AI integrations, custom business websites, high-converting landing pages, and comprehensive agency solutions through TechKreative.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! Over 100+ clients across the US, UK, Middle East, and worldwide have partnered with me for software development, branding, and digital growth.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Turnaround depends on project scope: landing pages and portfolio websites typically take 5-10 business days, while custom full-stack web applications range from 2-6 weeks.",
  },
];

export default function ContactPage() {
  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="page-header-section" data-aos="fade-down">
          <span className="section-pill-tag">Let&apos;s Connect</span>
          <h1>Contact &amp; Start a Project</h1>
          <p>
            Have a project in mind, need software engineering expertise, or want to collaborate with TechKreative?
            Reach out directly or send a message below.
          </p>
        </section>

        {/* Contact Form & Channels */}
        <Contact />

        {/* FAQs Section */}
        <section data-aos="fade-up" style={{ margin: "60px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="about-card-box">
                <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--text-dark)", fontSize: "1.08rem", marginBottom: "8px" }}>
                  {faq.q}
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
