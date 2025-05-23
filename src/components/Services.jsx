// src/components/Services.jsx
import React, { useState } from 'react';
import { ServicesImage } from './ServicesImage';
import QuoteForm from './QuoteForm';
import emailjs from '@emailjs/browser';

export const Services = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [serviceType, setServiceType] = useState(null);

  const mapTitleToServiceType = title => {
    if (/automotor|taxi|monopatin/i.test(title)) return 'vehiculo';
    if (/moto/i.test(title)) return 'moto';
    if (/bici/i.test(title)) return 'bici';
    if (/hogar|comercio/i.test(title)) return 'inmueble';
    return null;
  };

  const openForm = title => {
    const type = mapTitleToServiceType(title);
    if (!type) return;
    setServiceType(type);
    setModalOpen(true);
  };

  const handleSubmit = formData => {
    const serviceID  = 'service_1gmj93f';    // tu Service ID
    const templateID = 'template_shrjv2r';   // tu Template ID
    const publicKey  = 's1LOgESb2pc8GBKYr';  // tu Public Key

    const templateParams = {
      serviceType,
      ...formData,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Tu solicitud de cotización ha sido enviada correctamente.');
      })
      .catch(err => {
        console.error('Error al enviar cotización:', err);
        alert('Hubo un error al enviar tu solicitud. ¡Intenta de nuevo más tarde!');
      });
  };

  return (
    <>
      <div id="our-services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros servicios</h2>
            <p>Conocé todos los seguros que tenemos para vos.</p>
          </div>
          <div className="row">
            <div className="our-services-items">
              {data.map(d => (
                <div
                  key={d.title}
                  className="col-sm-6 col-md-4 col-lg-4 cursor-pointer"
                  onClick={() => openForm(d.title)}
                >
                  <ServicesImage
                    title={d.title}
                    smallImage={d.smallImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteForm
        visible={modalOpen}
        serviceType={serviceType}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};
