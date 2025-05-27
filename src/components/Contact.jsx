import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import landingPageData from "../data/data.json";
const { Contact: contactData } = landingPageData;

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  // Get EmailJS config from environment variables
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        clearState();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <div className="container container-block">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Contactanos.</h2>
              <p>Por favor completá el siguiente formulario para enviarnos un mensaje. Te responderemos lo antes posible.</p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Nombre"
                      required
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensaje"
                  required
                  value={message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-custom btn-lg">
                Enviar Mail
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3 className="contact-info-title">Info del contacto</h3>
          </div>

          <div className="contact-item">
            <span className="contact-title">
              <MapPin size={16} />
              <p className="contact-title-text">Dirección Sucursal 1</p>
            </span>
            <a href="https://maps.app.goo.gl/wJWjrzzEJ5u9qdkn8" target="_blank" rel="noopener noreferrer">
              {contactData.address}
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-title">
              <MapPin size={16} />
              <p className="contact-title-text">Dirección Sucursal 2</p>
            </span>
            <a href="https://maps.app.goo.gl/jxygBNgfpXHBd6Gp9" target="_blank" rel="noopener noreferrer">
              {contactData.secondaryAddress}
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-title">
              <Phone size={16} />
              <p className="contact-title-text">Número de Teléfono 1</p>
            </span>
            <a href="tel:+5493512780483">{contactData.phone}</a>
          </div>

          <div className="contact-item">
            <span className="contact-title">
              <Phone size={16} />
              <p className="contact-title-text">Número de Teléfono 2</p>
            </span>
            <a href="tel:+5493515392047">{contactData.secondaryPhone}</a>
          </div>

          <div className="contact-item">
            <span className="contact-title">
              <Mail size={16} />
              <p className="contact-title-text">Email</p>
            </span>
            <a href={`mailto:${contactData.email}`} target="_blank" rel="noopener noreferrer">
              {contactData.email}
            </a>
          </div>

          <div className="col-md-12">
            <div className="row social">
              <a
                href={contactData.facebook.link}
                aria-label={contactData.facebook.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.facebook.img} alt={contactData.facebook.aria} className="social-icon" />
              </a>
              <a
                href={contactData.facebook.link}
                aria-label={contactData.facebook.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.instagram.img} alt={contactData.instagram.aria} className="social-icon" />
              </a>
              <a
                href={contactData.whatsapp.link}
                aria-label={contactData.whatsapp.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.whatsapp.img} alt={contactData.whatsapp.aria} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/543512780483"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          width: "80px",
          height: "80px",
          bottom: "40px",
          right: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          zIndex: 1000,
        }}
      >
        <img
          src={contactData.whatsapp.img}
          alt={contactData.whatsapp.aria}
          style={{
            width: "32px",
            height: "32px",
            filter: "invert(22%) sepia(85%) saturate(500%) hue-rotate(256deg) brightness(92%) contrast(91%)",
          }}
        />
      </a>
    </div>
  );
};
