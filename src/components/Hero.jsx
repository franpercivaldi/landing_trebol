import { useEffect, useRef } from "react";
import { hero, services, whatsappLink } from "../content";
import { onScroll } from "../lib/smoothScroll";
import { CloverMark } from "./CloverMark";
import { ServiceIcon } from "./icons";
import { useQuote } from "./QuoteDrawer";

export const Hero = () => {
  const { openQuote } = useQuote();
  const cloverRef = useRef(null);

  // The clover drifts and turns slightly as the hero scrolls away
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return onScroll(() => {
      const y = Math.min(window.scrollY, window.innerHeight);
      if (cloverRef.current) {
        cloverRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) rotate(${y * 0.02}deg)`;
      }
    });
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__panel">
        <div className="hero__clover" ref={cloverRef}>
          <CloverMark />
        </div>

        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {hero.title}
          </h1>
          <p className="hero__lead">{hero.lead}</p>

          <ul className="picker" aria-label="Tipos de seguro">
            {services.map((s, i) => (
              <li key={s.id} style={{ "--i": i }}>
                <button type="button" className="picker__item" onClick={() => openQuote(s.id)}>
                  <ServiceIcon name={s.icon} size={20} />
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
          <p className="hero__hint">
            {hero.pickerHint} También podés{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              escribirnos por WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
