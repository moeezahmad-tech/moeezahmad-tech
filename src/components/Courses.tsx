interface CourseItem {
  id: string;
  img: string;
  tag: string;
  badge: string;
  title: string;
  desc: string;
  link: string;
  topics?: string[];
}

const featuredCourse: CourseItem = {
  id: "c1",
  img: "/images/Courses/c1.webp",
  tag: "Flagship Masterclass",
  badge: "Full Course",
  title: "Web Development Masterclass",
  desc: "Comprehensive foundation covering modern HTML5, CSS3, semantic layouts, and responsive design systems with hands-on exercises and zero-to-live production walkthroughs.",
  link: "https://www.youtube.com/playlist?list=PL9BaL-erd42nF08oBiGoByU5zFwerka_T",
  topics: [
    "Modern Semantic HTML5",
    "CSS3 Flexbox & Grid Systems",
    "Responsive Mobile-First UI",
    "Production Deployment Walkthroughs",
  ],
};

const subCourses: CourseItem[] = [
  {
    id: "c2",
    img: "/images/Courses/c2.webp",
    tag: "JavaScript",
    badge: "Core Programming",
    title: "JavaScript & Interactive Web UI",
    desc: "Mastering modern ES6+, DOM manipulation, dynamic event handling, and interactive frontend widgets.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42n4KrLjlV0LurswCr8SRNuQ",
  },
  {
    id: "c3",
    img: "/images/Courses/c3.webp",
    tag: "Project Build",
    badge: "Hands-on",
    title: "Complete Website Projects",
    desc: "Step-by-step project walkthroughs building commercial-grade responsive websites from scratch.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42l0X0aTAn3t8JcwNRwooDus",
  },
  {
    id: "c4",
    img: "/images/Courses/c4.webp",
    tag: "Modern CSS",
    badge: "UI Engineering",
    title: "Frontend Layouts & Grid Systems",
    desc: "Deep dive into CSS Grid, Flexbox, responsive typography, and crafting pixel-perfect web experiences.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42m2q9WzfuvokA7h-RZ53RUw",
  },
  {
    id: "c5",
    img: "/images/Courses/c5.webp",
    tag: "Career & Growth",
    badge: "Freelancing",
    title: "Portfolio & Freelance Guide",
    desc: "Actionable frameworks for personal branding, client acquisition, and building high-converting portfolios.",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42mIBAkmqqcYLzMEG9EMjakr",
  },
];

export default function Courses() {
  return (
    <section className="courses-section" data-aos="fade-up">
      <div className="section-heading-center">
        <span className="section-pill-tag">Tutorials &amp; Guides</span>
        <h2>Want to Learn from Me?</h2>
        <p style={{ maxWidth: "620px", margin: "10px auto 0", color: "var(--text-muted)" }}>
          Structured video tutorials, project walkthroughs, and practical developer guides on YouTube.
        </p>
      </div>

      {/* Featured Masterclass Hero Card */}
      <div className="course-featured-hero" data-aos="fade-up" data-aos-delay="100">
        <div className="course-featured-media">
          <img src={featuredCourse.img} alt={featuredCourse.title} />
          <div className="course-play-overlay">
            <i className="bi bi-play-circle-fill"></i>
          </div>
          <span className="course-badge">{featuredCourse.badge}</span>
        </div>

        <div className="course-featured-content">
          <div className="course-featured-badge-row">
            <span className="course-tag">{featuredCourse.tag}</span>
            <span className="course-level-pill">
              <i className="bi bi-mortarboard-fill"></i> Beginner to Advanced
            </span>
          </div>

          <h3>{featuredCourse.title}</h3>
          <p>{featuredCourse.desc}</p>

          {featuredCourse.topics && (
            <div className="course-topics-list">
              {featuredCourse.topics.map((t) => (
                <span key={t} className="course-topic-item">
                  <i className="bi bi-check2-circle"></i> {t}
                </span>
              ))}
            </div>
          )}

          <div style={{ marginTop: "20px" }}>
            <a
              href={featuredCourse.link}
              target="_blank"
              rel="noopener noreferrer"
              className="course-watch-btn-primary"
            >
              Start Masterclass on YouTube <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Symmetrical Course Cards */}
      <div className="courses-4col-grid">
        {subCourses.map((course, idx) => (
          <div
            key={course.id}
            className="course-card-modern"
            data-aos="fade-up"
            data-aos-delay={150 + idx * 80}
          >
            <div className="course-thumbnail-holder">
              <img src={course.img} alt={course.title} />
              <div className="course-play-overlay">
                <i className="bi bi-play-circle-fill"></i>
              </div>
              <span className="course-badge">{course.badge}</span>
            </div>

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

      {/* Verified YouTube Channel Banner */}
      <div className="youtube-channel-strip" data-aos="fade-up" data-aos-delay="200">
        <div className="yt-strip-left">
          <div className="yt-strip-icon">
            <i className="bi bi-youtube"></i>
          </div>
          <div>
            <h4>
              Moeez Ahmad — TechKreative YouTube Channel
              <span className="verified-badge" title="Verified Creator">
                <i className="bi bi-patch-check-fill"></i>
              </span>
            </h4>
            <p>
              Subscribe for in-depth web development tutorials, coding walkthroughs, and practical guides.
            </p>
          </div>
        </div>

        <a
          href="https://www.youtube.com/@moeezahmad.techkreative"
          target="_blank"
          rel="noopener noreferrer"
          className="yt-subscribe-btn"
        >
          <span>Visit Channel</span> <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
}
