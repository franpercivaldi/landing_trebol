import { about } from "../content";

export const About = () => (
  <section className="section about" id="nosotros" aria-labelledby="about-title">
    <div className="container about__grid">
      <figure className="about__media">
        <img src="img/quienesSomos.avif" alt="Equipo de El Trébol Organización" loading="lazy" />
      </figure>

      <div className="about__text">
        <h2 id="about-title" className="section-title">
          {about.title}
        </h2>
        {about.paragraphs.map((p) => (
          <p key={p} className="about__paragraph">
            {p}
          </p>
        ))}
        <ul className="checklist checklist--columns">
          {about.reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
