import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import Courses from "@/components/Courses";

export const metadata: Metadata = {
  title: "Experience & Leadership",
  description:
    "Explore Moeez Ahmad's roles: Software Engineer Intern at SolnetInfo (contributing to WaqtAI & Hisaab AI), Co-Founder & CEO of TechKreative, freelance development, and tech education.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience & Leadership | Moeez Ahmad",
    description:
      "Software Engineer Intern at SolnetInfo, Co-Founder & CEO of TechKreative, and full-stack AI creator.",
    url: "/experience",
    type: "profile",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Leadership | Moeez Ahmad",
    description:
      "Software Engineer Intern at SolnetInfo and CEO of TechKreative.",
    images: ["/images/me.png"],
  },
};

const techKreativeTeam = [
  { name: "Tayyaba Khan", role: "Co-Founder & Director", initials: "TK" },
  { name: "Moeez Ahmad", role: "Co-Founder, CEO & Web Expert", initials: "MA" },
  { name: "Muhammad Junaid", role: "Creative Lead", initials: "MJ" },
  { name: "Abdul Mutalib", role: "Full-Stack Developer", initials: "AM" },
  { name: "Asama Rafique", role: "Designer & Media", initials: "AR" },
  { name: "Zaki Ul Hassan", role: "Growth Specialist", initials: "ZH" },
  { name: "Umair Khan", role: "Technical Associate", initials: "UK" },
  { name: "Zulqarnain Imtiaz", role: "Content & SEO", initials: "ZI" },
];

