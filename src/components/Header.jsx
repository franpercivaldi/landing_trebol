import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, whatsappLink } from "../content";
import { lockScroll, onScroll, scrollToHash } from "../lib/smoothScroll";
import { CloverMark } from "./CloverMark";
import { WhatsAppIcon } from "./icons";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => onScroll(() => setScrolled(window.scrollY > 24)), []);

  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Highlight the section that is currently in view
  useEffect(() => {
    const sections = ["#top", ...nav.map((l) => l.href)].map((h) => document.querySelector(h)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    // Let the menu close (and scroll unlock) before moving
    requestAnimationFrame(() => scrollToHash(href));
  };

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header__bar">
        <a href="#top" className="brand" onClick={go("#top")} aria-label="El Trébol Organización, inicio">
          <CloverMark className="brand__mark" />
          <span className="brand__name">
            El Trébol
            <small>Organización de seguros</small>
          </span>
        </a>

        <nav className="header__nav" aria-label="Principal">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)} aria-current={active === l.href ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small btn--primary header__cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={16} height={16} />
          Escribinos
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Principal">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={go("#contacto")}>
            Contacto
          </a>
        </nav>
        <a className="btn btn--primary btn--block" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={18} height={18} />
          Escribinos por WhatsApp
        </a>
      </div>
    </header>
  );
};
