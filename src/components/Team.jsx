import teamData from "../data/teamData.json";
import { Clock, ShieldCheck, UserRound, Users } from "lucide-react";

const iconMap = {
  ShieldCheck: <ShieldCheck />,
  Users: <Users />,
  Clock: <Clock />,
  UserRound: <UserRound />,
};

function boldSubstring(text, substring) {
  const parts = text.split(substring);
  return parts.reduce((acc, part, idx) => {
    if (idx === 0) return [part];
    return [...acc, <b key={idx}>{substring}</b>, part];
  }, []);
}

export const Team = () => {
  return (
    <section id="team" className="section team-section">
      <div className="site-container">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">Siempre del mismo lado</span>
          <h2>{teamData.title}</h2>
          <p>{boldSubstring(teamData.intro, "15 años de experiencia")}</p>
        </div>
        <div className="team-grid">
          {teamData.features.map((f, i) => (
            <article key={i} className="team-card">
              <div className="team-card-top">
                <span className="team-number">0{i + 1}</span>
                <div className="feature-icon">
                {iconMap[f.icon]}
                </div>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
