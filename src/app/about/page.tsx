import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "About Moeez Ahmad — Full-Stack AI Engineer & Software Engineer Intern",
  description:
    "Discover Moeez Ahmad's story arc: Software Engineer Intern at SolnetInfo, Co-Founder & CEO of TechKreative, professional philosophy, education at UET Lahore, and credentials.",
};

const storyArc = [
  {
    step: "01",
    title: "Student & Builder",
    subtitle: "UET Lahore",
    desc: "Pursuing Computer Science with interests spanning gaming, animation, and foundational web engineering.",
    icon: "bi-mortarboard-fill",
  },
  {
    step: "02",
    title: "Freelancer & Web Developer",
    subtitle: "2021 – Present",
    desc: "Shipped 100+ bespoke websites and landing pages, helping businesses and creators establish distinct digital identities.",
    icon: "bi-laptop",
  },
  {
    step: "03",
    title: "AI-Focused Engineer",
    subtitle: "Machine Learning & AI Tools",
    desc: "Engineering full-stack AI solutions, agentic workflows, and privacy-first browser tools like Color Magic.",
    icon: "bi-cpu-fill",
  },
  {
    step: "04",
    title: "Agency Founder & CEO",
    subtitle: "TechKreative",
    desc: "Co-founded TechKreative with Tayyaba Khan, scaling a 10-member multidisciplinary creative and technical team.",
    icon: "bi-rocket-takeoff-fill",
  },
  {
    step: "05",
    title: "Production Engineer",
    subtitle: "SolnetInfo",
    desc: "Joined SolnetInfo's engineering team, maintaining, scaling, and optimizing production-grade software.",
    icon: "bi-gear-wide-connected",
  },
  {
    step: "06",
    title: "Creator & Community Builder",
    subtitle: "Turning Video into Client Magnets",
    desc: "Collaborative creator campaigns with 15 designers, YouTube tutorials, and agency-building content.",
    icon: "bi-camera-video-fill",
  },
];

const educationList = [
  {
    institution: "University of Engineering and Technology, Lahore",
    program: "Computer Science, Gaming and Animation",
    period: "Undergraduate",
    desc: "Rigorous computer science studies with technical emphasis on algorithms, computer graphics, animation, and software engineering.",
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
    desc: "Foundational computer science education covering programming logic, mathematics, and computing principles.",
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
            Building at the intersection of AI, production software, and digital growth.
          </p>
        </section>

        {/* Narrative & Identity Table */}
        <section className="about-narrative-grid">
          <div className="about-card-box" data-aos="fade-right">
            <h2>From Ideation to Products</h2>
            <p>
              I&apos;m <strong>Moeez Ahmad</strong>, a Full-Stack AI Engineer, Software Engineer, and Co-Founder of
              TechKreative, based in Lahore, Punjab, Pakistan.
            </p>
            <p>
              My work sits at the intersection of software engineering and artificial intelligence.
              I design and develop websites, AI-powered tools, and SEO-driven strategies that help businesses
              build a stronger online presence and reach the right audience. From idea to deployment,
              I focus on creating products that solve real problems, work reliably, and deliver genuine value.
            </p>
            <p>
              As the Co-Founder of <strong>TechKreative</strong>, I help businesses access high-quality web, AI, design,
              and growth services. TechKreative unites website development, SEO, LinkedIn growth, social-media management,
              graphic design, and video editing together as a complete digital growth partner.
            </p>
            <p>
              Alongside TechKreative, I work with the <strong>SolnetInfo development team as a Software Engineer Intern</strong> on
              maintaining, scaling, and improving production-level software. This bridges the gap between client-focused product
              development and rigorous enterprise software engineering.
            </p>

            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/experience" className="btn-primary-pill">
                View Work Experience <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/contact" className="btn-secondary-pill">
                Let&apos;s Collaborate
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
                  <td className="val-cell">Full-Stack AI, Web Apps, SEO &amp; Growth</td>
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
                  <td className="val-cell">Urdu (Native/Full), Punjabi (Native/Full), English (Working)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Professional Philosophy & Mission */}
        <section className="about-card-box" data-aos="fade-up" style={{ marginBottom: "60px", background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
          <div className="section-heading-center" style={{ marginBottom: "16px" }}>
            <span className="section-pill-tag">Core Beliefs</span>
            <h2>Professional Philosophy &amp; Founder Mission</h2>
          </div>
          <div style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "1.12rem", fontStyle: "italic", color: "var(--text-dark)", marginBottom: "18px" }}>
              &ldquo;Technology should be practical, efficient, and built with the end user in mind. Real value comes from solving real business problems rather than simply adding features.&rdquo;
            </p>
            <p style={{ fontSize: "0.98rem", color: "var(--text-body)", lineHeight: 1.7 }}>
              My mission is to make high-quality software engineering, modern AI tools, and digital-growth services accessible to businesses of all sizes and locations — not just enterprise corporations. Whether building an open-source tool like Color Magic or scaling client brands through TechKreative, the focus remains: <strong>practical utility, clean code, and measurable impact.</strong>
            </p>
          </div>
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
