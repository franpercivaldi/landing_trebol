import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../content";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" id="preguntas" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <h2 id="faq-title" className="section-title">
          Preguntas frecuentes
        </h2>

        <div className="faq__list">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {item.q}
                    <Plus className="faq__plus" size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-${i}`} className="faq__answer" inert={isOpen ? undefined : ""}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
