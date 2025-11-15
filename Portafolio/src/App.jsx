import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Mostrar guía solo la primera vez (comentar esta línea después de personalizar)
    const hasSeenGuide = localStorage.getItem('hasSeenCustomizationGuide');
    if (!hasSeenGuide) {
      setShowGuide(true);
    }
  }, []);

  const handleCloseGuide = () => {
    setShowGuide(false);
    localStorage.setItem('hasSeenCustomizationGuide', 'true');
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
