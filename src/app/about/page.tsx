import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "About Moeez Ahmad — Software Engineer & Full-Stack AI Engineer",
  description:
    "Learn more about Moeez Ahmad: Software Engineer at SolnetInfo, CEO & Co-Founder of TechKreative, education at UET Lahore, certifications, and engineering philosophy.",
};

interface EducationItem {
  institution: string;
  program: string;
  period: string;
  desc: string;
}

const educationList: EducationItem[] = [
  {
    institution: "University of Engineering and Technology (UET), Lahore",
    program: "Computer Science, Gaming and Animation",
    period: "2025",
    desc: "Rigorous computer science curriculum focusing on software architecture, algorithms, and interactive systems.",
  },
  {
    institution: "Punjab Group of Colleges",
    program: "Website Development & Information Technology",
    period: "2023 – 2025",
    desc: "Comprehensive coursework in modern web development, programming fundamentals, and database systems.",
  },
  {
    institution: "Al Siraat High School",
    program: "Intermediate in Computer Science (ICS)",
    period: "Foundational",
    desc: "Early foundational studies in mathematics, computer logic, and programming concepts.",
  },
];

interface CertItem {
  title: string;
  issuer: string;
  icon: string;
}

const certList: CertItem[] = [
  {
    title: "AWS Student Community Day Participant",
    issuer: "Amazon Web Services (AWS)",
    icon: "bi-cloud-check-fill",
  },
  {
    title: "Next.js: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn Learning",
    icon: "bi-layers-fill",
  },
  {
    title: "Learning LinkedIn: Power Your Professional Journey",
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
    title: "Microsoft Office Specialist: Word Associate (Office 2019)",
    issuer: "Microsoft",
    icon: "bi-award-fill",
  },
  {
    title: "Responsible Website Development",
    issuer: "EDUCBA",
    icon: "bi-shield-check",
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
            Software Engineer, Full-Stack AI Engineer, and CEO of TechKreative.
            Working at the intersection of AI, robust software architectures, and scalable digital products.
          </p>
        </section>

        {/* Narrative & Identity Table */}
        <section className="about-narrative-grid">
          <div className="about-card-box" data-aos="fade-right">
            <h2>From Ideation to Products</h2>
            <p>
              I am Moeez Ahmad, a Software Engineer and Full-Stack AI Engineer based in
              Lahore, Punjab, Pakistan. My focus is turning powerful AI models and innovative ideas
              into efficient, reliable, safe, and scalable real-world products.
            </p>
            <p>
              Currently, I work as a <strong>Software Engineer at SolnetInfo</strong>, where I maintain, scale,
              and optimize production-level software systems with a strong emphasis on reliability and fault tolerance.
            </p>
            <p>
              Alongside engineering, I am the <strong>CEO and Co-Founder of TechKreative</strong>, an all-in-one digital
              agency bridging full-stack web engineering, brand identity, and conversion-focused digital experiences.
              We help founders, businesses, and creators launch and scale digital products from the ground up.
            </p>
            <p>
              Through content creation on YouTube and Instagram, I document my journey building software, university life
              at UET Lahore, freelancing, and agency scaling, with a stated focus on turning video content into client magnets.
            </p>

            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/experience" className="btn-primary-pill">
                View Work Experience <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/contact" className="btn-secondary-pill">
                Get In Touch
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
                  <td className="val-cell">Software Engineer, SolnetInfo</td>
                </tr>
                <tr>
                  <td className="label-cell">Founder Role</td>
                  <td className="val-cell">CEO &amp; Co-Founder, TechKreative</td>
                </tr>
                <tr>
                  <td className="label-cell">Primary Focus</td>
                  <td className="val-cell">Full-Stack AI, Web Apps, Agency Growth</td>
                </tr>
                <tr>
                  <td className="label-cell">Personal Site</td>
                  <td className="val-cell">
                    <a href="https://moeezahmad.dev" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)" }}>
                      moeezahmad.dev
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">Agency Site</td>
                  <td className="val-cell">
                    <a href="https://techkreative.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)" }}>
                      techkreative.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">Languages</td>
                  <td className="val-cell">Urdu, Punjabi, English</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Education Section */}
        <section data-aos="fade-up">
          <div className="section-heading-center">
            <span className="section-pill-tag">Academic Background</span>
            <h2>Education</h2>
          </div>

          <div className="cards-2col-grid">
            {educationList.map((edu) => (
              <div key={edu.institution} className="edu-card">
                <div>
                  <span className="period">{edu.period}</span>
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

        {/* Certifications Section */}
        <section data-aos="fade-up">
          <div className="section-heading-center">
            <span className="section-pill-tag">Credentials</span>
            <h2>Certifications &amp; Honors</h2>
          </div>

          <div className="cards-2col-grid">
            {certList.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <i className={`bi ${cert.icon}`} style={{ fontSize: "1.5rem", color: "var(--primary-blue)" }}></i>
                  <div>
                    <h4>{cert.title}</h4>
                    <span className="issuer">{cert.issuer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Categories */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Core Competencies</span>
            <h2>Skills &amp; Expertise</h2>
          </div>

          <div className="skills-category-grid">
            <div className="skill-cat-card">
              <h3>
                <i className="bi bi-cpu-fill" style={{ color: "var(--primary-blue)" }}></i>
                Engineering &amp; AI
              </h3>
              <div className="skill-badges-list">
                <span className="skill-badge-tag">Software Engineering</span>
                <span className="skill-badge-tag">Full-Stack AI Engineering</span>
                <span className="skill-badge-tag">Machine Learning &amp; AI</span>
                <span className="skill-badge-tag">Next.js &amp; React</span>
                <span className="skill-badge-tag">TypeScript &amp; JavaScript</span>
                <span className="skill-badge-tag">Python &amp; Node.js</span>
                <span className="skill-badge-tag">Production Scalability</span>
                <span className="skill-badge-tag">Reliable Systems</span>
              </div>
            </div>

            <div className="skill-cat-card">
              <h3>
                <i className="bi bi-briefcase-fill" style={{ color: "var(--primary-blue)" }}></i>
                Product &amp; Business
              </h3>
              <div className="skill-badges-list">
                <span className="skill-badge-tag">Product Ideation</span>
                <span className="skill-badge-tag">Digital Agency Operations</span>
                <span className="skill-badge-tag">Executive Leadership</span>
                <span className="skill-badge-tag">Technology Strategy</span>
                <span className="skill-badge-tag">Freelance Management</span>
                <span className="skill-badge-tag">Client Acquisition</span>
              </div>
            </div>

            <div className="skill-cat-card">
              <h3>
                <i className="bi bi-megaphone-fill" style={{ color: "var(--primary-blue)" }}></i>
                Creative &amp; Growth
              </h3>
              <div className="skill-badges-list">
                <span className="skill-badge-tag">Personal Branding</span>
                <span className="skill-badge-tag">Video Content Creation</span>
                <span className="skill-badge-tag">Digital Marketing</span>
                <span className="skill-badge-tag">LinkedIn Optimization</span>
                <span className="skill-badge-tag">UI/UX Design Systems</span>
                <span className="skill-badge-tag">High-Converting Funnels</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
