"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

interface ProjectItem {
  title: string;
  category: "all" | "fullstack" | "portfolios" | "ai";
  categoryLabel: string;
  desc: string;
  image: string;
  link: string;
  tech: string[];
}

const allProjects: ProjectItem[] = [
  {
    title: "TechKreative Platform",
    category: "fullstack",
    categoryLabel: "Agency Platform",
    desc: "Modern digital agency website featuring high-performance architecture, clean service showcases, and fast response times.",
    image: "/images/projects/p (1).webp",
    link: "https://techkreative.com",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
  },
  {
    title: "Real Estate Blue",
    category: "fullstack",
    categoryLabel: "Web Portal",
    desc: "Contemporary real estate property listing portal with advanced filtering, sleek cards, and responsive property views.",
    image: "/images/projects/p (9).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/real%20estate%20blue/index.html",
    tech: ["JavaScript", "HTML5", "CSS3", "UI/UX"],
  },
  {
    title: "Real Estate Prime",
    category: "fullstack",
    categoryLabel: "Commercial Portal",
    desc: "Luxury residential and commercial property showcase with intuitive catalog navigation and high-conversion lead funnels.",
    image: "/images/projects/p (10).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/real%20Estate/index.html",
    tech: ["Frontend Architecture", "CSS Grid", "JavaScript"],
  },
  {
    title: "HypeLink",
    category: "fullstack",
    categoryLabel: "Creator Web App",
    desc: "Bio link aggregating platform with vibrant customizable themes, fast loading, and interactive widgets for digital creators.",
    image: "/images/projects/p (2).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/HypeLink/index.html",
    tech: ["Web App", "Responsive Design", "Personal Branding"],
  },
  {
    title: "Abdul Mutalib Portfolio",
    category: "portfolios",
    categoryLabel: "Developer Portfolio",
    desc: "Clean, interactive developer personal website designed for high credibility, client conversion, and rapid visual clarity.",
    image: "/images/projects/p (3).webp",
    link: "https://abdulmutalib.page.gd",
    tech: ["Tailored UI", "Performance", "Branding"],
  },
  {
    title: "AK Executive Travel",
    category: "fullstack",
    categoryLabel: "Booking Platform",
    desc: "Premium chauffeur and executive travel booking platform based in the United Kingdom with streamlined booking workflows.",
    image: "/images/projects/p (4).webp",
    link: "https://akexecutivetravel.co.uk/",
    tech: ["Commercial Web", "Responsive", "Enterprise"],
  },
];

