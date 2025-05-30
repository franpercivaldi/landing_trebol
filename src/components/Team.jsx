import teamData from "../data/teamData.json";
import { Col, Row } from "antd";
import { Clock, ShieldCheck, UserRound, Users } from "lucide-react";

const iconMap = {
  ShieldCheck: <ShieldCheck size={64} color="#d745df" />,
  Users: <Users size={64} color="#d745df" />,
  Clock: <Clock size={64} color="#d745df" />,
  UserRound: <UserRound size={64} color="#d745df" />,
};

function boldSubstring(text, substring) {
  const parts = text.split(substring);
  return parts.reduce((acc, part, idx) => {
    if (idx === 0) return [part];
    return [...acc, <b key={idx}>{substring}</b>, part];
  }, []);
}

export const Team = () => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{teamData.title}</h2>
          <p>{boldSubstring(teamData.intro, "15 años de experiencia")}</p>
        </div>
        <Row gutter={[16, 16]}>
          {teamData.features.map((f, i) => (
            <Col key={i} xs={24} sm={12} md={6} className="team-feature">
              <div className="feature-icon" style={{ marginBottom: "12px" }}>
                {iconMap[f.icon]}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p>{f.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
