import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Services & Solutions — Moeez Ahmad",
  description:
    "Explore digital services by Moeez Ahmad: Full-stack web development, AI engineering, UI/UX design systems, high-converting landing pages, and TechKreative agency solutions.",
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
    title: "Full-Stack Web & AI Engineering",
    badge: "Core Engineering",
    icon: "bi-cpu-fill",
    summary:
      "Engineering robust, production-grade web applications and AI-powered tools designed to scale securely without performance bottlenecks.",
    capabilities: [
      "Next.js & React full-stack application development",
      "API design, REST/GraphQL endpoints, and secure databases",
      "AI & machine learning feature integration",
      "Production deployment, CI/CD pipelines, and cloud hosting",
    ],
  },
  {
    title: "UI/UX & Brand Design Systems",
    badge: "Visual Excellence",
    icon: "bi-palette-fill",
    summary:
      "Crafting bespoke, pixel-perfect user interfaces that align with your personal brand and create memorable impressions.",
    capabilities: [
      "Custom responsive design for desktop, tablet, and mobile",
      "Reusable design components and clean design tokens",
      "Interactive micro-animations and smooth user flows",
      "Figma to production-ready Next.js / Tailwind code",
    ],
  },
  {
    title: "Landing Pages & Conversion SEO",
    badge: "High Growth",
    icon: "bi-graph-up-arrow",
    summary:
      "Strategic sales pages and search-optimized architectures that turn casual visitors into paying clients and qualified leads.",
    capabilities: [
      "Conversion-focused copy layout and clear CTAs",
      "Core Web Vitals optimization (blazing sub-second loads)",
      "Technical SEO, semantic HTML, and OpenGraph social metadata",
      "Analytics and lead capture integrations (Formspree, CRM)",
    ],
  },
  {
    title: "TechKreative Digital Agency Suite",
    badge: "All-in-One Studio",
    icon: "bi-rocket-takeoff-fill",
    summary:
      "Comprehensive digital presence solutions through TechKreative, co-founded to provide complete branding, content, and growth services.",
    capabilities: [
      "Complete brand identity and graphic design assets",
      "Video editing and viral creator content strategy",
      "LinkedIn profile optimization and personal branding",
      "End-to-end digital marketing and audience acquisition",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Ideation",
    desc: "We analyze your vision, target audience, and business goals to map out technical requirements and architecture.",
  },
  {
    num: "02",
    title: "Design & UX System",
    desc: "Prototyping responsive layouts and high-fidelity visuals that establish trust and seamless navigation.",
  },
  {
    num: "03",
    title: "Engineering & AI Build",
    desc: "Writing clean, maintainable, and type-safe code using Next.js, modern backend logic, and scalable databases.",
  },
  {
    num: "04",
    title: "Launch & Growth",
    desc: "Deploying to production, optimizing speed, configuring SEO, and monitoring analytics for continuous improvement.",
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
            From concept ideation to scalable digital products: combining software engineering,
            AI integration, and conversion-focused design to help brands win online.
          </p>
        </section>

        {/* Detailed Services Grid */}
        <section style={{ margin: "40px 0 60px" }}>
          <div className="cards-2col-grid">
            {detailedServices.map((service, idx) => (
              <div
                key={service.title}
                className="about-card-box"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
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

        {/* The 4-Step Process: From Ideation to Products */}
        <section data-aos="fade-up" style={{ margin: "50px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">How I Work</span>
            <h2>From Ideation to Product</h2>
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
            Discuss Your Project <i className="bi bi-arrow-right"></i>
          </Link>
          <Link href="/projects" className="btn-secondary-pill">
            Explore Portfolio
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
