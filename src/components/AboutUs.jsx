import { Check } from "lucide-react";
import aboutUsData from "../data/aboutUsData.json";

export const AboutUs = () => {
  const reasons = [...aboutUsData.whyList1, ...aboutUsData.whyList2];

  return (
    <section id="about-us" className="section about-section">
      <div className="site-container about-grid">
        <div className="about-visual">
          <div className="about-visual-glow" aria-hidden="true" />
          <div className="about-image-frame">
            <img src="/img/quienesSomos.avif" alt="Equipo de El Trébol Organización" />
          </div>
          <div className="about-stat">
            <strong>15+</strong>
            <span>años cuidando a los nuestros</span>
          </div>
        </div>
        <div className="about-content">
          <div className="section-heading section-heading-left">
            <span className="section-kicker">Cercanía que se nota</span>
            <h2>{aboutUsData.title}</h2>
            <p>{aboutUsData.paragraph}</p>
          </div>
          <div className="about-reasons">
            <h3>{aboutUsData.whyTitle}</h3>
            <div className="reason-grid">
              {reasons.map((reason) => (
                <div className="about-elem" key={reason}>
                  <span className="about-check"><Check size={15} /></span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
