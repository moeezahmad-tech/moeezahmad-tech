import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description:
    "Get in touch with Moeez Ahmad for full-stack web development, AI engineering, custom websites, and TechKreative agency partnerships. Guaranteed reply within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Moeez Ahmad | Start a Project",
    description:
      "Start a full-stack web project, AI tool integration, or TechKreative partnership. Direct response within 24 hours.",
    url: "/contact",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Contact Moeez Ahmad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Moeez Ahmad | Start a Project",
    description:
      "Reach out for full-stack web and AI engineering partnerships.",
    images: ["/images/me.png"],
  },
};

const directChannels = [
  {
    title: "Direct Email",
    value: "moeezahmad.tech@gmail.com",
    actionText: "Send Email",
    link: "mailto:moeezahmad.tech@gmail.com",
    icon: "bi-envelope-at-fill",
    note: "Response in < 12 hours",
  },
  {
    title: "WhatsApp Direct",
    value: "+92 326 6037125",
    actionText: "Open WhatsApp Chat",
    link: "https://wa.me/923266037125",
    icon: "bi-whatsapp",
    note: "Instant chat & voice calls",
  },
  {
    title: "LinkedIn Network",
    value: "in/moeezahmad-tech",
    actionText: "Connect on LinkedIn",
    link: "https://www.linkedin.com/in/moeezahmad-tech/",
    icon: "bi-linkedin",
    note: "Professional network & profile",
  },
  {
    title: "Timezone & Location",
    value: "Lahore, Pakistan (UTC+5)",
    actionText: "Check Global Overlap",
    link: "https://www.timeanddate.com/worldclock/pakistan/lahore",
    icon: "bi-globe-central-south-asia",
    note: "Overlaps US, UK, EU, UAE",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Discovery & Scope Review",
    timeframe: "Within 24 Hours",
    desc: "We analyze your project goals, technical requirements, target audience, and business roadmap through a focused discovery exchange.",
    icon: "bi-search",
  },
  {
    step: "02",
    title: "Architecture & Proposal",
    timeframe: "1 – 3 Business Days",
    desc: "You receive a structured breakdown: system architecture, tech stack recommendation, delivery milestones, and transparent milestone pricing.",
    icon: "bi-file-earmark-code-fill",
  },
  {
    step: "03",
    title: "Execution & Live Launch",
    timeframe: "Sprint-Based Delivery",
    desc: "Agile sprints with regular staging demo previews, rigorous QA testing, zero-downtime deployment, and dedicated post-launch support.",
    icon: "bi-rocket-takeoff-fill",
  },
];

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I build full-stack web applications, AI-powered tools (agentic AI, RAG, prompt architectures), responsive corporate websites, high-converting landing pages, and end-to-end digital agency services via TechKreative.",
    icon: "bi-layers-half",
  },
  {
    q: "Do you work with international clients across timezones?",
    a: "Yes! Over 100+ clients across the US, UK, Middle East, and globally have partnered with me. Flexible communication schedules guarantee seamless overlap regardless of your location.",
    icon: "bi-globe2",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Turnaround depends on project scope: high-converting landing pages take 5–10 business days; full commercial websites take 2–3 weeks; and custom full-stack web applications or AI systems take 3–6 weeks.",
    icon: "bi-hourglass-split",
  },
  {
    q: "How do project milestones and payments work?",
    a: "Work is typically structured into clear milestones (e.g. 50% deposit upon kickoff, balance upon final staging approval and production deployment). We support global transfers, Wise, Payoneer, and direct banking.",
    icon: "bi-credit-card-2-front-fill",
  },
  {
    q: "Can you integrate AI or LLMs into existing software?",
    a: "Absolutely. I design and implement RAG knowledge bases, streaming agentic AI, Anthropic/OpenAI integrations, automated document workflows, and WhatsApp conversational AI tools into existing codebases.",
    icon: "bi-cpu-fill",
  },
  {
    q: "Can I hire TechKreative as a full agency partner?",
    a: "Yes! Through TechKreative, our 8-member multidisciplinary team provides a complete one-stop solution covering web engineering, UI/UX graphic design, video editing, and SEO organic search growth.",
    icon: "bi-people-fill",
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
            Reach out directly via email, WhatsApp, or through the interactive project form below.
          </p>
        </section>

        {/* 4 Direct Channels Cards Grid */}
        <section data-aos="fade-up" style={{ marginBottom: "40px" }}>
          <div className="contact-channels-4col-grid">
            {directChannels.map((ch, idx) => (
              <a
                key={ch.title}
                href={ch.link}
                target={ch.link.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="channel-card"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="channel-icon-circle">
                  <i className={`bi ${ch.icon}`}></i>
                </div>
                <div className="channel-meta">
                  <span className="channel-title">{ch.title}</span>
                  <strong className="channel-val">{ch.value}</strong>
                  <span className="channel-note">{ch.note}</span>
                </div>
                <div className="channel-action-arrow">
                  <span>{ch.actionText}</span>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form Component */}
        <Contact />

        {/* What Happens Next Roadmap (3 Balanced Columns) */}
        <section data-aos="fade-up" style={{ margin: "60px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Process</span>
            <h2>What Happens After You Reach Out?</h2>
            <p style={{ maxWidth: "620px", margin: "10px auto 0", color: "var(--text-muted)" }}>
              A transparent, swift 3-step collaboration framework from first hello to product launch.
            </p>
          </div>

          <div className="cards-3col-grid">
            {roadmapSteps.map((step) => (
              <div key={step.step} className="contact-process-card">
                <div className="contact-step-header">
                  <span className="contact-step-num">{step.step}</span>
                  <span className="contact-timeframe-tag">{step.timeframe}</span>
                </div>
                <h4>
                  <i className={`bi ${step.icon}`} style={{ color: "var(--primary-blue)", marginRight: "8px" }}></i>
                  {step.title}
                </h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section (Balanced 3-Column Grid: 2 rows of 3 = 6 FAQs) */}
        <section data-aos="fade-up" style={{ margin: "60px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ maxWidth: "620px", margin: "10px auto 0", color: "var(--text-muted)" }}>
              Clear answers to common questions about timelines, working styles, and technical services.
            </p>
          </div>

          <div className="cards-3col-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <div className="faq-icon-holder">
                  <i className={`bi ${faq.icon}`}></i>
                </div>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
