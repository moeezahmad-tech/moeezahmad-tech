"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import FeaturedProject from "@/components/FeaturedProject";

interface ProjectItem {
  title: string;
  category: "all" | "fullstack" | "portfolios" | "opensource";
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
          <h1>Featured Projects &amp; Open Source</h1>
          <p>
            Explore selected digital products, full-stack applications, and open-source tools
            built with an emphasis on speed, clean UX, and business conversions.
          </p>
        </section>

        {/* Featured Open Source Spotlight */}
        <FeaturedProject />

        {/* Filter Pills */}
        <div className="filter-pills-row" data-aos="fade-up">
          <button
            className={`filter-pill-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Projects ({allProjects.length})
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

        {/* Projects Grid */}
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
