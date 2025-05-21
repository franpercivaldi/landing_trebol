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
          {" "}
          <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          <Logo className="logo" style={{ height: "100px", width: "auto", verticalAlign: "middle" }} />
        </a>{" "}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#benefits" className="page-scroll">
              ¿Por qué elegirnos?
            </a>
          </li>
          <li>
            <a href="#about-us" className="page-scroll">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#our-services" className="page-scroll">
              Servicios
            </a>
          </li>
          <li>
            <a href="#allies" className="page-scroll">
              Aliados
            </a>
          </li>
          <li>
            <a href="#reviews" className="page-scroll">
              Testimonios
            </a>
          </li>
          <li>
            <a href="#team" className="page-scroll">
              Equipo
            </a>
          </li>
          <li>
            <a href="#visit-us" className="page-scroll">
              Visitanos
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
