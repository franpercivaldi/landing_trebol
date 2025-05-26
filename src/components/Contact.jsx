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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY").then(
      (result) => {
        console.log(result.text);
        clearState();
      },
      (error) => {
        console.log(error.text);
      }
    );
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
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
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
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
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
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar Mail
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3 className="contact-info-title">Info del contacto</h3>
            <span className="contact-title">
              <MapPin size={16} />
              <p className="contact-title-text">Dirección</p>
            </span>
            <a href="https://maps.app.goo.gl/wJWjrzzEJ5u9qdkn8" target="_blank" rel="noopener noreferrer">
              {contactData.address}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-title">
              <Phone size={16} />
              <p className="contact-title-text">Celular</p>
            </span>
            <a href="tel:+5493512780483">{contactData.phone}</a>
          </div>
          <div className="contact-item">
            <span className="contact-title">
              <Mail size={16} />
              <p className="contact-title-text">Email</p>
            </span>
            <a href="mailto:eltrebolseguros@gmail.com" target="_blank" rel="noopener noreferrer">
              {contactData.email}
            </a>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <a
                href={contactData.facebook.link}
                aria-label={contactData.facebook.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.facebook.img} alt={contactData.facebook.aria} className="social-icon" />
              </a>
              <a
                href={contactData.instagram.link}
                aria-label={contactData.instagram.aria}
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
    </div>
  );
};
