import { useState } from 'react';
import VideoModal from './VideoModal';
import ImageModal from './ImageModal';
import vitalink from '../../public/VITALINK.png';
import foodbreak from '../../public/FOODBREAK.png';
import login from '../../public/login.png';
import alphastore from '../../public/alphastore.png';
import './Projects.css';

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      title: 'VITALINK - Sistema de Gestión de Salud',
      description: 'Plataforma integral para la gestión de agendas médicas con sistema de reservas en línea, historial clínico electrónico y gestión de pacientes. Desarrollado con React, Node.js y MongoDB.',
      demoLink: 'https://agendavitalink.vercel.app/front-users',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: vitalink,
      videoSrc: '/VITALINK_promocional.mp4',
      github: 'https://github.com/nestor1235nes',
      demo: 'https://agendavitalink.vercel.app/front-users',
      hasVideo: true,
      featured: true
    },
    {
      title: 'FOOD BREAK - Sistema Servicio de Alimentos',
      description: 'Plataforma completa para la gestión de servicios de alimentación con pedidos en línea, gestión de menús, control de inventario y administración de clientes. ',
      demoLink: 'https://servicio-alimentos.vercel.app/login',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: foodbreak,
      github: 'https://github.com/nestor1235nes',
      demo: 'https://servicio-alimentos.vercel.app/login',
      hasImage: true
    },
    {
      title: 'AlphaStore - Sistema de Gestión de Inventarios y Ventas',
      description: 'Sistema de gestión de inventarios y ventas para pequeñas y medianas empresas, con funcionalidades como control de stock y reportes de ventas.',
      demoLink: 'https://alpha-store-indol.vercel.app/salepoint',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: login,
      hoverImage: alphastore,
      github: 'https://github.com/nestor1235nes',
      demo: 'https://alpha-store-indol.vercel.app/salepoint',
      hasImage: true,
      hasHoverImage: true
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="projects-subtitle">
          Algunos de los proyectos en los que he trabajado
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onMouseEnter={() => (project.hasVideo || project.hasHoverImage) && setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && <div className="featured-badge">⭐ Proyecto Destacado</div>}
              <div 
                className="project-image"
                onClick={() => project.hasVideo && setShowVideo(true)}
                style={{ cursor: project.hasVideo ? 'pointer' : 'default' }}
              >
                {project.hasVideo ? (
                  <>
                    {hoveredProject === index ? (
                      <video 
                        className="project-video-preview"
                        src={project.videoSrc}
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-img"
                      />
                    )}
                    {hoveredProject === index && (
                      <div className="video-play-indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <p>Click para ver video completo</p>
                      </div>
                    )}
                  </>
                ) : project.hasImage ? (
                  <>
                    <img 
                      src={hoveredProject === index && project.hasHoverImage ? project.hoverImage : project.image} 
                      alt={project.title}
                      className="project-img clickable-image"
                      onClick={() => setActiveImage({ src: hoveredProject === index && project.hasHoverImage ? project.hoverImage : project.image, title: project.title })}
                      style={{ cursor: 'pointer' }}
                    />
                  </>
                ) : (
                  <div className="project-emoji">{project.image}</div>
                )}
                {!project.hasVideo && !project.hasImage && (
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      {project.demo !== '#' && (
                        <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer" title="Demo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                  {project.demoLink && (
                    <>
                      {' '}
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo-link-inline"
                      >
                        Ver demo en vivo →
                      </a>
                    </>
                  )}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showVideo && (
        <VideoModal 
          videoSrc="/VITALINK_promocional.mp4" 
          onClose={() => setShowVideo(false)} 
        />
      )}
      {activeImage && (
        <ImageModal 
          imageSrc={activeImage.src}
          title={activeImage.title}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
};

export default Projects;
