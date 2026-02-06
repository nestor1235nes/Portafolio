import './About.css';
import perfil from '../../public/perfil.jpg';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={perfil} alt="Néstor Ramírez" className="profile-img" />
            </div>
          </div>
          <div className="about-text">
            <p className="about-intro">
              Soy egresado de <strong>Ingeniería Civil en Computación</strong> de la Universidad de Talca, 
              con experiencia en desarrollo de software y pasión por crear soluciones tecnológicas innovadoras.
            </p>
            <p>
              Mi experiencia abarca desde el desarrollo de aplicaciones web full-stack hasta la integración 
              de sistemas y automatización de procesos. He trabajado con tecnologías modernas como React, Node.js, 
              Python y bases de datos SQL/NoSQL, creando soluciones escalables y eficientes.
            </p>
            <p>
              Me destaco por mi capacidad de aprendizaje autodidacta, trabajo en equipo y comunicación. 
              Busco constantemente nuevos desafíos que me permitan aplicar mis conocimientos técnicos y contribuir 
              al desarrollo de productos que generen un impacto positivo en la sociedad.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <h3>Universidad</h3>
                <p>Universidad de Talca</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <h3>Especialidad</h3>
                <p>Desarrollo web Full-Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
