import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Courses from "@/components/Courses";

export const metadata: Metadata = {
  title: "Experience & Career Journey — Moeez Ahmad",
  description:
    "Explore Moeez Ahmad's engineering career: Software Engineer at SolnetInfo, CEO & Co-Founder of TechKreative, freelance full-stack work, and tech mentorship.",
};

interface RoleDeepDive {
  title: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  summary: string;
  highlights: string[];
}

const roles: RoleDeepDive[] = [
  {
    title: "Software Engineer",
    company: "SolnetInfo",
    period: "July 2026 – Present",
    location: "Lahore, Pakistan",
    badge: "Production Software",
    summary:
      "Contributing as a core Software Engineer within SolnetInfo's software team, engineering robust software solutions and maintaining high-availability web applications.",
    highlights: [
      "Maintains, scales, and continuously improves production-level software systems.",
      "Works on rigorous engineering practices focused on reliability, fault tolerance, and load scalability.",
      "Collaborates cross-functionally on system architecture, database optimization, and performance monitoring.",
    ],
  },
  {
    title: "CEO & Co-Founder",
    company: "TechKreative",
    period: "June 2025 – Present",
    location: "Lahore, Pakistan & Global",
    badge: "Agency & Product Leadership",
    summary:
      "Co-founded TechKreative alongside Tayyaba Khan as an all-in-one digital agency and product studio bridging full-stack web engineering, branding, and conversion-focused growth.",
    highlights: [
      "Leads company technology and product direction, turning client ideas into functional, scalable digital products.",
      "Oversees engineering across custom full-stack web applications, landing pages, and digital tools like Color Magic.",
      "Coordinates cross-functional delivery including web development, brand identity, content creation, video editing, and digital strategy.",
      "Served over 100+ businesses, founders, coaches, and creators globally.",
    ],
  },
  {
    title: "Freelance Full-Stack & AI Developer",
    company: "Self-Employed",
    period: "2021 – Present",
    location: "Remote / Worldwide",
    badge: "Global Client Delivery",
    summary:
      "Delivered bespoke responsive web solutions, APIs, and high-converting landing pages for international clients across the US, UK, and Middle East.",
    highlights: [
      "Engineered 100+ websites and custom portals with modern tech stacks including Next.js, React, Node.js, and Python.",
      "Optimized Core Web Vitals, speed benchmarks, and search engine visibility for higher conversion rates.",
      "Redesigned portfolios and sales funnels to position clients as premium authorities in their niches.",
    ],
  },
  {
    title: "Digital Creator & Tech Instructor",
    company: "TechKreative Community & YouTube",
    period: "2022 – Present",
    location: "Online",
    badge: "Education & Mentorship",
    summary:
      "Creating engaging educational tutorials, video masterclasses, and project walkthroughs for aspiring software developers and digital creators.",
    highlights: [
      "Produced comprehensive YouTube playlists covering modern frontend, responsive design, and practical development.",
      "Built creator campaigns focused on turning video content into client magnets and inbound business opportunities.",
      "Mentored junior developers in transitioning from foundational coding to production-ready software.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="page-header-section" data-aos="fade-down">
          <span className="section-pill-tag">Career Journey</span>
          <h1>Work Experience &amp; Leadership</h1>
          <p>
            From engineering production software at SolnetInfo to founding and scaling TechKreative:
            a proven track record of shipping scalable products and driving digital results.
          </p>
        </section>

        {/* Roles Breakdown */}
        <section style={{ margin: "40px 0 60px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {roles.map((role, idx) => (
              <div
                key={role.company}
                className="about-card-box"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <h2 style={{ fontSize: "1.45rem", marginBottom: "4px" }}>
                      {role.title} <span style={{ color: "var(--primary-blue)" }}>@ {role.company}</span>
                    </h2>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      <i className="bi bi-calendar3"></i> {role.period} &bull;{" "}
                      <i className="bi bi-geo-alt"></i> {role.location}
                    </span>
                  </div>
                  <span className="role-pill">{role.badge}</span>
                </div>

                <p style={{ fontSize: "0.98rem", color: "var(--text-body)" }}>
                  {role.summary}
                </p>

                <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                  {role.highlights.map((h, i) => (
                    <li key={i} style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TechKreative Snapshot Card */}
        <section className="about-card-box" data-aos="fade-up" style={{ marginBottom: "60px", background: "#f8fafc" }}>
          <div className="section-heading-center" style={{ marginBottom: "20px" }}>
            <span className="section-pill-tag">Agency Snapshot</span>
            <h2>About TechKreative</h2>
          </div>

          <table className="identity-table">
            <tbody>
              <tr>
                <td className="label-cell">Company Name</td>
                <td className="val-cell">TechKreative (Tech Kreative)</td>
              </tr>
              <tr>
                <td className="label-cell">Co-Founders</td>
                <td className="val-cell">Tayyaba Khan &amp; Moeez Ahmad</td>
              </tr>
              <tr>
                <td className="label-cell">Positioning</td>
                <td className="val-cell">One-stop solution for design, development, and digital marketing</td>
              </tr>
              <tr>
                <td className="label-cell">Core Services</td>
                <td className="val-cell">
                  Full-stack web development, high-converting landing pages, branding, graphic design, content creation, video editing, social-media assets, and LinkedIn optimization
                </td>
              </tr>
              <tr>
                <td className="label-cell">Target Audience</td>
                <td className="val-cell">Freelancers, coaches, business owners, startups, and personal brands</td>
              </tr>
              <tr>
                <td className="label-cell">Official Website</td>
                <td className="val-cell">
                  <a href="https://techkreative.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)", fontWeight: 600 }}>
                    techkreative.com <i className="bi bi-arrow-up-right"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Courses Section */}
        <Courses />

        {/* Bottom CTA */}
        <section className="section-cta-row" data-aos="fade-up">
          <Link href="/projects" className="btn-primary-pill" style={{ marginRight: "12px" }}>
            Explore Projects <i className="bi bi-arrow-right"></i>
          </Link>
          <Link href="/contact" className="btn-secondary-pill">
            Let&apos;s Work Together
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
