import React, { useState } from 'react';
import { ServicesImage } from './ServicesImage';
import QuoteForm from './QuoteForm';

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
    if (!type) {
      // TODO: mostrar mensaje? Martin seguramente lo quiera que no haga nada
      return;
    }
    setServiceType(type);
    setModalOpen(true);
  };

  const handleSubmit = formData => {
    console.log('Datos enviados:', formData);
    // TODO: ver que usar para mandar los mails
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
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};
