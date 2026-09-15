import visitUsData from "../data/visitUsData.json";
import { MapPin } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="visit-us" className="section visit-section">
      <div className="site-container">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">Estamos cerca</span>
          <h2>{visitUsData.title}</h2>
          <p>{visitUsData.intro}</p>
        </div>

        <div className="locations-grid">
          {visitUsData.locations.map((loc, index) => (
            <article key={index} className="location-card">
              <div className="location-heading">
                <span className="location-icon"><MapPin size={19} /></span>
                <div>
                  <span className="location-kicker">Sucursal 0{index + 1}</span>
                  <h3>{loc.label}</h3>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación ${loc.label}`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
