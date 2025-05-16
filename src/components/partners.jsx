import React from "react";

export const Partners = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros aliados</h2>
          <p>El respaldo de las grandes compañías al servicio de tu seguridad.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <img
                    src={d.icon}
                    alt={d.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginBottom: "15px"
                    }}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Cargando..."}
        </div>
      </div>
    </div>
  );
};
