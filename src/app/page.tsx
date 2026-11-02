import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export default function Home() {
  return (
    <div className="site-wrapper">
      <AosInit />
      <Navbar />
      <main>
        <Hero />

        {/* Services Section with Subpage Link */}
        <section>
          <Services />
          <div className="section-cta-row" data-aos="fade-up">
            <Link href="/services" className="btn-primary-pill">
              View All Services &amp; Tech Solutions <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </section>

        {/* Work Experience with Career Journey Link */}
        <section style={{ marginTop: "40px" }}>
          <Experience />
          <div className="section-cta-row" data-aos="fade-up">
            <Link href="/experience" className="btn-primary-pill">
              Explore Full Career Journey &amp; Roles <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </section>

        <Capabilities />

        {/* Projects Showcase with Portfolio Link */}
        <section>
          <Projects />
          <div className="section-cta-row" data-aos="fade-up">
            <Link href="/projects" className="btn-primary-pill">
              View Full Portfolio &amp; Filter Projects <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </section>

        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
