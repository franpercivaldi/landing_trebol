import { useState } from "react";

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
          <li>
            <a href="#benefits" onClick={handleNavClick}>
              ¿Por qué elegirnos?
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={handleNavClick}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#our-services" onClick={handleNavClick}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#allies" onClick={handleNavClick}>
              Aliados
            </a>
          </li>
          {/* <li>
            <a href="#reviews" onClick={handleNavClick}>
              Testimonios
            </a>
          </li> */}
          <li>
            <a href="#team" onClick={handleNavClick}>
              Equipo
            </a>
          </li>
          <li>
            <a href="#visit-us" onClick={handleNavClick}>
              Visitanos
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleNavClick}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
