interface TimelineItem {
  company: string;
  date: string;
  role: string;
  desc: string;
  hasLine?: boolean;
}

const experiences: TimelineItem[] = [
  {
    company: "SolnetInfo",
    date: "July 2026 - Present",
    role: "Software Engineer",
    desc: "Contributing to enterprise production software and high-impact AI systems at SolnetInfo, including WaqtAI (WhatsApp-first AI operating system) and Hisaab AI (AI-native tax intelligence platform), focusing on agentic architectures, system reliability, and scale.",
    hasLine: true,
  },
  {
    company: "TechKreative",
    date: "June 2025 - Present",
    role: "CEO & Co-Founder",
    desc: "Spearheading product and technology direction at TechKreative. Leading an 8-member multidisciplinary team delivering bespoke full-stack web applications, AI integrations, scalable user interfaces, and brand-focused digital experiences with 200+ projects completed.",
    hasLine: true,
  },
  {
    company: "Self-Employed, Global",
    date: "2021 - Present",
    role: "Freelance Full-Stack & AI Developer",
    desc: "Delivering bespoke responsive web solutions, CMS integrations, custom APIs, and high-converting digital products for 100+ international businesses, startups, and creators.",
    hasLine: true,
  },
  {
    company: "Digital Creator & Educator",
    date: "2022 - Present",
    role: "Tech Instructor & Mentor",
    desc: "Authoring comprehensive web development tutorials, project walkthroughs, and frontend masterclasses across YouTube and social platforms for aspiring developers worldwide.",
    hasLine: false,
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading-center" data-aos="fade-up">
        <span className="section-pill-tag">Career Journey</span>
        <h2>My Work Experience</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="timeline-node">
              <span className="node-dot"></span>
              {exp.hasLine && <span className="node-line"></span>}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.company}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <h4 className="timeline-role">{exp.role}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
