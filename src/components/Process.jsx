import { steps } from "../content";

export const Process = () => (
  <section className="section process" id="como-trabajamos" aria-labelledby="process-title">
    <div className="container">
      <div className="process__head">
        <h2 id="process-title" className="section-title">
          Cómo trabajamos
        </h2>
        <p className="section-lead">
          Un productor asesor está de tu lado, no del de la compañía. Así es el recorrido, desde la primera consulta
          hasta el día que necesitás usar el seguro.
        </p>
      </div>

      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title} className="step">
            <span className="step__number" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="step__title">{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
