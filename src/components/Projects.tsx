interface ProjectItem {
  title: string;
  desc: string;
  image: string;
  link: string;
  delay: number;
}

const projects: ProjectItem[] = [
  {
    title: "TechKreative",
    desc: "Modern tech and creative agency website built with fast loading architecture and responsive UI.",
    image: "/images/projects/p (1).webp",
    link: "https://techkreative.com",
    delay: 0,
  },
  {
    title: "Real Estate Blue",
    desc: "Contemporary real estate property listing portal with advanced filtering and sleek card layouts.",
    image: "/images/projects/p (9).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/real%20estate%20blue/index.html",
    delay: 100,
  },
  {
    title: "Real Estate Prime",
    desc: "Luxury residential and commercial property showcase website with intuitive navigation.",
    image: "/images/projects/p (10).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/real%20Estate/index.html",
    delay: 200,
  },
  {
    title: "HypeLink",
    desc: "Bio link aggregating platform with vibrant themes and interactive widgets for creators.",
    image: "/images/projects/p (2).webp",
    link: "https://moeezahmad-tech.github.io/my_static_sites/HypeLink/index.html",
    delay: 300,
  },
  {
    title: "Abdul Mutalib Portfolio",
    desc: "Clean, interactive developer personal website designed for high conversions and clarity.",
    image: "/images/projects/p (3).webp",
    link: "https://abdulmutalib.page.gd",
    delay: 400,
  },
  {
    title: "AK Executive Travel",
    desc: "Premium chauffeur and executive travel booking platform based in the United Kingdom.",
    image: "/images/projects/p (4).webp",
    link: "https://akexecutivetravel.co.uk/",
    delay: 500,
  },
];

export default function Projects() {
  return (
    <section className="projects-gallery-section" id="projects">
      <div className="section-heading-center" data-aos="fade-up">
        <span className="section-pill-tag">Portfolio</span>
        <h2>My Frontend Projects</h2>
      </div>

      <div className="projects-grid-modern">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card-modern"
            data-aos="fade-up"
            data-aos-delay={project.delay}
          >
            <div className="project-img-holder">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-body">
              <div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
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
  );
}

