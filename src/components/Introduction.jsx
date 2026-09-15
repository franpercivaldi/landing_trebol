import { ArrowDownRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import introductionData from "../data/introductionData.json";

export const Introduction = () => {
  return (
    <section id="introduction" className="hero-section">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="site-container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Productores asesores de seguros
          </span>
          <h1>{introductionData.title}</h1>
          <p className="hero-description">{introductionData.paragraph}</p>
          <div className="hero-actions">
            <a href="#benefits" className="btn btn-primary hero-primary">
              <span>{introductionData.button}</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#our-services" className="hero-text-link">
              Ver coberturas
              <ArrowDownRight size={18} />
            </a>
          </div>
          <div className="hero-proof" aria-label="Datos destacados">
            <div className="proof-item">
              <strong>15+</strong>
              <span>años de experiencia</span>
            </div>
            <div className="proof-divider" aria-hidden="true" />
            <div className="proof-item">
              <strong>24/7</strong>
              <span>asistencia cercana</span>
            </div>
            <div className="proof-divider" aria-hidden="true" />
            <div className="proof-item">
              <strong>8</strong>
              <span>compañías aliadas</span>
            </div>
          </div>
        </div>
        <aside className="hero-trust-card">
          <div className="hero-trust-header">
            <span className="hero-trust-icon"><ShieldCheck size={20} /></span>
            <span>Tu tranquilidad, primero</span>
          </div>
          <p>Soluciones claras para proteger lo que más valorás, con respaldo y acompañamiento real.</p>
          <div className="hero-trust-footer">
            <span className="status-dot" />
            Atención personalizada
          </div>
        </aside>
      </div>
    </section>
  );
};
