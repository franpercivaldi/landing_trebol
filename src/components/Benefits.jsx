import { Calendar1, Clock, PiggyBank, ShieldPlus } from "lucide-react";
import benefitsData from "../data/benefitsData.json";

const iconMap = {
  sield: <ShieldPlus />,
  shield: <ShieldPlus />,
  clock: <Clock />,
  bank: <PiggyBank />,
  calendar: <Calendar1 />,
};

export const Benefits = () => {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="site-container">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">El respaldo que necesitás</span>
          <h2>{benefitsData.title}</h2>
          <p>Una forma simple y humana de sentirte protegido en cada etapa.</p>
        </div>
        <div className="benefits-grid">
          {benefitsData.benefits.map((d, i) => (
            <article key={`${d.title}-${i}`} className="benefit-card">
              <span className="benefit-index">0{i + 1}</span>
              <div className="icon-container">{iconMap[d.icon]}</div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
