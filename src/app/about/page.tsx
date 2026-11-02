import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "About Moeez Ahmad — Full-Stack AI Engineer & Software Engineer Intern",
  description:
    "Learn about Moeez Ahmad: Full-Stack AI Engineer, Software Engineer Intern at SolnetInfo, Co-Founder & CEO of TechKreative, education at UET Lahore, and core philosophies.",
};

const storyArc = [
  {
    step: "01",
    title: "Student & Builder",
    subtitle: "UET Lahore",
    desc: "Pursuing Computer Science with foundational interests in gaming, animation, and modern web technologies.",
    icon: "bi-mortarboard-fill",
  },
  {
    step: "02",
    title: "Freelancer & Web Developer",
    subtitle: "2021 – Present",
    desc: "Built custom websites and landing pages for 100+ clients globally, establishing robust digital identities.",
    icon: "bi-laptop",
  },
  {
    step: "03",
    title: "AI-Focused Engineer",
    subtitle: "Machine Learning & AI Tools",
    desc: "Engineering full-stack AI solutions, prompt systems, and privacy-first browser tools like Color Magic.",
    icon: "bi-cpu-fill",
  },
  {
    step: "04",
    title: "Agency Founder & CEO",
    subtitle: "TechKreative",
    desc: "Co-founded TechKreative with Tayyaba Khan, scaling a 10-member team delivering web, AI, SEO, and branding.",
    icon: "bi-rocket-takeoff-fill",
  },
  {
    step: "05",
    title: "Production Engineer",
    subtitle: "SolnetInfo",
    desc: "Joined the SolnetInfo engineering team to maintain, scale, and optimize enterprise production-level software.",
    icon: "bi-gear-wide-connected",
  },
  {
    step: "06",
    title: "Creator & Community Builder",
    subtitle: "Video into Client Magnets",
    desc: "Partnering with 15 designers and creatives on video campaigns, YouTube masterclasses, and technical content.",
    icon: "bi-camera-video-fill",
  },
];

const educationList = [
  {
    institution: "University of Engineering and Technology, Lahore",
    program: "Computer Science, Gaming and Animation",
    period: "Undergraduate",
    desc: "Rigorous computer science curriculum with focus on software architecture, graphics, algorithms, and web technologies.",
  },
  {
    institution: "Punjab Group of Colleges",
    program: "Website Development & Information Technology",
    period: "2023 – 2025",
    desc: "Specialized coursework in frontend/backend development, database structures, web protocols, and modern development stacks.",
  },
  {
    institution: "Al Siraat High School",
    program: "Intermediate in Computer Science (ICS)",
    period: "Foundational",
    desc: "Foundational studies in computer science, programming logic, mathematics, and analytical computing.",
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

const linkedinSkills = [
  "AI Engineer", "AI Solutions", "Artificial Intelligence", "Software Engineer", "Software Engineering",
  "Full-Stack Developer", "Full-Stack Web Development", "Web Developer", "Website Development",
  "Design Development", "Customization", "Ideation", "Building Products", "Digital Solutions",
  "SEO Strategy", "Growth & Reach", "Digital Identity", "CEO & Leadership", "Freelancing",
  "Quality Management", "Portfolio Development"
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

        {/* Professional Story & Personal Story */}
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
              and improving production-level software. This gives me experience across both client-focused product
              development and production engineering.
            </p>

            <h3 style={{ marginTop: "28px", fontSize: "1.3rem" }}>Personal Story</h3>
            <p>
              I started as a Computer Science student at UET Lahore with interests in gaming, animation, and web technologies.
              Over time, my focus shifted toward building practical digital products: websites for clients, AI-powered tools,
              and systems that help businesses grow online.
            </p>
            <p>
              Today, I split my work between engineering, entrepreneurship, and content creation. I build products, lead
              TechKreative, and create content that makes technology, freelancing, and agency building more accessible.
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
          </div>
        </section>

        {/* Final Positioning Statement Box */}
        <section className="about-card-box" data-aos="fade-up" style={{ marginBottom: "50px", textAlign: "center", background: "#f8fafc" }}>
          <span className="section-pill-tag">Positioning Statement</span>
          <p style={{ fontSize: "1.2rem", color: "var(--text-dark)", fontWeight: 600, maxWidth: "800px", margin: "14px auto 0", lineHeight: 1.6 }}>
            &ldquo;I’m Moeez Ahmad, a Full-Stack AI Engineer and Co-Founder of TechKreative. I build websites, AI-powered tools, and SEO-driven digital products that help businesses turn ideas into reliable, scalable, and growth-focused solutions.&rdquo;
          </p>
        </section>

        {/* 6-Stage Portfolio Story Arc */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Evolution</span>
            <h2>My Journey &amp; Story Arc</h2>
          </div>

          <div className="process-grid">
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

        {/* LinkedIn Skills Cloud */}
        <section data-aos="fade-up" style={{ marginBottom: "60px" }}>
          <div className="section-heading-center">
            <span className="section-pill-tag">Technical Competencies</span>
            <h2>Skills &amp; Specializations</h2>
          </div>

          <div className="about-card-box">
            <div className="skill-badges-list" style={{ justifyContent: "center", gap: "10px" }}>
              {linkedinSkills.map((skill) => (
                <span key={skill} className="skill-badge-tag" style={{ fontSize: "0.86rem", padding: "8px 14px" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
