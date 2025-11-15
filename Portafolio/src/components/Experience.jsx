import './Experience.css';

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Ingeniería Civil en Computación',
      organization: 'Universidad de Tarapacá',
      period: '2018 - 2024',
      description: 'Formación integral en desarrollo de software, estructuras de datos, algoritmos, bases de datos, ingeniería de software y arquitectura de sistemas.',
      achievements: [
        'Especialización en desarrollo web full-stack',
        'Proyecto de título enfocado en soluciones de salud digital',
        'Participación en proyectos de investigación y desarrollo'
      ]
    },
    {
      type: 'work',
      title: 'Desarrollador Full-Stack',
      organization: 'Proyectos Freelance',
      period: '2023 - Presente',
      description: 'Desarrollo de aplicaciones web personalizadas para diversos clientes, enfocado en soluciones escalables y eficientes.',
      achievements: [
        'Desarrollo de VitaLink - Sistema de gestión de salud',
        'Implementación de arquitecturas modernas con React y Node.js',
        'Integración de APIs y servicios en la nube'
      ]
    },
    {
      type: 'work',
      title: 'Desarrollador de Software',
      organization: 'Proyectos Académicos',
      period: '2021 - 2023',
      description: 'Participación en múltiples proyectos académicos desarrollando habilidades en trabajo en equipo y metodologías ágiles.',
      achievements: [
        'Desarrollo de sistemas de gestión empresarial',
        'Implementación de soluciones con metodologías ágiles',
        'Colaboración en equipos multidisciplinarios'
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
