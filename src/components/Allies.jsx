import alliesData from "../data/alliesData.json";

export const Allies = () => {
  return (
    <section id="allies" className="section allies-section">
      <div className="site-container">
        <div className="section-heading section-heading-centered section-heading-light">
          <span className="section-kicker">Respaldo que suma</span>
          <h2>{alliesData.title}</h2>
          <p>{alliesData.intro}</p>
        </div>
        <div className="allies-grid">
          {alliesData.allies.map((d, i) => (
            <article key={`${d.name}-${i}`} className="ally-card">
              <div className="ally-logo">
                <img src={d.icon.startsWith("/") ? d.icon : `/${d.icon}`} alt={d.name} />
              </div>
              <h3>{d.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
