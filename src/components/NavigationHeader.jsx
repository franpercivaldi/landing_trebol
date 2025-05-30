import { useState, useEffect } from "react";
import navData from "../data/navigationHeaderData.json";

export const NavigationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close menu on navigation (mobile UX)
  const handleNavClick = () => setMenuOpen(false);

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

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // trigger when section enters view
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="header-container">
        <button
          type="button"
          className="navbar-toggle"
          aria-label={navData.toggleLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{navData.toggleLabel}</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#introduction" onClick={handleLinkClick("#introduction")}>
          <img src="/img/logo.svg" alt="Logo" className="logo" />
        </a>
        <ul className={`nav navbar-nav navbar-right${menuOpen ? " show" : ""}`}>
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
