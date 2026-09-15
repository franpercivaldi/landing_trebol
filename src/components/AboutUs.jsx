import { ChevronRight } from "lucide-react";
import aboutUsData from "../data/aboutUsData.json";

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
              <h2>{aboutUsData.title}</h2>
              <p>{aboutUsData.paragraph}</p>
              <h3>{aboutUsData.whyTitle}</h3>
              <div className="row why-choose-us">
                <div className="col-sm-6 about-list">
                  {aboutUsData.whyList1.map((d) => (
                    <div className="about-elem" key={d}>
                      <ChevronRight size={16} className="about-arrow" /> {d}
                    </div>
                  ))}
                </div>
                <div className="col-sm-6 about-list">
                  {aboutUsData.whyList2.map((d) => (
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
