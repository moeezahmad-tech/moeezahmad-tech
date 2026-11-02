interface CourseItem {
  id: string;
  img: string;
  link: string;
  delay: number;
}

const courses: CourseItem[] = [
  {
    id: "c1",
    img: "/images/Courses/c1.webp",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42nF08oBiGoByU5zFwerka_T",
    delay: 0,
  },
  {
    id: "c2",
    img: "/images/Courses/c2.webp",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42n4KrLjlV0LurswCr8SRNuQ",
    delay: 100,
  },
  {
    id: "c3",
    img: "/images/Courses/c3.webp",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42l0X0aTAn3t8JcwNRwooDus",
    delay: 200,
  },
  {
    id: "c4",
    img: "/images/Courses/c4.webp",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42m2q9WzfuvokA7h-RZ53RUw",
    delay: 300,
  },
  {
    id: "c5",
    img: "/images/Courses/c5.webp",
    link: "https://www.youtube.com/playlist?list=PL9BaL-erd42mIBAkmqqcYLzMEG9EMjakr",
    delay: 400,
  },
];

export default function Courses() {
  return (
    <section className="courses-section" data-aos="fade-up">
      <div className="section-heading-center">
        <span className="section-pill-tag">Tutorials &amp; Guides</span>
        <h2>Want to Learn from Me?</h2>
      </div>

      <div className="courses-scroll-track">
        {courses.map((course, idx) => (
          <a
            key={course.id}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="course-card-link"
            data-aos="zoom-in"
            data-aos-delay={course.delay}
          >
            <img src={course.img} alt={`Web Dev Course ${idx + 1}`} />
          </a>
        ))}
      </div>
    </section>
  );
}

