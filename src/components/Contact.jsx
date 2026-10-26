import { useState } from "react";
import { LoaderCircle, Mail, Phone } from "lucide-react";
import { contact, services, whatsappLink } from "../content";
import { sendContact } from "../lib/email";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    sendContact(Object.fromEntries(new FormData(form)))
      .then(() => {
        form.reset();
        setStatus("sent");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <h2 id="contact-title" className="contact__title">
            Hablemos de tu seguro
          </h2>
          <p className="contact__lead">
            Dejanos tu consulta y te respondemos a la brevedad. Si es urgente, escribinos directo por WhatsApp.
          </p>

          <ul className="channels">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon width={20} height={20} />
                <span>
                  WhatsApp
                  <small>{contact.phones[0].label}</small>
                </span>
              </a>
            </li>
            <li>
              <a href={contact.phones[1].href}>
                <Phone size={20} aria-hidden="true" />
                <span>
                  Teléfono
                  <small>{contact.phones[1].label}</small>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>
                <Mail size={20} aria-hidden="true" />
                <span>
                  Email
                  <small>{contact.email}</small>
                </span>
              </a>
            </li>
          </ul>

          <div className="socials">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de El Trébol">
              <InstagramIcon width={20} height={20} />
            </a>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de El Trébol">
              <FacebookIcon width={20} height={20} />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="contact-name">Nombre</label>
              <input id="contact-name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="contact-phone">
                Teléfono <span className="field__optional">(opcional)</span>
              </label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field field--wide">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field field--wide">
              <label htmlFor="contact-topic">¿Sobre qué es tu consulta?</label>
              <select id="contact-topic" name="topic" defaultValue="">
                <option value="">Consulta general</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Siniestro">Tengo un siniestro</option>
              </select>
            </div>
            <div className="field field--wide">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea id="contact-message" name="message" rows={4} required />
            </div>
          </div>

          {status === "sent" && (
            <p className="form-success" role="status">
              Mensaje enviado. Te respondemos por email o por teléfono.
            </p>
          )}
          {status === "error" && (
            <p className="form-error" role="alert">
              No se pudo enviar el mensaje. Intentá de nuevo o escribinos a {contact.email}.
            </p>
          )}

          <button type="submit" className="btn btn--light" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <LoaderCircle className="spin" size={18} aria-hidden="true" /> Enviando…
              </>
            ) : (
              "Enviar consulta"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
