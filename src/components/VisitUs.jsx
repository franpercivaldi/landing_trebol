import { MapPin } from "lucide-react";

export default function VisitUs() {
  return (
    <div id="visit-us" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Donde estamos</h2>
          <p>
            El trato personalizado cara a cara es nuestra especialidad. Si preferís charlar en persona, ¡te esperamos con gusto en
            nuestra oficina!
          </p>
        </div>

        <div className="map-pin">
          <MapPin /> <p>Avenida Bodereau 9498 (local 4 y 5), Córdoba, Argentina.</p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13614.93793479335!2d-64.2111773!3d-31.3536461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432989912a51145%3A0x7ed12b291beef6b0!2sAv.%20Bodereau%209498%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1715226202409!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación El Trébol"
        ></iframe>
      </div>
    </div>
  );
}
