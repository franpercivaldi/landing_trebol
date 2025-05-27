import visitUsData from "../data/visitUsData.json";
import { MapPin } from "lucide-react";

export default function VisitUs() {
  return (
    <div id="visit-us" className="text-center">
      <div className="container">
        <div className="section-title col-md-8 col-md-offset-2">
          <h2>{visitUsData.title}</h2>
          <p>{visitUsData.intro}</p>
        </div>

        <div
          className="locations-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {visitUsData.locations.map((loc, index) => (
            <div key={index} className="location-item">
              <div className="map-pin" style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <MapPin />
                <p style={{ margin: 0, marginLeft: "8px", fontWeight: 500 }}>{loc.label}</p>
              </div>
              <div className="map-container" style={{ width: "100%", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación ${loc.label}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
