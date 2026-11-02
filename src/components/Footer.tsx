import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ marginBottom: "15px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        <Link href="/" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>Home</Link>
        <Link href="/about" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>About</Link>
        <Link href="/experience" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>Experience</Link>
        <Link href="/projects" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>Projects</Link>
        <Link href="/services" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>Services</Link>
        <Link href="/contact" style={{ color: "var(--text-light-muted)", fontSize: "0.9rem" }}>Contact</Link>
      </div>
      <p>
        Copyright &copy; 2026 Moeez Ahmad &bull; Software Engineer &amp; Full-Stack AI Engineer &bull; CEO @ TechKreative &bull; All rights reserved.
      </p>
    </footer>
  );
}
