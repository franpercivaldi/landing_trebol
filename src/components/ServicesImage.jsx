import { ArrowUpRight, FileCheck2 } from "lucide-react";

export const ServicesImage = ({ title, smallImage, index, isActionable, onClick }) => {
  const content = (
    <>
      <div className="service-image-wrap">
        <img src={smallImage.startsWith("/") ? smallImage : `/${smallImage}`} alt={title} />
        <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="service-image-shade" aria-hidden="true" />
      </div>
      <div className="service-card-content">
        <div>
          <span className="service-card-kicker">
            <FileCheck2 size={14} />
            Cobertura
          </span>
          <h3>{title}</h3>
        </div>
        <span className="service-card-arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </div>
    </>
  );

  if (isActionable) {
    return (
      <button type="button" className="service-card service-card-actionable" onClick={onClick} aria-label={`Solicitar cotización de ${title}`}>
        {content}
      </button>
    );
  }

  return <article className="service-card">{content}</article>;
};
