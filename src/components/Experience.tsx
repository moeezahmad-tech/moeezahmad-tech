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
    date: "Jun 2026 - Present",
    role: "Software Engineer",
    desc: "Engineering scalable full-stack software solutions, crafting high-performance web applications, and collaborating on enterprise-grade software architecture.",
    hasLine: true,
  },
  {
    company: "TechKreative",
    date: "2023 - Present",
    role: "Lead Web Developer & Founder",
    desc: "Spearheading end-to-end full-stack web applications, scalable user interfaces, and custom digital tool development for global clients and enterprise workflows.",
    hasLine: true,
  },
  {
    company: "Self-Employed, Global",
    date: "2021 - Present",
    role: "Freelance Full-Stack Developer",
    desc: "Delivering bespoke responsive web solutions, CMS integrations, custom APIs, and high-converting landing pages for 100+ international businesses and creators.",
    hasLine: true,
  },
  {
    company: "Digital Creator & Educator",
    date: "2022 - Present",
    role: "Tech Instructor & Mentor",
    desc: "Authoring comprehensive web development tutorials, project walkthroughs, and frontend masterclasses for aspiring developers worldwide.",
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
            data-aos-delay={(index + 1) * 100}
          >
            <div className="timeline-left">
              <h4 className="timeline-company">{exp.company}</h4>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <div className="timeline-center">
              <div className="timeline-node"></div>
              {exp.hasLine && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-right">
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
