import './CustomizationGuide.css';

const CustomizationGuide = ({ onClose }) => {
  return (
    <div className="customization-guide">
      <div className="guide-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>🎨 Guía de Personalización</h2>
        <p className="guide-intro">
          ¡Tu portafolio está listo! Ahora personalízalo con tu información:
        </p>
        
        <div className="guide-steps">
          <div className="guide-step">
            <span className="step-number">1</span>
            <div>
              <h3>Hero Section</h3>
              <p>Edita <code>src/components/Hero.jsx</code> - Cambia tu nombre y descripción</p>
            </div>
          </div>

          <div className="guide-step">
            <span className="step-number">2</span>
            <div>
              <h3>Sobre Mí</h3>
              <p>Edita <code>src/components/About.jsx</code> - Actualiza tu información personal</p>
            </div>
          </div>

          <div className="guide-step">
            <span className="step-number">3</span>
            <div>
              <h3>Habilidades</h3>
              <p>Edita <code>src/components/Skills.jsx</code> - Ajusta tecnologías y niveles</p>
            </div>
          </div>

          <div className="guide-step">
            <span className="step-number">4</span>
            <div>
              <h3>Proyectos</h3>
              <p>Edita <code>src/components/Projects.jsx</code> - Agrega tus proyectos reales</p>
            </div>
          </div>

          <div className="guide-step">
            <span className="step-number">5</span>
            <div>
              <h3>Experiencia</h3>
              <p>Edita <code>src/components/Experience.jsx</code> - Actualiza educación y trabajo</p>
            </div>
          </div>

          <div className="guide-step">
            <span className="step-number">6</span>
            <div>
              <h3>Contacto</h3>
              <p>Edita <code>src/components/Contact.jsx</code> - Cambia redes sociales y email</p>
            </div>
          </div>
        </div>

        <div className="guide-footer">
          <p>📖 Lee <code>PERSONALIZAR.md</code> para instrucciones detalladas</p>
          <button className="btn btn-primary" onClick={onClose}>
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationGuide;
