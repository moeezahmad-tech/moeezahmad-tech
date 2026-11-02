import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import JsonLd from "@/components/seo/JsonLd";
import { caseStudies, getCaseStudyBySlug } from "@/lib/projects-data";
import { getBaseUrl, generateBreadcrumbSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return caseStudies.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  const baseUrl = getBaseUrl();
  const canonicalUrl = `${baseUrl}/projects/${slug}`;

  return {
    title: project.title,
    description: project.shortDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDesc,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: project.image.startsWith("http") ? project.image : `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Moeez Ahmad Case Study`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@moeezahmad_tech",
      creator: "@moeezahmad_tech",
      title: project.title,
      description: project.shortDesc,
      images: [
        {
          url: project.image.startsWith("http") ? project.image : `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Moeez Ahmad Case Study`,
        },
      ],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const baseUrl = getBaseUrl();

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
    { name: project.title, item: `/projects/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.shortDesc,
    image: project.image.startsWith("http") ? project.image : `${baseUrl}${project.image}`,
    author: {
      "@type": "Person",
      name: "Moeez Ahmad",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "TechKreative",
      url: "https://www.techkreative.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/projects/${slug}`,
    },
  };

  return (
    <div className="site-wrapper">
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <AosInit />
      <Navbar />

      <main>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: "1100px",
            margin: "30px auto 0",
            padding: "0 20px",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/projects" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            Projects
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "var(--primary-blue)", fontWeight: 600 }}>{project.title}</span>
        </nav>

        {/* Header Section */}
        <section className="page-header-section" data-aos="fade-down" style={{ marginTop: "20px" }}>
          <span className="section-pill-tag">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.shortDesc}</p>
        </section>

        {/* Detailed Case Study Container */}
        <section className="case-study-container" data-aos="fade-up" style={{ marginTop: "30px" }}>
          <div className="case-study-meta-row" style={{ marginTop: 0, paddingBottom: "20px", borderBottom: "1px solid #f1f5f9" }}>
            <span className="case-study-meta-tag">
              <i className="bi bi-person-fill"></i> <b>Role:</b> {project.role}
            </span>
            <span className="case-study-meta-tag">
              <i className="bi bi-building"></i> <b>Organization:</b> {project.clientOrOrg}
            </span>
            <span className="case-study-meta-tag">
              <i className="bi bi-calendar3"></i> <b>Timeline:</b> {project.timeline}
            </span>
          </div>

          <div style={{ margin: "24px 0" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "10px" }}>
              Project Overview
            </h3>
            <p style={{ color: "var(--text-body)", fontSize: "0.98rem", lineHeight: 1.7 }}>
              {project.overview}
            </p>
          </div>

          <div className="case-study-section-grid">
            <div className="case-study-block">
              <h4>
                <i className="bi bi-exclamation-triangle-fill" style={{ color: "#ef4444" }}></i> The Challenge
              </h4>
              <p>{project.problem}</p>
            </div>

            <div className="case-study-block">
              <h4>
                <i className="bi bi-check-circle-fill" style={{ color: "#22c55e" }}></i> The Engineering Solution
              </h4>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="case-study-block" style={{ margin: "24px 0" }}>
            <h4>
              <i className="bi bi-stars" style={{ color: "var(--primary-blue)" }}></i> Key Capabilities &amp; Highlights
            </h4>
            <ul style={{ paddingLeft: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginTop: "12px" }}>
              {project.highlights.map((h) => (
                <li key={h} style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.5 }}>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-study-block" style={{ marginBottom: "24px" }}>
            <h4>
              <i className="bi bi-graph-up-arrow" style={{ color: "var(--primary-blue)" }}></i> Impact &amp; Results
            </h4>
            <p style={{ margin: 0 }}>{project.results}</p>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f1f5f9" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "10px" }}>
              Technologies Used:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-badge-tag" style={{ fontSize: "0.8rem", padding: "6px 14px" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "28px" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-pill"
              >
                Visit Live Product <i className="bi bi-box-arrow-up-right"></i>
              </a>
            )}
            <Link href="/projects" className="btn-secondary-pill">
              &larr; Back to All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

