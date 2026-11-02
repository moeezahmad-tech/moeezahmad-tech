"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#experience" },
  { label: "Project", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="nav-container">
        <nav className="nav-pill">
          <Link href="#hero" className="nav-brand">
            <img
              src="/images/logo.png"
              alt="Moeez Ahmad"
              className="nav-logo-img"
            />
            <span>Moeez</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={isActive ? "active" : ""}
                    onClick={() => setActiveSection(sectionId)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="nav-cta">
            Hire Me <i className="bi bi-arrow-up-right"></i>
          </a>

          <button
            className="nav-toggle"
            id="menuToggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} id="mobileMenu">
        <button
          className="close-btn"
          id="menuClose"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="mobile-link" onClick={closeMenu}>
                {item.label === "Resume" ? "Resume / Experience" : item.label === "Project" ? "Projects" : item.label === "Contact Us" ? "Contact" : item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-socials">
          <a
            href="https://www.linkedin.com/in/moeezahmad-tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@moeezahmad.techkreative"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/moeezahmad.tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/moeezahmad.tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/923266037125"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
}
