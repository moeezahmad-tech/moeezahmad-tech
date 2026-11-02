import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Services & Solutions — Moeez Ahmad | TechKreative",
  description:
    "Explore services by Moeez Ahmad & TechKreative: Website development, AI-powered tools, SEO services, LinkedIn growth, graphic design, and video editing.",
};

interface ServiceDetail {
  title: string;
  badge: string;
  icon: string;
  summary: string;
  capabilities: string[];
}

const detailedServices: ServiceDetail[] = [
  {
    title: "Website Development",
    badge: "Core Engineering",
    icon: "bi-laptop",
    summary:
      "Fast, secure, modern websites and full-stack web applications designed to convert visitors into customers.",
    capabilities: [
      "Custom Next.js & React architecture",
      "Mobile-first, responsive, and cross-browser testing",
      "Full-stack capabilities with secure databases",
      "Sub-second load times & Core Web Vitals optimization",
    ],
  },
  {
    title: "AI Engineering & AI Tools",
    badge: "Emerging Tech",
    icon: "bi-cpu-fill",
    summary:
      "Engineering practical, user-focused AI tools and full-stack AI integrations that solve real business bottlenecks.",
    capabilities: [
      "AI-powered custom web applications & tools",
      "Client-side privacy-first algorithms (e.g. Color Magic)",
      "LLM & API integrations with custom prompt engineering",
      "Production-ready deployment & ongoing maintenance",
    ],
  },
  {
    title: "SEO Services & Organic Growth",
    badge: "Search Authority",
    icon: "bi-graph-up-arrow",
    summary:
      "Improving search visibility, semantic indexing, and driving organic traffic through proven, data-backed SEO strategies.",
    capabilities: [
      "Technical SEO auditing and on-page optimization",
      "Keyword research, structured data & schema markup",
      "High-speed architecture for search rank prioritization",
      "Conversion tracking & analytics integration",
    ],
  },
  {
    title: "LinkedIn Growth & Profile Optimization",
    badge: "B2B Positioning",
    icon: "bi-linkedin",
    summary:
      "Optimized professional profiles, strategic thought-leadership content, and meaningful B2B networking funnels.",
    capabilities: [
      "Headline, banner, and summary authority optimization",
      "Freelancer-focused strategy posts & carousels",
      "Content frameworks to turn profile visits into inbound inquiries",
      "Establishing executive and personal brand authority",
    ],
  },
  {
    title: "Graphic Design & Brand Identity",
    badge: "Visual Excellence",
    icon: "bi-palette-fill",
    summary:
      "High-quality visuals, custom design systems, and cohesive branding that create an unforgettable first impression.",
    capabilities: [
      "Brand identity guidelines, palettes, and typography",
      "Social media assets, promotional kits, and slide decks",
      "Canva-based agile design workflows & Figma UI files",
      "Cohesive alignment across all digital touchpoints",
    ],
  },
  {
    title: "Video Editing & Content Creation",
    badge: "Attention Engine",
    icon: "bi-camera-reels-fill",
    summary:
      "Engaging edits, short-form reels, and YouTube walkthroughs that capture attention and communicate messages clearly.",
    capabilities: [
      "Reels, Shorts, and TikTok pacing & dynamic typography",
      "Long-form educational walkthroughs and tutorials",
      "'Turning video content into client magnets' methodology",
      "Sound design, color grading, and thumbnail design",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirement Gathering",
    desc: "Initial consultation to unpack your business challenge, define concrete deliverables, and clarify technical parameters.",
  },
  {
    num: "02",
    title: "Information Architecture & Wireframes",
    desc: "Mapping out high-converting user journeys, site flow, and structural wireframes for intuitive navigation.",
  },
  {
    num: "03",
    title: "Design & Full-Stack Development",
    desc: "Crafting modern, responsive UI and writing clean, scalable code with modern frameworks and robust database backends.",
  },
  {
    num: "04",
    title: "SEO Setup & Performance Optimization",
    desc: "Rigorous technical SEO implementation, structured schema, and performance tuning for lightning-fast speeds.",
  },
  {
    num: "05",
    title: "Launch, Testing & Handover",
    desc: "End-to-end quality assurance, production deployment, client walkthrough, and post-launch documentation.",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="page-header-section" data-aos="fade-down">
          <span className="section-pill-tag">Digital Solutions</span>
          <h1>Services &amp; Engineering Solutions</h1>
          <p>
            From concept ideation to launched products: combining software engineering, AI tooling,
            search visibility, and agency creativity to help your brand stand out.
          </p>
        </section>

        {/* Detailed Services Grid (6 Core Offerings) */}
        <section style={{ margin: "40px 0 60px" }}>
          <div className="cards-2col-grid">
            {detailedServices.map((service, idx) => (
              <div
                key={service.title}
                className="about-card-box"
                data-aos="fade-up"
                data-aos-delay={(idx % 2) * 100}
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <i className={`bi ${service.icon}`} style={{ fontSize: "1.8rem", color: "var(--primary-blue)" }}></i>
                    <span className="role-pill">{service.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{service.title}</h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {service.summary}
                  </p>
                </div>

                <ul style={{ paddingLeft: "18px", marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {service.capabilities.map((cap, i) => (
                    <li key={i} style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* The 5-Step Process: From Ideation to Products */}
        <section data-aos="fade-up" style={{ margin: "50px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">How We Work</span>
            <h2>From Ideation to Product: 5-Stage Process</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step-box">
                <div className="process-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Section CTA */}
        <section className="section-cta-row" data-aos="fade-up" style={{ marginBottom: "50px" }}>
          <Link href="/contact" className="btn-primary-pill" style={{ marginRight: "12px" }}>
            Start a Project with Us <i className="bi bi-arrow-right"></i>
          </Link>
          <Link href="/projects" className="btn-secondary-pill">
            View Work Portfolio
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
