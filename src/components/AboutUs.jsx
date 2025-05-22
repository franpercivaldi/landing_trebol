import { ChevronRight } from "lucide-react";

export const AboutUs = (props) => {
  return (
    <div id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about-us.jpg" className="img-responsive" alt="Sobre nosotros" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-us-text">
              <h2>Quiénes somos</h2>
              <p>{props.data.paragraph}</p>

              <h3>¿Por qué elegirnos?</h3>
              <div className="row why-choose-us">
                <div className="col-sm-6 about-list">
                  {props.data.Why.map((d) => (
                    <div className="about-elem" key={d}>
                      <ChevronRight size={16} className="about-arrow" /> {d}
                    </div>
                  ))}
                </div>
                <div className="col-sm-6 about-list">
                  {props.data.Why2.map((d) => (
                    <div className="about-elem" key={d}>
                      <ChevronRight size={16} className="about-arrow" /> {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
