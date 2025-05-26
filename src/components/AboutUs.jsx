import { ChevronRight } from "lucide-react";
import landingPageData from "../data/data.json";
const { AboutUs: aboutUsData } = landingPageData;

export const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/quienesSomos.avif" className="img-responsive" alt="Sobre nosotros" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-us-text">
              <h2>Quiénes somos</h2>
              <p>{aboutUsData.paragraph}</p>

              <h3>¿Por qué elegirnos?</h3>
              <div className="row why-choose-us">
                <div className="col-sm-6 about-list">
                  {aboutUsData.Why.map((d) => (
                    <div className="about-elem" key={d}>
                      <ChevronRight size={16} className="about-arrow" /> {d}
                    </div>
                  ))}
                </div>
                <div className="col-sm-6 about-list">
                  {aboutUsData.Why2.map((d) => (
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
