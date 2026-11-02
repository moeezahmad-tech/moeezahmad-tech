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
    desc: "Maintains, scales, and improves production-level software as part of the SolnetInfo engineering team, focusing on system reliability, fault-tolerant architecture, and performance scalability.",
    hasLine: true,
  },
  {
    company: "TechKreative",
    date: "June 2025 - Present",
    role: "CEO & Co-Founder",
    desc: "Spearheading product and technology direction at TechKreative. Leading end-to-end full-stack web applications, AI integrations, scalable user interfaces, and brand-focused digital experiences from ideation to launch.",
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
