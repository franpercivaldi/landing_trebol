import { Calendar1, Clock, PiggyBank, ShieldPlus } from "lucide-react";

const iconMap = {
  sield: <ShieldPlus size={38} />,
  clock: <Clock size={38} />,
  bank: <PiggyBank size={38} />,
  calendar: <Calendar1 size={38} />,
};

export const Benefits = (props) => {
  return (
    <div id="benefits" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Beneficios</h2>
        </div>
        <div className="row">
          {props.data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-md-3 benefit">
              {" "}
              <div className="icon-container">{iconMap[d.icon]}</div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
