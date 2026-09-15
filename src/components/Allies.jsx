import alliesData from "../data/alliesData.json";

export const Allies = () => {
  return (
    <div id="allies" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{alliesData.title}</h2>
          <p>{alliesData.intro}</p>
        </div>
        <div className="allies-list">
          {alliesData.allies.map((d, i) => (
            <div key={`${d.name}-${i}`} className="allie">
              <img
                src={d.icon}
                alt={d.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <div className="allies-desc">
                <h3>{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
