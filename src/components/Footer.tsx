import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moeezahmad-tech/",
    icon: "bi-linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/moeezahmad-tech",
    icon: "bi-github",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@moeezahmad.techkreative",
    icon: "bi-youtube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/moeezahmad.tech/",
    icon: "bi-instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/moeezahmad.tech",
    icon: "bi-facebook",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923266037125",
    icon: "bi-whatsapp",
  },
  {
    name: "Email",
    href: "mailto:moeezahmad.tech@gmail.com",
    icon: "bi-envelope-fill",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="footer-social-links" aria-label="Social media profiles">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="footer-social-btn"
            aria-label={social.name}
            title={social.name}
          >
            <i className={`bi ${social.icon}`}></i>
          </a>
        ))}
      </div>

      <p>
        Copyright &copy; 2026 Moeez Ahmad &bull; Software Engineer Intern @ SolnetInfo &bull; Co-Founder &amp; CEO @ TechKreative &bull; All rights reserved.
      </p>
    </footer>
  );
}
