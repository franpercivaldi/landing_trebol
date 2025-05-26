import { useState } from "react";
import landingPageData from "../data/data.json";

const { NavigationHeader: navData } = landingPageData;

export const NavigationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation (mobile UX)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="header-container">
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#page-top">
          <img src="/img/logo.svg" alt="Logo" className="logo" />
        </a>
        <ul className={`nav navbar-nav navbar-right${menuOpen ? " show" : ""}`}>
          {navData.links.map((link, idx) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
