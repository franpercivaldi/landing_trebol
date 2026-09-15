import faqData from "../data/faqData.json";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="site-container faq-container">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">¿Tenés dudas?</span>
          <h2>{faqData.title}</h2>
          <p>{faqData.intro}</p>
        </div>
        <div className="faq-list">
          {faqData.faq.map((item, idx) => (
            <div key={idx} className={`faq-item${openIndex === idx ? " is-open" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className="faq-answer"
                aria-labelledby={`faq-question-${idx}`}
                hidden={openIndex !== idx}
              >
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
