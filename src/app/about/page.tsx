import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "About Me — Career, Education & Story",
  description:
    "Learn about Moeez Ahmad: Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, Co-Founder & CEO of TechKreative, education at UET Lahore, and core engineering philosophies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Moeez Ahmad | Full-Stack AI Engineer & CEO",
    description:
      "Career trajectory, computer science education at UET Lahore, certifications, and technical proficiencies.",
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad — About & Engineering Background",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moeezahmad_tech",
    creator: "@moeezahmad_tech",
    title: "About Moeez Ahmad | Full-Stack AI Engineer & CEO",
    description:
      "Career trajectory, education, certifications, and engineering philosophy.",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Moeez Ahmad — About & Engineering Background",
      },
    ],
  },
};

const storyArc = [
  {
    step: "01",
    title: "Student & Builder",
    subtitle: "UET Lahore",
    desc: "Pursuing Computer Science with foundational interests in gaming, animation, and modern web architectures.",
    icon: "bi-mortarboard-fill",
  },
  {
    step: "02",
    title: "Freelancer & Developer",
    subtitle: "2021 – Present",
    desc: "Built custom responsive websites and web applications for 100+ clients globally, establishing robust digital identities.",
    icon: "bi-laptop",
  },
  {
    step: "03",
    title: "AI-Focused Engineer",
    subtitle: "Machine Learning & AI Tools",
    desc: "Engineering full-stack AI solutions, prompt systems, RAG workflows, and browser-first privacy tools like Color Magic.",
    icon: "bi-cpu-fill",
  },
  {
    step: "04",
    title: "Agency Founder & CEO",
    subtitle: "TechKreative",
    desc: "Co-founded TechKreative with Tayyaba Khan, scaling an 8-member multidisciplinary team delivering web, AI, SEO, and branding.",
    icon: "bi-rocket-takeoff-fill",
  },
  {
    step: "05",
    title: "Production Engineer",
    subtitle: "SolnetInfo",
    desc: "Contributing to the SolnetInfo engineering team on production-level software and AI systems including WaqtAI and Hisaab AI.",
    icon: "bi-gear-wide-connected",
  },
  {
    step: "06",
    title: "Creator & Community",
    subtitle: "Turning Video into Magnets",
    desc: "Partnering with 15 designers and creatives on video campaigns, YouTube technical tutorials, and developer masterclasses.",
    icon: "bi-camera-video-fill",
  },
];

const educationList = [
  {
    institution: "University of Engineering and Technology, Lahore",
    program: "Computer Science, Gaming and Animation",
    period: "Undergraduate",
    desc: "Rigorous computer science curriculum with strong emphasis on software architecture, computer graphics, algorithms, and web technologies.",
    icon: "bi-mortarboard",
  },
  {
    institution: "Punjab Group of Colleges",
    program: "Website Development & Information Technology",
    period: "2023 – 2025",
    desc: "Specialized coursework in frontend/backend development, database structures, web protocols, and modern development stacks.",
    icon: "bi-laptop",
  },
  {
    institution: "Al Siraat High School",
    program: "Intermediate in Computer Science (ICS)",
    period: "Foundational",
    desc: "Foundational studies in computer science, programming logic, mathematics, and analytical computing principles.",
    icon: "bi-journal-code",
  },
];

