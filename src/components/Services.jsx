import { ServicesImage } from "./ServicesImage";

export const Services = (props) => {
  return (
    <div id="our-services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>Conocé todos los seguros que tenemos para vos.</p>
        </div>
        <div className="row">
          <div className="our-services-items">
            {props.data.map((d) => (
              <div key={d.title} className="col-sm-6 col-md-4 col-lg-4">
                <ServicesImage title={d.title} smallImage={d.smallImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
