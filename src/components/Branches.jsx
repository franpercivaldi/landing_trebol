import { MapPin, Phone } from "lucide-react";
import { branches } from "../content";

const MapEmbed = ({ branch }) => (
  <div className="branch__map">
    <iframe src={branch.embed} title={`Mapa de ${branch.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
);

export const Branches = () => (
  <section className="section branches" id="sucursales" aria-labelledby="branches-title">
    <div className="container">
      <div className="branches__head">
        <h2 id="branches-title" className="section-title">
          Te atendemos en persona
        </h2>
        <p className="section-lead">
          Si preferís hablarlo cara a cara, pasá por cualquiera de nuestras dos sucursales en la zona norte de Córdoba.
        </p>
      </div>

      <div className="branches__grid">
        {branches.map((b) => (
          <article key={b.name} className="branch">
            <MapEmbed branch={b} />
            <div className="branch__info">
              <h3 className="branch__name">{b.name}</h3>
              <p className="branch__address">
                {b.address}
                <br />
                {b.city}
              </p>
              <div className="branch__actions">
                <a className="btn btn--outline btn--small" href={b.mapsLink} target="_blank" rel="noopener noreferrer">
                  <MapPin size={16} aria-hidden="true" />
                  Cómo llegar
                </a>
                <a className="btn btn--ghost btn--small" href={b.phone.href}>
                  <Phone size={16} aria-hidden="true" />
                  {b.phone.label}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