const contentThemes = [
  {
    theme: "Coding & Computer Science",
    desc: "Hands-on tutorials, web development walkthroughs, and practical university projects from UET Lahore.",
    icon: "bi-code-square",
  },
  {
    theme: "AI Tools & Emerging Tech",
    desc: "Explorations of agentic AI, Google AI tooling, and integrating large language models into everyday products.",
    icon: "bi-robot",
  },
  {
    theme: "Freelancing & Client Growth",
    desc: "Actionable frameworks for landing global clients, building trust, and pricing digital development work.",
    icon: "bi-cash-coin",
  },
  {
    theme: "Agency Building Journey",
    desc: "Documenting our ongoing 'Creating Our Own Agency' series — scaling TechKreative to an 8-member team.",
    icon: "bi-building-up",
  },
  {
    theme: "Collaborative Creator Campaigns",
    desc: "Partnered with 15 designers and creatives with the stated mission: 'Turning video content into client magnets.'",
    icon: "bi-people-fill",
  },
  {
    theme: "Student & University Life",
    desc: "Sharing realities, challenges, and insights of balancing engineering school with building commercial products.",
    icon: "bi-mortarboard",
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
          <span className="section-pill-tag">Career &amp; Roles</span>
          <h1>Experience &amp; Leadership</h1>
          <p>
            Bridging production software engineering at SolnetInfo with agency leadership at TechKreative,
            where we&apos;ve completed 200+ projects for 50+ clients globally.
          </p>
        </section>

        {/* Roles Breakdown */}
        <section style={{ margin: "40px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* SolnetInfo */}
            <div className="about-card-box" data-aos="fade-up">
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
                    Software Engineer Intern <span style={{ color: "var(--primary-blue)" }}>@ SolnetInfo</span>
                  </h2>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    <i className="bi bi-calendar3"></i> July 2026 – Present &bull;{" "}
                    <i className="bi bi-geo-alt"></i> Lahore, Pakistan
                  </span>
                </div>
                <span className="role-pill">Enterprise Production</span>
              </div>

              <p style={{ fontSize: "0.98rem", color: "var(--text-body)" }}>
                Works directly with the SolnetInfo engineering team on production-level software systems, focusing on enterprise reliability, high-performance architecture, and production AI platforms.
              </p>

              {/* SolnetInfo Production Systems Worked On */}
              <div style={{ margin: "20px 0 16px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                <div style={{ background: "#f8fafc", padding: "18px", borderRadius: "var(--radius-sm)", border: "1px solid #e2e8f0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <i className="bi bi-whatsapp" style={{ color: "#22c55e", fontSize: "1.3rem" }}></i>
                    <strong style={{ color: "var(--text-dark)", fontSize: "1rem" }}>WaqtAI</strong>
                    <span className="role-pill" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>Enterprise AI</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>
                    WhatsApp-first AI Operating System for service businesses. Handles automated meetings, reminders, bookings, payments, and client follow-ups with a centralized web control plane for business owners and team members.
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "18px", borderRadius: "var(--radius-sm)", border: "1px solid #e2e8f0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <i className="bi bi-cpu-fill" style={{ color: "var(--primary-blue)", fontSize: "1.3rem" }}></i>
                    <strong style={{ color: "var(--text-dark)", fontSize: "1rem" }}>Hisaab AI</strong>
                    <span className="role-pill" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>Agentic AI Platform</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>
                    AI-native tax intelligence platform for Pakistan (FBR / IRIS) and cross-border income. Pairs deterministic tax rule engines with real-time multi-agent AI (SSE streaming), RAG knowledge base, and wealth statement property valuation.
                  </p>
                </div>
              </div>

              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Maintains, scales, and continually improves production-level software and AI systems.
                </li>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Applies rigorous engineering practices focused on system reliability, high availability, and performance scalability.
                </li>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Collaborates within an established agile engineering team on software quality management and code refinement.
                </li>
              </ul>
            </div>

            {/* TechKreative */}
            <div className="about-card-box" data-aos="fade-up">
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
                    Co-Founder / CEO <span style={{ color: "var(--primary-blue)" }}>@ TechKreative</span>
                  </h2>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    <i className="bi bi-calendar3"></i> June 2025 – Present &bull;{" "}
                    <i className="bi bi-geo-alt"></i> Lahore, Pakistan &amp; Global
                  </span>
                </div>
                <span className="role-pill dark">Agency &amp; Product Leadership</span>
              </div>

              <p style={{ fontSize: "0.98rem", color: "var(--text-body)" }}>
                Co-founded TechKreative alongside Tayyaba Khan as an all-in-one digital partner bridging full-stack web development and strategic digital experiences. Leads technology, AI tool development, and SEO-focused growth initiatives.
              </p>

              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Guides clients from initial ideation to fully launched digital products, websites, and AI tools.
                </li>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Leads an 8-member multidisciplinary team spanning full-stack development, design, video editing, and SEO.
                </li>
                <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Helped 50+ clients establish digital identities and shipped 200+ individual projects globally.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TechKreative Snapshot & Team */}
        <section className="about-card-box" data-aos="fade-up" style={{ marginBottom: "60px", background: "#f8fafc" }}>
          <div className="section-heading-center" style={{ marginBottom: "20px" }}>
            <span className="section-pill-tag">Company Profile</span>
            <h2>TechKreative Profile &amp; Team</h2>
          </div>

          <table className="identity-table" style={{ marginBottom: "28px" }}>
            <tbody>
              <tr>
                <td className="label-cell">Company Mission</td>
                <td className="val-cell">Make digital growth simple and effective for businesses of every size.</td>
              </tr>
              <tr>
                <td className="label-cell">Leadership</td>
                <td className="val-cell">Tayyaba Khan &amp; Moeez Ahmad (Co-Founders)</td>
              </tr>
              <tr>
                <td className="label-cell">Track Record</td>
                <td className="val-cell">
                  <strong>200+ projects completed &bull; 50+ happy clients &bull; 8-member team</strong>
                </td>
              </tr>
              <tr>
                <td className="label-cell">Positioning</td>
                <td className="val-cell">One-stop solution for design, development, and digital marketing</td>
              </tr>
              <tr>
                <td className="label-cell">Official Website</td>
                <td className="val-cell">
                  <a href="https://www.techkreative.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)", fontWeight: 600 }}>
                    techkreative.com <i className="bi bi-arrow-up-right"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <h3 style={{ fontSize: "1.2rem", margin: 0, color: "var(--text-dark)" }}>
              Multidisciplinary Team (8 Members)
            </h3>
            <span className="role-pill" style={{ fontSize: "0.78rem" }}>
              Balanced 8-Member Core Team
            </span>
          </div>

          {/* Balanced 4x2 Team Grid */}
          <div className="team-4col-grid">
            {techKreativeTeam.map((member) => (
              <div key={member.name} className="team-member-card">
                <div className="team-member-avatar">
                  {member.initials}
                </div>
                <div>
                  <div className="team-member-name">{member.name}</div>
                  <div className="team-member-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Themes & Personal Brand Section */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Personal Brand &amp; Reach</span>
            <h2>Content Themes: Turning Video into Client Magnets</h2>
          </div>

          <div className="cards-2col-grid">
            {contentThemes.map((item) => (
              <div key={item.theme} className="about-card-box" style={{ padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: "1.4rem", color: "var(--primary-blue)" }}></i>
                  <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--text-dark)", fontSize: "1.05rem" }}>
                    {item.theme}
                  </h4>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Tutorials Tracks */}
        <Courses />

        {/* Bottom CTA */}
        <section className="section-cta-row" data-aos="fade-up">
          <Link href="/projects" className="btn-primary-pill" style={{ marginRight: "12px" }}>
            Explore Selected Projects <i className="bi bi-arrow-right"></i>
          </Link>
          <Link href="/contact" className="btn-secondary-pill">
            Get in Touch
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