const certList = [
  {
    title: "AWS Student Community Day Participant",
    issuer: "Amazon Web Services",
    icon: "bi-cloud-check-fill",
  },
  {
    title: "Next.js: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn Learning",
    icon: "bi-layers-fill",
  },
  {
    title: "Learning LinkedIn: Professional Journey",
    issuer: "LinkedIn",
    icon: "bi-linkedin",
  },
  {
    title: "Personal Branding for Sales Success",
    issuer: "LinkedIn Learning",
    icon: "bi-person-badge-fill",
  },
  {
    title: "Resume Tips for Leaders and Managers",
    issuer: "LinkedIn Learning",
    icon: "bi-file-earmark-person-fill",
  },
  {
    title: "Canva Essentials",
    issuer: "Canva",
    icon: "bi-palette-fill",
  },
  {
    title: "Microsoft Office Specialist: Word Associate",
    issuer: "Microsoft",
    icon: "bi-award-fill",
  },
  {
    title: "Responsible Website Development",
    issuer: "EDUCBA",
    icon: "bi-shield-check",
  },
];

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: "bi-cpu-fill",
    skills: ["AI Engineering", "Agentic AI", "RAG Architecture", "Prompt Systems", "LLM Integration", "AI Tooling"],
  },
  {
    title: "Full-Stack Web Engineering",
    icon: "bi-code-slash",
    skills: ["Next.js & React", "TypeScript & JS", "HTML5 & CSS Grid", "REST & SSE APIs", "Performance Tuning", "Responsive UI"],
  },
  {
    title: "Agency & Product Leadership",
    icon: "bi-rocket-takeoff-fill",
    skills: ["Co-Founder & CEO", "Ideation to Launch", "Quality Management", "8-Member Team Lead", "Client Consulting", "Product Roadmaps"],
  },
  {
    title: "Digital Growth & Branding",
    icon: "bi-graph-up-arrow",
    skills: ["SEO Strategy", "Digital Identity", "LinkedIn Growth", "Content Systems", "Conversion Optimization", "Video Strategy"],
  },
];