const aiRoadmap = [
  {
    title: "AI Website-Copy Generator",
    tag: "Generative Copy",
    demo: "Prompt engineering, UI, API integration, and structured conversion copy generation.",
    value: "Useful for small businesses and agencies needing rapid, on-brand website copy.",
    icon: "bi-file-text-fill",
  },
  {
    title: "SEO Content Brief Generator",
    tag: "Search Intelligence",
    demo: "SEO keyword analysis, structured JSON outputs, headings, and semantic AI workflows.",
    value: "Connects engineering with digital growth, saving hours of content planning.",
    icon: "bi-search",
  },
  {
    title: "LinkedIn Post Generator",
    tag: "Personal Branding",
    demo: "Personal branding hooks, carousel slide breakdowns, and viral formatting.",
    value: "Powers TechKreative's LinkedIn-growth and creator service offerings.",
    icon: "bi-linkedin",
  },
  {
    title: "Color Magic AI Palette Assistant",
    tag: "AI + Color Magic",
    demo: "Natural language query to palette generator (e.g. 'moody cyberpunk coffee shop').",
    value: "Extends our public open-source project with conversational generative palettes.",
    icon: "bi-palette2",
  },
  {
    title: "AI FAQ & Support Chatbot",
    tag: "RAG & Embeddings",
    demo: "Contextual retrieval, vector embeddings, responsive widget UI, and edge deployment.",
    value: "Converts site visitors into qualified leads with 24/7 instant answers.",
    icon: "bi-chat-dots-fill",
  },
  {
    title: "Client-Proposal Generator",
    tag: "Workflow Automation",
    demo: "Automated scope of work, timeline generation, and dynamic budget estimation.",
    value: "Demonstrates practical agency automation and business process optimization.",
    icon: "bi-briefcase-fill",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="page-header-section" data-aos="fade-down">
          <span className="section-pill-tag">Portfolio &amp; Work</span>
          <h1>Featured Projects &amp; Case Studies</h1>
          <p>
            Explore client web applications, documented case studies, and AI-powered product concepts
            built with focus on speed, clean architecture, and business outcomes.
          </p>
        </section>

        {/* ==========================================
            COLOR MAGIC FULL CASE STUDY (10-Point Blueprint)
            ========================================== */}
        <section className="case-study-container" data-aos="fade-up">
          <div className="case-study-header">
            <span className="featured-badge" style={{ marginBottom: "12px", display: "inline-block" }}>
              Detailed Case Study &bull; Open Source
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "var(--text-dark)", marginBottom: "8px" }}>
              Color Magic — Open-Source Color Palette Generator &amp; Explorer
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.05rem" }}>
              Helps designers and developers discover, generate, and understand professional color palettes through a fast, privacy-friendly web tool.
            </p>

            <div className="case-study-meta-row">
              <span className="case-study-meta-tag">
                <i className="bi bi-person-fill"></i> <b>Role:</b> Founder &amp; Lead Developer
              </span>
              <span className="case-study-meta-tag">
                <i className="bi bi-building"></i> <b>Initiative:</b> TechKreative
              </span>
              <span className="case-study-meta-tag">
                <i className="bi bi-stack"></i> <b>Stack:</b> HTML5, CSS3, JavaScript, Tailwind CSS
              </span>
              <span className="case-study-meta-tag">
                <i className="bi bi-shield-check"></i> <b>Privacy:</b> 100% Client-Side Calculations
              </span>
            </div>
          </div>

          <div className="case-study-section-grid">
            <div className="case-study-block">
              <h4><i className="bi bi-exclamation-triangle-fill" style={{ color: "#ef4444" }}></i> The Problem</h4>
              <p>
                Designers and developers frequently need fast, dependable color schemes during UI/UX ideation. Most existing tools require sign-ups, impose slow external API dependencies, track user behavior, or provide rigid customization options that slow down the creative workflow.
              </p>
            </div>

            <div className="case-study-block">
              <h4><i className="bi bi-check-circle-fill" style={{ color: "#22c55e" }}></i> The Solution</h4>
              <p>
                Built <strong>Color Magic</strong> as a lightweight, fully client-side web application. It features 150+ curated palettes, hex-to-color-name conversion, and instant generation of five-color schemes using established color-theory harmony models.
              </p>
            </div>
          </div>

          <div className="case-study-block" style={{ marginBottom: "24px" }}>
            <h4><i className="bi bi-stars" style={{ color: "var(--primary-blue)" }}></i> Key Features &amp; Contributions</h4>
            <ul style={{ paddingLeft: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "10px", marginTop: "10px" }}>
              <li>150+ curated professional color palettes across multiple themes.</li>
              <li>Hex-to-color-name identification using a curated color library.</li>
              <li>Five-color generation using Mono, Contrast, Triad, Tetrad, and Analogic methods.</li>
              <li>Local, privacy-friendly calculations with zero API calls.</li>
              <li>Clean, accessible, and responsive modern interface.</li>
              <li>Public open-source TechKreative initiative with zero vendor lock-in.</li>
            </ul>
          </div>

          <div className="case-study-section-grid">
            <div className="case-study-block">
              <h4><i className="bi bi-gear-fill" style={{ color: "var(--primary-blue)" }}></i> Technical Challenges &amp; Decisions</h4>
              <p>
                To keep Color Magic blazing fast, resilient, and private, all mathematical color transformations (RGB, HSL, and harmonic angle rotations) were engineered locally in the browser rather than offloaded to a serverless API. This guarantees offline capability and zero downtime.
              </p>
            </div>

            <div className="case-study-block">
              <h4><i className="bi bi-trophy-fill" style={{ color: "#eab308" }}></i> Outcome &amp; Results</h4>
              <p>
                Color Magic launched publicly as an active open-source product. It demonstrates end-to-end product execution: concept validation, algorithm implementation, front-end optimization, and shipping a production-ready tool used by creators globally.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
            <a
              href="https://colormagic.techkreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Explore Live Tool <i className="bi bi-arrow-up-right"></i>
            </a>
            <a
              href="https://colormagic.techkreative.com/open-source.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-pill"
            >
              Open Source Documentation <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        {/* Filter Pills */}
        <div className="filter-pills-row" data-aos="fade-up">
          <button
            className={`filter-pill-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Client Projects ({allProjects.length})
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === "fullstack" ? "active" : ""}`}
            onClick={() => setActiveFilter("fullstack")}
          >
            Full-Stack &amp; Web Apps
          </button>
          <button
            className={`filter-pill-btn ${activeFilter === "portfolios" ? "active" : ""}`}
            onClick={() => setActiveFilter("portfolios")}
          >
            Client Portfolios
          </button>
        </div>

        {/* Client Projects Grid */}
        <section className="projects-gallery-section" style={{ paddingTop: 0 }}>
          <div className="projects-grid-modern">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.title}
                className="project-card-modern"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="project-img-holder">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-body">
                  <div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--primary-blue)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                      {project.tech.map((t) => (
                        <span key={t} className="skill-badge-tag" style={{ fontSize: "0.75rem", padding: "3px 8px" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    Visit Site <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Project Portfolio Roadmap */}
        <section data-aos="fade-up" style={{ margin: "60px 0" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">AI Engineering Concepts</span>
            <h2>AI Project Portfolio Roadmap</h2>
            <p style={{ maxWidth: "650px", margin: "10px auto 0" }}>
              Targeted AI products aligning Full-Stack AI Engineering with practical business growth.
            </p>
          </div>

          <div className="ai-roadmap-grid">
            {aiRoadmap.map((item) => (
              <div key={item.title} className="ai-roadmap-card">
                <div>
                  <span className="ai-roadmap-tag">{item.tag}</span>
                  <h4>
                    <i className={`bi ${item.icon}`} style={{ color: "var(--primary-blue)" }}></i>
                    {item.title}
                  </h4>
                  <p style={{ marginBottom: "12px", color: "var(--text-body)" }}>
                    <strong>Capabilities:</strong> {item.demo}
                  </p>
                </div>
                <p style={{ fontStyle: "italic", borderTop: "1px solid #f1f5f9", paddingTop: "10px" }}>
                  <strong>Value:</strong> {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="about-card-box" data-aos="fade-up" style={{ textAlign: "center", margin: "50px 0" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>Have a Project in Mind?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px" }}>
            Whether you need a custom full-stack web application, a high-converting redesign,
            or an AI-integrated digital product, let&apos;s build it together.
          </p>
          <Link href="/contact" className="btn-primary-pill">
            Start a Conversation <i className="bi bi-send-fill"></i>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
