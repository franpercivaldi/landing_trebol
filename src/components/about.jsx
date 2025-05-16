import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="Sobre nosotros" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Quiénes somos</h2>
              <p>{props.data ? props.data.paragraph : "Cargando..."}</p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="row list-style">
                <div className="col-sm-6">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "Cargando..."}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "Cargando..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
