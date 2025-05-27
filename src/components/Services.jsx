import emailjs from "@emailjs/browser";
import { useState, useMemo } from "react";
import QuoteForm from "./QuoteForm";
import { ServicesImage } from "./ServicesImage";
import landingPageData from "../data/data.json";
const { Services: servicesData } = landingPageData;

export const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [serviceType, setServiceType] = useState(null);
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const mapTitleToServiceType = (title) => {
    if (/automotor|taxi/i.test(title)) return "vehiculo";
    if (/monopatin/i.test(title)) return "monopatin";
    if (/moto/i.test(title)) return "moto";
    if (/bici/i.test(title)) return "bici";
    if (/hogar|comercio/i.test(title)) return "inmueble";
    return null;
  };

  const descriptions = useMemo(() => {
    return servicesData.reduce((acc, item) => {
      const key = mapTitleToServiceType(item.title);
      if (key && item.description) {
        acc[key] = item.description;
      }
      return acc;
    }, {});
  }, [servicesData]);

  const openForm = (title) => {
    const type = mapTitleToServiceType(title);
    if (!type) return;
    setServiceType(type);
    setModalOpen(true);
  };

  const handleSubmit = (formData) => {
    const templateParams = {
      serviceType,
      ...formData,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Tu solicitud de cotización ha sido enviada correctamente.");
      })
      .catch((err) => {
        console.error("Error al enviar cotización:", err);
        alert("Hubo un error al enviar tu solicitud. ¡Intenta de nuevo más tarde!");
      });
  };

  return (
    <>
      <div id="our-services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros servicios</h2>
            <p>Trabajamos con las mejores aseguradoras del país.</p>
          </div>
          <div className="row">
            <div className="our-services-items">
              {servicesData.map((d) => (
                <div key={d.title} className="col-sm-6 col-md-4 col-lg-4 cursor-pointer" onClick={() => openForm(d.title)}>
                  <ServicesImage title={d.title} smallImage={d.smallImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteForm
        visible={modalOpen}
        serviceType={serviceType}
        descriptions={descriptions}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};
