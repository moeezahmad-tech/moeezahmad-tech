import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import FeaturedProject from "@/components/FeaturedProject";
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
        <Services />
        <Experience />
        <Capabilities />
        <FeaturedProject />
        <Projects />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
