import { useState, useEffect } from "react";
import navData from "../data/navigationHeaderData.json";

export const NavigationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close menu on navigation (mobile UX)
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Handle link clicks with native smooth scroll
  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    const id = href.charAt(0) === "#" ? href.slice(1) : href;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Element with id '${id}' not found`);
    }
    handleNavClick();
  };

  // Scroll spy: highlight section in view
  useEffect(() => {
    const sections = navData.links.map((link) => document.getElementById(link.href.slice(1))).filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) currentSection = `#${section.id}`;
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav id="menu" className={`site-header${menuOpen ? " is-open" : ""}`} aria-label="Navegación principal">
      <div className="site-container header-container">
        <a href="#introduction" className="brand-lockup" onClick={handleLinkClick("#introduction")}>
          <span className="brand-logo">
            <img src="/img/logo.svg" alt="El Trébol Organización" className="logo" />
          </span>
          <span className="brand-copy">
            <strong>El Trébol</strong>
            <small>Organización</small>
          </span>
        </a>
        <button
          type="button"
          className="navbar-toggle"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Cerrar navegación" : navData.toggleLabel}</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <ul className="site-nav">
          {navData.links.map((link) => (
            <li key={link.href} className={activeSection === link.href ? "active" : ""}>
              <a href={link.href} onClick={handleLinkClick(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
