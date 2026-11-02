interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  delay: number;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Affan Tasadduq",
    role: "Freelance Video Editor on Fiverr",
    avatar: "/images/clients/affan.webp",
    quote:
      "“I highly recommend Moeez for any creative project! He’s a skilled web developer and an amazing freelancer. His ability to analyze problems and work through them is unmatched, bringing his vision to life every time.”",
    delay: 0,
  },
  {
    name: "Asad Ali",
    role: "Freelance Full Stack Developer",
    avatar: "/images/clients/asad.webp",
    quote:
      "“If you need someone who’s creative, easy to work with, and knows what they’re doing — Moeez is 100% worth it. I can’t recommend him enough.”",
    delay: 100,
  },
  {
    name: "Muhammad Aleem",
    role: "Video Editor & Creator",
    avatar: "/images/clients/aleem.webp",
    quote:
      "“Moeez is extremely efficient and attentive to every design requirement. His technical knowledge and quick turnaround transformed our website completely.”",
    delay: 200,
  },
  {
    name: "Muhammad Huzaifa",
    role: "Software Developer | Data Analyst",
    avatar: "/images/clients/huzaofa.webp",
    quote:
      "“I recently got my LinkedIn banner and header done by Moeez Ahmad, and honestly — he nailed it. His approach is meticulous and quick, yet he makes sure the result is absolutely perfect.”",
    delay: 300,
  },
  {
    name: "Bilal Arshad",
    role: "Expert Thumbnail Designer | 150+ Clients",
    avatar: "/images/clients/bilal.webp",
    quote:
      "“I had the pleasure of working with Moeez and experiencing his creative process first-hand. His ability to bring ideas to life is fantastic, and his approach was fast but super clear.”",
    delay: 400,
  },
  {
    name: "Nimra Graphics",
    role: "Brand Identity & Graphic Designer",
    avatar: "/images/clients/nimra.webp",
    quote:
      "“I had the opportunity to work with Moeez for my personal branding. I’m genuinely impressed by how visually striking the work is and how professional and easy Moeez’s efforts were.”",
    delay: 500,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-heading-center" data-aos="fade-up">
        <span className="section-pill-tag">Testimonials</span>
        <h2>Client Feedback</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="testimonial-card-modern"
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div className="testimonial-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-meta">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

