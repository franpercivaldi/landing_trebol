import { branches, contact, nav } from "../content";
import { scrollToHash } from "../lib/smoothScroll";
import { CloverMark } from "./CloverMark";

export const Footer = () => {
  const go = (href) => (e) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <CloverMark className="footer__mark" />
          <p>
            El Trébol Organización
            <br />
            Productores asesores de seguros en Córdoba.
          </p>
        </div>

        <nav className="footer__col" aria-label="Secciones">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          {branches.map((b) => (
            <p key={b.name}>
              {b.address}, {b.city}
            </p>
          ))}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} El Trébol Organización</p>
        <p>
          Sitio hecho por{" "}
          <a href="https://bozziware.vercel.app/" target="_blank" rel="noreferrer">
            bozziware
          </a>
        </p>
      </div>
    </footer>
  );
};
