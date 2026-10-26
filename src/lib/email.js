import emailjs from "@emailjs/browser";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

// Quote requests keep the same parameter names the EmailJS template already uses
export const sendQuote = (serviceType, values) =>
  emailjs.send(serviceID, templateID, { serviceType, ...values }, publicKey);

// The contact template reads name, email and message
export const sendContact = ({ name, email, phone, topic, message }) => {
  const extra = [phone && `Teléfono: ${phone}`, topic && `Consulta sobre: ${topic}`].filter(Boolean).join("\n");
  return emailjs.send(
    serviceID,
    templateID,
    { name, email, message: extra ? `${extra}\n\n${message}` : message },
    publicKey
  );
};
