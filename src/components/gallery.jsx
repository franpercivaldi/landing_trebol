import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="our-services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>Conocé todos los seguros que tenemos para vos.</p>
        </div>
        <div className="row">
          <div className="our-services-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                    <Image title={d.title} smallImage={d.smallImage} />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
