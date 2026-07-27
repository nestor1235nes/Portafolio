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
              Soy <strong>Full Stack Developer</strong>, titulado de <strong>Ingeniería Civil en Computación</strong> en la 
              Universidad de Talca.
            </p>
            <p>
              Actualmente trabajo en sistemas ERP con integración al SII: módulos de facturación
              electrónica (DTE) con gestores como Acepta y Tecnoback, manejo de folios CAF, pasarela de
              pagos (Webpay Plus y Fintoc) y software de gestión para servicios sanitarios rurales (APR/SSR).
              Mi stack de trabajo diario es PHP 8.2 con Laravel, Vue 3 con PrimeVue, microservicios en
              Python y MySQL.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <h3>Universidad</h3>
                <p>Universidad de Talca</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <h3>Rol Actual</h3>
                <p>Full Stack Developer - Sistemas ERP / DTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
