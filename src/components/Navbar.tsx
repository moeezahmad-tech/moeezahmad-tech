"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="nav-container">
        <nav className="nav-pill">
          <Link href="/" className="nav-brand">
            <img
              src="/images/logo.png"
              alt="Moeez Ahmad"
              className="nav-logo-img"
            />
            <span>Moeez</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={isActive ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="nav-cta">
            Hire Me <i className="bi bi-arrow-up-right"></i>
          </Link>

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
              <Link href={item.href} className="mobile-link" onClick={closeMenu}>
                {item.label}
              </Link>
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
