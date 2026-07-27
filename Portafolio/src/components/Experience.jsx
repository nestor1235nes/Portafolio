import './Experience.css';

const Experience = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Asesora SpA / Gestión Electrónica Limitada, Curicó',
      period: '2025 - Presente',
      description: 'Pasé de practicante a contratado. Desarrollo y mantención de sistemas ERP con integración al SII, dentro de un stack PHP 8.2 + Laravel, Vue 3 + PrimeVue, microservicios en Python y MySQL.',
      achievements: [
        'Módulos de facturación electrónica (DTE) integrados con el SII: folios CAF y gestores Acepta/Tecnoback',
        'Integración de pasarela de pagos con Webpay Plus y Fintoc',
        'Gestión de Fondos Fijos y Fondos por Rendir dentro del ERP',
        'Software de gestión para servicios sanitarios rurales (APR/SSR)'
      ]
    },
    {
      type: 'work',
      title: 'Desarrollador Full-Stack',
      organization: 'Proyectos Personales',
      period: '2024 - Presente',
      description: 'Desarrollo de proyectos propios con stack MERN, en paralelo al trabajo profesional.',
      achievements: [
        'Agenda VITALINK: plataforma de gestión médica, con funcionalidades como telemedicina con inbox centralizado de WhatsApp y pagos vía Webpay',
        'Desarrolo de la arquitectura completa, tanto del modelamiento como de las integraciones API REST externas.',
        'Plataforma multi-rol, con JWT para autenticación y seguridad en esta.',
        'Desplegada en Google Cloud Run.'
      ]
    },
    {
      type: 'education',
      title: 'Ingeniería Civil en Computación',
      organization: 'Universidad de Talca',
      period: 'Titulado 2025',
      description: 'Formación integral en desarrollo de software, estructuras de datos, algoritmos, bases de datos, ingeniería de software y arquitectura de sistemas.',
      achievements: [
        'Especialización en desarrollo web full-stack',
        'Participación en proyectos de investigación y desarrollo'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia & Educación</h2>
        <p className="experience-subtitle">
          Mi trayectoria académica y profesional
        </p>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {item.type === 'education' ? '🎓' : '💼'}
                </div>
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-organization">{item.organization}</h4>
                <p className="timeline-description">{item.description}</p>
                {item.achievements && (
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
