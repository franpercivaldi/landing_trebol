export const Allies = (props) => {
  return (
    <div id="allies" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros aliados</h2>
          <p>El respaldo de las grandes compañías al servicio de tu seguridad.</p>
        </div>
        <div className="row allies-list">
          {props.data
            ? props.data.map((d, i) => (
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
              ))
            : "Cargando..."}
        </div>
      </div>
    </div>
  );
};
