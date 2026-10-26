import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Check, LoaderCircle, X } from "lucide-react";
import { services, whatsappLink } from "../content";
import { sendQuote } from "../lib/email";
import { lockScroll } from "../lib/smoothScroll";
import { ServiceIcon } from "./icons";

const QuoteContext = createContext({ openQuote: () => {} });
export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider = ({ children }) => {
  const [serviceId, setServiceId] = useState(null);
  const openQuote = useCallback((id) => setServiceId(id), []);
  const close = useCallback(() => setServiceId(null), []);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <QuoteDrawer serviceId={serviceId} onClose={close} />
    </QuoteContext.Provider>
  );
};

const Field = ({ field }) => {
  const id = `quote-${field.name}`;
  const label = (
    <label htmlFor={id}>
      {field.label}
      {!field.required && <span className="field__optional"> (opcional)</span>}
    </label>
  );

  if (field.type === "yesno") {
    return (
      <fieldset className="field field--choice">
        <legend>{field.label}</legend>
        <div className="segmented">
          {["Sí", "No"].map((opt) => (
            <label key={opt}>
              <input type="radio" name={field.name} value={opt} required={field.required} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <div className={`field${field.type === "textarea" ? " field--wide" : ""}`}>
      {label}
      {field.type === "textarea" ? (
        <textarea id={id} name={field.name} rows={4} required={field.required} />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          inputMode={field.inputMode}
          autoComplete={field.autoComplete || "off"}
          required={field.required}
          min={field.type === "number" ? 0 : undefined}
        />
      )}
    </div>
  );
};

const QuoteDrawer = ({ serviceId, onClose }) => {
  const service = services.find((s) => s.id === serviceId);
  // Keep the last service around while the drawer animates out
  const [shown, setShown] = useState(service);
  const [status, setStatus] = useState("idle");
  const panelRef = useRef(null);
  const returnFocus = useRef(null);
  const isOpen = Boolean(service);

  useEffect(() => {
    if (service) {
      setShown(service);
      setStatus("idle");
      returnFocus.current = document.activeElement;
    }
  }, [service]);

  useEffect(() => {
    lockScroll(isOpen);
    if (!isOpen) {
      returnFocus.current?.focus?.();
      return;
    }
    const t = setTimeout(() => (panelRef.current?.querySelector("input") || panelRef.current?.querySelector("button"))?.focus(), 80);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      // Keep keyboard focus inside the drawer
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll("a, button, input, textarea");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    if (values.gnc) values.gnc = values.gnc === "Sí";
    setStatus("sending");
    sendQuote(shown.id, { ...values, servicio: shown.title })
      .then(() => setStatus("sent"))
      .catch(() => setStatus("error"));
  };

  return (
    <div className={`drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
      <div className="drawer__backdrop" onClick={onClose} />
      <aside
        className="drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        ref={panelRef}
        data-lenis-prevent
        inert={isOpen ? undefined : ""}
      >
        {shown && (
          <>
            <div className="drawer__head">
              <span className="drawer__icon">
                <ServiceIcon name={shown.icon} size={22} />
              </span>
              <h2 id="drawer-title" className="drawer__title">
                Cotizar {shown.title.toLowerCase()}
              </h2>
              <button type="button" className="drawer__close" onClick={onClose} aria-label="Cerrar">
                <X size={22} />
              </button>
            </div>

            {status === "sent" ? (
              <div className="drawer__done" role="status">
                <span className="drawer__done-icon">
                  <Check size={28} />
                </span>
                <h3>Recibimos tu pedido</h3>
                <p>Un asesor te va a contactar al teléfono que dejaste, normalmente dentro del mismo día hábil.</p>
                <button type="button" className="btn btn--outline" onClick={onClose}>
                  Volver a la página
                </button>
              </div>
            ) : (
              <form key={shown.id} className="drawer__form" onSubmit={handleSubmit}>
                <p className="drawer__intro">
                  Completá estos datos y te enviamos las opciones. Sin compromiso.
                </p>
                <div className="fields">
                  {shown.fields.map((f) => (
                    <Field key={f.name} field={f} />
                  ))}
                </div>

                {status === "error" && (
                  <p className="form-error" role="alert">
                    No se pudo enviar el pedido. Revisá tu conexión e intentá de nuevo, o{" "}
                    <a href={whatsappLink(`Hola, quiero cotizar un ${shown.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                      escribinos por WhatsApp
                    </a>
                    .
                  </p>
                )}

                <div className="drawer__actions">
                  <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <LoaderCircle className="spin" size={18} aria-hidden="true" /> Enviando…
                      </>
                    ) : (
                      "Pedir cotización"
                    )}
                  </button>
                  <a
                    className="text-link drawer__alt"
                    href={whatsappLink(`Hola, quiero cotizar un ${shown.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prefiero hacerlo por WhatsApp
                  </a>
                </div>
              </form>
            )}
          </>
        )}
      </aside>
    </div>
  );
};
