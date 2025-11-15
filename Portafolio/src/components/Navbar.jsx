import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">NR</span>
          <span className="logo-bracket">{'/>'}</span>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('about')}>Sobre Mí</li>
          <li onClick={() => scrollToSection('skills')}>Habilidades</li>
          <li onClick={() => scrollToSection('projects')}>Proyectos</li>
          <li onClick={() => scrollToSection('experience')}>Experiencia</li>
          <li onClick={() => scrollToSection('contact')}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
