interface CourseItem {
  id: string;
  img?: string;
  isHub?: boolean;
  tag: string;
  badge: string;
  title: string;
  desc: string;
  link: string;
  delay: number;
}

const courses: CourseItem[] = [
  {
    id: "c1",
    img: "/images/Courses/c1.webp",
    tag: "Web Development",
    badge: "Full Course",
    title: "Web Development Masterclass",
    desc: "Comprehensive foundation covering modern HTML5, CSS3, semantic layouts, and responsive design systems.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42nF08oBiGoByU5zFwerka_T",
    delay: 0,
  },
  {
    id: "c2",
    img: "/images/Courses/c2.webp",
    tag: "JavaScript",
    badge: "Core Programming",
    title: "JavaScript & Interactive Web UI",
    desc: "Mastering modern ES6+, DOM manipulation, dynamic event handling, and interactive frontend widgets.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42n4KrLjlV0LurswCr8SRNuQ",
    delay: 100,
  },
  {
    id: "c3",
    img: "/images/Courses/c3.webp",
    tag: "Project Build",
    badge: "Hands-on",
    title: "Complete Website Projects",
    desc: "Step-by-step project walkthroughs building commercial-grade responsive websites from scratch.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42l0X0aTAn3t8JcwNRwooDus",
    delay: 200,
  },
  {
    id: "c4",
    img: "/images/Courses/c4.webp",
    tag: "Modern CSS",
    badge: "UI Engineering",
    title: "Frontend Layouts & Grid Systems",
    desc: "Deep dive into CSS Grid, Flexbox, responsive typography, and crafting pixel-perfect web experiences.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42m2q9WzfuvokA7h-RZ53RUw",
    delay: 300,
  },
  {
    id: "c5",
    img: "/images/Courses/c5.webp",
    tag: "Career & Growth",
    badge: "Freelancing",
    title: "Portfolio & Freelance Guide",
    desc: "Actionable frameworks for personal branding, client acquisition, and building high-converting portfolios.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42mIBAkmqqcYLzMEG9EMjakr",
    delay: 400,
  },
  {
    id: "c6",
    isHub: true,
    tag: "Creator Hub",
    badge: "100+ Videos",
    title: "YouTube Channel & Masterclasses",
    desc: "Explore the full TechKreative community library with 100+ tutorials, AI tooling, and creator guides.",
    link: "https://www.youtube.com/@moeezahmad.techkreative",
    delay: 500,
  },
];

export default function Courses() {
  return (
    <section className="courses-section" data-aos="fade-up">
      <div className="section-heading-center">
        <span className="section-pill-tag">Tutorials &amp; Masterclasses</span>
        <h2>Want to Learn from Me?</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto 0", color: "var(--text-muted)" }}>
          Structured video tutorials, project walkthroughs, and practical developer guides on YouTube.
        </p>
      </div>

      <div className="courses-scroll-track">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card-modern"
            data-aos="fade-up"
            data-aos-delay={course.delay}
          >
            {course.isHub ? (
              <div className="course-hub-banner">
                <i className="bi bi-youtube" style={{ fontSize: "3rem", color: "#ef4444" }}></i>
                <span className="course-badge" style={{ position: "static", marginTop: "12px" }}>
                  {course.badge}
                </span>
              </div>
            ) : (
              <div className="course-thumbnail-holder">
                <img src={course.img} alt={course.title} />
                <div className="course-play-overlay">
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <span className="course-badge">{course.badge}</span>
              </div>
            )}

            <div className="course-card-body">
              <div>
                <span className="course-tag">{course.tag}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
              </div>

              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="course-watch-btn"
              >
                Watch on YouTube <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