export default function AboutPage() {
  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="page-header-section" data-aos="fade-down">
          <span className="section-pill-tag">About Me</span>
          <h1>Moeez Ahmad</h1>
          <p>
            Full-Stack AI Engineer, Software Engineer Intern @ SolnetInfo, and Co-Founder/CEO @ TechKreative.
            Turning ideas into reliable, scalable, and user-focused digital solutions.
          </p>
        </section>

        {/* 4-Item Balanced Metrics Strip */}
        <section className="metrics-4col-strip" data-aos="fade-up" data-aos-delay="100">
          <div className="metric-box">
            <span className="metric-number">200+</span>
            <span className="metric-label">Projects Completed</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">50+</span>
            <span className="metric-label">Clients Globally</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">8</span>
            <span className="metric-label">Core Team Members</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">5+</span>
            <span className="metric-label">Years Digital Experience</span>
          </div>
        </section>

        {/* Professional Story & Personal Story Narrative Grid */}
        <section className="about-narrative-grid">
          <div className="about-card-box" data-aos="fade-right">
            <h2>Professional Story</h2>
            <p>
              I’m <strong>Moeez Ahmad</strong>, a Full-Stack AI Engineer, Software Engineer Intern, and Co-Founder of
              TechKreative, based in Lahore, Pakistan. My work sits at the intersection of software engineering and
              artificial intelligence. I build websites, AI-powered tools, and SEO-driven solutions that help businesses
              establish a stronger digital presence and reach the right audience.
            </p>
            <p>
              From ideation to deployment, I focus on solving real problems rather than simply adding features. I care
              about practicality, efficiency, customization, quality, and the end user. Whether I am building a website,
              integrating AI into a product, or improving search visibility, my goal is to create something useful,
              reliable, and scalable.
            </p>
            <p>
              As the Co-Founder of <strong>TechKreative</strong>, I help businesses access high-quality web, AI, design,
              and growth services. TechKreative combines website development, SEO, LinkedIn growth, social-media management,
              graphic design, and video editing into one complete digital partner.
            </p>
            <p>
              Alongside TechKreative, I work with the <strong>SolnetInfo</strong> development team on maintaining, scaling,
              and improving production-level software and AI systems such as WaqtAI and Hisaab AI. This gives me deep experience
              across both client-focused product execution and high-scale production engineering.
            </p>

            <h3 style={{ marginTop: "28px", fontSize: "1.3rem" }}>Personal Story</h3>
            <p>
              I started as a Computer Science student at UET Lahore with interests in gaming, animation, and web technologies.
              Over time, my focus shifted toward building practical digital products: websites for clients, AI-powered tools,
              and systems that help businesses grow online.
            </p>
            <p>
              Today, I split my work between engineering, entrepreneurship, and content creation. I build products, lead
              an 8-member team at TechKreative, and create technical content that makes modern web engineering, AI tools,
              and agency building accessible to everyone.
            </p>

            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/projects" className="btn-primary-pill">
                Explore Projects <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/contact" className="btn-secondary-pill">
                Work Together
              </Link>
            </div>
          </div>

          <div className="about-card-box" data-aos="fade-left">
            <h3>Professional Identity</h3>
            <table className="identity-table">
              <tbody>
                <tr>
                  <td className="label-cell">Location</td>
                  <td className="val-cell">Lahore, Punjab, Pakistan</td>
                </tr>
                <tr>
                  <td className="label-cell">Current Role</td>
                  <td className="val-cell">Software Engineer Intern, SolnetInfo</td>
                </tr>
                <tr>
                  <td className="label-cell">Founder Role</td>
                  <td className="val-cell">Co-Founder &amp; CEO, TechKreative</td>
                </tr>
                <tr>
                  <td className="label-cell">Primary Focus</td>
                  <td className="val-cell">Full-Stack AI, Web Products, SEO &amp; Growth</td>
                </tr>
                <tr>
                  <td className="label-cell">Personal Site</td>
                  <td className="val-cell">
                    <a href="https://moeezahmad.dev/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)" }}>
                      moeezahmad.dev <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">Company Site</td>
                  <td className="val-cell">
                    <a href="https://www.techkreative.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)" }}>
                      techkreative.com <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">Languages</td>
                  <td className="val-cell">Urdu (Native), Punjabi (Native), English (Working)</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: "24px", padding: "18px", background: "#f8fafc", borderRadius: "var(--radius-sm)", border: "1px solid #e2e8f0" }}>
              <span className="section-pill-tag" style={{ marginBottom: "6px" }}>Positioning</span>
              <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--text-body)", fontStyle: "italic", lineHeight: 1.6 }}>
                &ldquo;From Ideation to Products: turning ideas into practical, reliable, user-focused digital solutions.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 6-Stage Journey & Story Arc (Balanced 3x2 Grid) */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Evolution</span>
            <h2>My Journey &amp; Story Arc</h2>
            <p style={{ maxWidth: "600px", margin: "8px auto 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              A structured progression from computer science foundations to full-scale agency leadership and enterprise AI engineering.
            </p>
          </div>

          <div className="cards-3col-grid">
            {storyArc.map((arc) => (
              <div key={arc.step} className="process-step-box">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="process-step-num">{arc.step}</div>
                  <i className={`bi ${arc.icon}`} style={{ fontSize: "1.3rem", color: "var(--primary-blue)" }}></i>
                </div>
                <h4>{arc.title}</h4>
                <span style={{ fontSize: "0.8rem", color: "var(--primary-blue)", fontWeight: 600, display: "block", marginBottom: "6px" }}>
                  {arc.subtitle}
                </span>
                <p>{arc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section (Balanced 3-Column Grid) */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Academic Background</span>
            <h2>Education</h2>
            <p style={{ maxWidth: "580px", margin: "8px auto 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Formal training in computer science, software systems, and modern web application development.
            </p>
          </div>

          <div className="cards-3col-grid">
            {educationList.map((edu) => (
              <div key={edu.institution} className="edu-card">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span className="period">{edu.period}</span>
                    <i className={`bi ${edu.icon}`} style={{ color: "var(--primary-blue)", fontSize: "1.2rem" }}></i>
                  </div>
                  <h4>{edu.institution}</h4>
                  <p style={{ fontWeight: 600, color: "var(--text-dark)", marginTop: "4px" }}>
                    {edu.program}
                  </p>
                </div>
                <p>{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section (Balanced 4-Column Grid: 2 rows of 4) */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Credentials</span>
            <h2>Certifications &amp; Honors</h2>
            <p style={{ maxWidth: "580px", margin: "8px auto 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Continuous professional learning in cloud computing, full-stack systems, and product branding.
            </p>
          </div>

          <div className="cards-4col-grid">
            {certList.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <i className={`bi ${cert.icon}`} style={{ fontSize: "1.4rem", color: "var(--primary-blue)", flexShrink: 0 }}></i>
                  <div>
                    <h4>{cert.title}</h4>
                    <span className="issuer">{cert.issuer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorized Skills Section (Balanced 4-Column Grid) */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Technical Competencies</span>
            <h2>Skills &amp; Specializations</h2>
            <p style={{ maxWidth: "580px", margin: "8px auto 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Core technical and strategic proficiencies organized by domain.
            </p>
          </div>

          <div className="cards-4col-grid">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="skill-cat-card">
                <h3>
                  <i className={`bi ${cat.icon}`} style={{ color: "var(--primary-blue)" }}></i>
                  {cat.title}
                </h3>
                <div className="skill-badges-list">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-badge-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
