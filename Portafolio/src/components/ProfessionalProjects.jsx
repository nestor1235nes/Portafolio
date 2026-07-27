import './ProfessionalProjects.css';

// Proyectos desarrollados en Asesora SpA / Gestión Electrónica Limitada.
// Son sistemas internos/privados, por lo que no tienen demo en vivo.
const ProfessionalProjects = () => {
  const projects = [
    {
      title: 'Sistema DTE (Documentos Tributarios Electrónicos)',
      description: 'Integración completa con el SII: manejo de folios CAF, emisión de documentos tributarios electrónicos e integración con los gestores Acepta y Tecnoback.',
      technologies: ['PHP 8.2', 'Laravel', 'Vue 3', 'PrimeVue'],
      icon: '🧾'
    },
    {
      title: 'Pasarela de Pagos',
      description: 'Integración de Webpay Plus y Fintoc para cobros en línea y conciliación de pagos.',
      technologies: ['PHP', 'Laravel', 'Webpay Plus', 'Fintoc'],
      icon: '💳'
    },
    {
      title: 'Fondos Fijos / Fondos por Rendir',
      description: 'Sistema contable con partida doble automática bajo NIIF para PYMES. Monolito con migraciones, vistas, triggers y ERD propio.',
      technologies: ['PHP 8.2', 'MySQL/MariaDB', 'PDO', 'NIIF PYMES'],
      icon: '📊'
    },
    {
      title: 'Gestión de Contratos',
      description: 'Flujo de administración de contratos para clientes, desde la creación hasta su seguimiento.',
      technologies: ['PHP', 'Laravel', 'Vue 3'],
      icon: '📄'
    },
    {
      title: 'Módulo de Facturación (OT 1913)',
      description: 'Conversión UF-CLP y generación de órdenes de facturación recurrente.',
      technologies: ['PHP', 'Laravel', 'Vue 3'],
      icon: '💵'
    },
    {
      title: 'Software para Servicios Sanitarios Rurales (APR/SSR)',
      description: 'Sistema de gestión para cooperativas de agua potable rural, alineado a la normativa chilena vigente.',
      technologies: ['PHP', 'Laravel', 'MySQL/MariaDB'],
      icon: '💧'
    }
  ];

  return (
    <section id="professional-projects" className="professional-projects">
      <div className="container">
        <h2 className="section-title">Proyectos Profesionales</h2>
        <p className="professional-projects-subtitle">
          Sistemas desarrollados en Asesora SpA / Gestión Electrónica Limitada
        </p>
        <div className="professional-projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="professional-project-card">
              <div className="professional-project-image">
                <div className="professional-project-emoji">{project.icon}</div>
              </div>
              <div className="professional-project-content">
                <h3 className="professional-project-title">{project.title}</h3>
                <p className="professional-project-description">{project.description}</p>
                <div className="professional-project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="professional-tech-tag">{tech}</span>
                  ))}
                </div>
                <span className="confidential-badge">Proyecto interno / Confidencial</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjects;
