import { insurers } from "../content";

export const Insurers = () => (
  <section className="insurers" aria-labelledby="insurers-title">
    <div className="container insurers__inner">
      <h2 id="insurers-title" className="insurers__title">
        Cotizamos con estas aseguradoras
      </h2>
      <ul className="insurers__list">
        {insurers.map((i) => (
          <li key={i.name} className="insurer">
            <img src={i.logo} alt="" loading="lazy" width="64" height="64" />
            <span>{i.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
