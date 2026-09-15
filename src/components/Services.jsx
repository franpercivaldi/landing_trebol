import emailjs from "@emailjs/browser";
import { useState, useMemo } from "react";
import QuoteForm from "./QuoteForm";
import { ServicesImage } from "./ServicesImage";
import servicesData from "../data/servicesData.json";

const mapTitleToServiceType = (title) => {
  if (/automotor|taxi/i.test(title)) return "vehiculo";
  if (/monopatin/i.test(title)) return "monopatin";
  if (/moto/i.test(title)) return "moto";
  if (/bici/i.test(title)) return "bici";
  if (/hogar|comercio/i.test(title)) return "inmueble";
  return null;
};

export const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [serviceType, setServiceType] = useState(null);
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const descriptions = useMemo(() => {
    return servicesData.services.reduce((acc, item) => {
      const key = mapTitleToServiceType(item.title);
      if (key && item.description) {
        acc[key] = item.description;
      }
      return acc;
    }, {});
  }, []);

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
      <section id="our-services" className="section services-section">
        <div className="site-container">
          <div className="section-heading section-heading-left services-heading">
            <div>
              <span className="section-kicker">Coberturas para tu mundo</span>
              <h2>{servicesData.title}</h2>
              <p>{servicesData.intro}</p>
            </div>
            <span className="services-heading-note">Elegí una opción y conocé tu cobertura</span>
          </div>
          <div className="services-grid">
            {servicesData.services.map((d, i) => (
              <ServicesImage
                key={d.title}
                title={d.title}
                smallImage={d.smallImage}
                index={i}
                isActionable={Boolean(mapTitleToServiceType(d.title))}
                onClick={() => openForm(d.title)}
              />
            ))}
          </div>
        </div>
      </section>

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
