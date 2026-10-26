import { useEffect, useState } from "react";
import { whatsappLink } from "../content";
import { onScroll } from "../lib/smoothScroll";
import { WhatsAppIcon } from "./icons";

// Shows up once the hero (which already has its own actions) is out of view
export const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => onScroll(() => setVisible(window.scrollY > window.innerHeight * 0.7)), []);

  return (
    <a
      className={`wa-button${visible ? " is-visible" : ""}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      tabIndex={visible ? undefined : -1}
    >
      <WhatsAppIcon width={26} height={26} />
    </a>
  );
};
