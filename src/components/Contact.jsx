import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import contactData from "../data/contactData.json";

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
    <section id="contact" className="contact-section">
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="site-container contact-grid">
        <div className="contact-form-card">
          <div className="section-heading section-heading-left section-heading-in-card">
            <span className="section-kicker">Hablemos</span>
            <h2>{contactData.title}</h2>
            <p>{contactData.intro}</p>
          </div>
          <form name="sentMessage" className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-fields">
              <label className="form-field">
                <span>Nombre</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder={contactData.form.namePlaceholder}
                  required
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder={contactData.form.emailPlaceholder}
                  required
                  value={email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className="form-field">
              <span>Mensaje</span>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder={contactData.form.messagePlaceholder}
                required
                value={message}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-primary contact-submit">
              <span>{contactData.form.button}</span>
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>

        <aside className="contact-info-card">
          <div className="contact-info-intro">
            <span className="contact-card-kicker">Atención personalizada</span>
            <h3>{contactData.infoTitle}</h3>
            <p>Encontranos, escribinos o llamanos. Estamos para ayudarte.</p>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon"><MapPin size={17} /></span>
              <div>
                <span className="contact-detail-label">{contactData.addressLabel1}</span>
                <a href="https://maps.app.goo.gl/wJWjrzzEJ5u9qdkn8" target="_blank" rel="noopener noreferrer">
                  {contactData.address}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><MapPin size={17} /></span>
              <div>
                <span className="contact-detail-label">{contactData.addressLabel2}</span>
                <a href="https://maps.app.goo.gl/jxygBNgfpXHBd6Gp9" target="_blank" rel="noopener noreferrer">
                  {contactData.secondaryAddress}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><Phone size={17} /></span>
              <div>
                <span className="contact-detail-label">{contactData.phoneLabel1}</span>
                <a href="tel:+5493512780483">{contactData.phone}</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><Phone size={17} /></span>
              <div>
                <span className="contact-detail-label">{contactData.phoneLabel2}</span>
                <a href="tel:+5493515392047">{contactData.secondaryPhone}</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><Mail size={17} /></span>
              <div>
                <span className="contact-detail-label">{contactData.emailLabel}</span>
                <a href={`mailto:${contactData.email}`} target="_blank" rel="noopener noreferrer">
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>

          <div className="social-block">
            <span>Seguinos en redes</span>
            <div className="social-links">
              <a
                href={contactData.facebook.link}
                aria-label={contactData.facebook.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.facebook.img} alt="" className="social-icon" />
              </a>
              <a
                href={contactData.instagram.link}
                aria-label={contactData.instagram.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.instagram.img} alt="" className="social-icon" />
              </a>
              <a
                href={contactData.whatsapp.link}
                aria-label={contactData.whatsapp.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contactData.whatsapp.img} alt="" className="social-icon" />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <a href="https://wa.me/543512780483" target="_blank" rel="noopener noreferrer" className="whatsapp-floating-button" aria-label={contactData.floatingButton.aria}>
        <img src={contactData.floatingButton.img} alt="" />
        <span>¿Hablamos?</span>
      </a>
    </section>
  );
};
