import React from 'react';
import { Row, Col } from 'antd';
import { SafetyOutlined, TeamOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

export const Team = () => {
  const features = [
    {
      icon: <SafetyOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Profesionales capacitados',
      description:
        'Nos mantenemos actualizados para ofrecerte las mejores coberturas del mercado, trabajando con las aseguradoras más confiables.',
    },
    {
      icon: <TeamOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Cercanía y compromiso',
      description:
        'Escuchamos tus necesidades y te acompañamos en cada paso, desde la elección de tu póliza hasta la gestión de siniestros.',
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Atención 24/7',
      description:
        'Estamos siempre disponibles para resolver tus dudas y garantizar tu tranquilidad, cuando más lo necesitás.',
    },
    {
      icon: <UserOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Enfoque en vos',
      description:
        'Cada cliente es único, y nuestro equipo se dedica a diseñar soluciones que se adapten a tu hogar, negocio o familia.',
    },
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nuestro equipo</h2>
          <p>
            En El Trébol Organización, nuestro equipo es el corazón de nuestra misión: proteger lo que más valorás. Con{' '}
            <b>15 años de experiencia</b> en el mercado argentino, somos productores asesores de seguros apasionados por brindarte soluciones integrales y personalizadas.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {features.map((f, i) => (
            <Col key={i} xs={24} sm={12} md={6} className="team-feature">
              <div className="feature-icon" style={{ marginBottom: '12px' }}>
                {f.icon}
              </div>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
