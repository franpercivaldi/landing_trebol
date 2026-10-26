import { useState } from "react";
import { Plus } from "lucide-react";
import { services, whatsappLink } from "../content";
import { ServiceIcon } from "./icons";
import { useQuote } from "./QuoteDrawer";

export const Coverages = () => {
  const { openQuote } = useQuote();
  const [openId, setOpenId] = useState(services[0].id);

  return (
    <section className="section coverages" id="coberturas" aria-labelledby="coberturas-title">
      <div className="container coverages__grid">
        <div className="coverages__intro">
          <h2 id="coberturas-title" className="section-title">
            Coberturas para la casa, el auto y el trabajo
          </h2>
          <p className="section-lead">
            Estas son las que más nos piden. Cada póliza se arma según tu caso, así que lo que ves acá es un punto de
            partida.
          </p>
          <a className="text-link" href={whatsappLink("Hola, quiero consultar por un seguro que no está en la web.")} target="_blank" rel="noopener noreferrer">
            ¿Buscás otra cobertura? Consultanos
          </a>
        </div>

        <ul className="coverage-list">
          {services.map((s) => {
            const isOpen = openId === s.id;
            return (
              <li key={s.id} className={`coverage${isOpen ? " is-open" : ""}`}>
                <h3 className="coverage__heading">
                  <button
                    type="button"
                    className="coverage__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`coverage-${s.id}`}
                    onClick={() => setOpenId(isOpen ? null : s.id)}
                  >
                    <span className="coverage__icon">
                      <ServiceIcon name={s.icon} size={22} />
                    </span>
                    <span className="coverage__name">{s.title}</span>
                    <Plus className="coverage__plus" size={20} aria-hidden="true" />
                  </button>
                </h3>

                <div id={`coverage-${s.id}`} className="coverage__panel" inert={isOpen ? undefined : ""}>
                  <div className="coverage__body">
                    <img className="coverage__image" src={s.image} alt="" loading="lazy" />
                    <div className="coverage__text">
                      <p>{s.summary}</p>
                      <ul className="checklist">
                        {s.coverages.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                      {s.note && <p className="coverage__note">{s.note}</p>}
                      <button type="button" className="btn btn--primary" onClick={() => openQuote(s.id)}>
                        Cotizar {s.name.toLowerCase()}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
