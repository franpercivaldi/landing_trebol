import { ReactComponent as Logo } from "../logoTrebol.svg";

export const NavigationHeader = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="header-container">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#page-top">
          <Logo className="logo" style={{ height: "100px", width: "auto", verticalAlign: "middle" }} />
        </a>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#benefits">¿Por qué elegirnos?</a>
          </li>
          <li>
            <a href="#about-us">Nosotros</a>
          </li>
          <li>
            <a href="#our-services">Servicios</a>
          </li>
          <li>
            <a href="#allies">Aliados</a>
          </li>
          <li>
            <a href="#reviews">Testimonios</a>
          </li>
          <li>
            <a href="#team">Equipo</a>
          </li>
          <li>
            <a href="#visit-us">Visitanos</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contactanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
