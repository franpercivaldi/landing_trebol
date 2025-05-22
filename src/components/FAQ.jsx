import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import landingPageData from "../data/data.json";

export default function FAQ() {
  const faqData = landingPageData.FAQ;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Preguntas frecuentes</h2>
          <p>Respondemos las dudas más comunes sobre nuestros servicios y coberturas.</p>
        </div>
        <div className="faq-list">
          {faqData.map((item, idx) => (
            <div key={idx} className={`faq-item${openIndex === idx ? "-open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {item.question}
                {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
              </button>
              <div id={`faq-answer-${idx}`} className="faq-answer" style={{ display: openIndex === idx ? "block" : "none" }}>
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
