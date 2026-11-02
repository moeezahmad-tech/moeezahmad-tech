export default function FeaturedProject() {
  return (
    <section className="featured-project-section" data-aos="fade-up">
      <div className="featured-project-card">
        <div className="featured-project-media">
          <img
            src="/images/colormagic-logo.png"
            alt="Color Magic - Color Palette Explorer"
          />
        </div>
        <div className="featured-project-info">
          <span className="featured-badge">Featured Product</span>
          <h3>Color Magic</h3>
          <p>
            An intelligent color palette explorer featuring thousands of
            professional color schemes. Browse and discover beautiful color
            palettes by theme (Neon, Vintage, Minimalist, Earthy, Pastel),
            search by hex codes, or let Color Magic inspire your next project.
            Perfect for designers, developers, and creative professionals.
          </p>
          <a
            href="https://colormagic.techkreative.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-pill"
          >
            Explore Color Magic <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
