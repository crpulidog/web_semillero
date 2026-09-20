import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-container" id="inicio">
      <div className="hero-content">
        <div className="badge-research">
          <span className="highlight-yellow">Semillero de Investigación</span>
        </div>
        
        <h1>
          <span className="text-light">Electron</span>{' '}
          <span className="text-cyan">Volt</span>
        </h1>
        
        <p className="hero-description">
          Impulsamos el futuro de la tecnología desde la academia. 
          Investigamos y desarrollamos soluciones en Robótica Avanzada, 
          Sistemas Embebidos e Inteligencia Artificial.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn-main">Conoce Nuestros Proyectos</a>
          <a href="#contacto" className="btn-secondary">Unirse al Semillero</a>
        </div>
      </div>
      
      {/* Elemento decorativo de fondo (opcional, efecto sutil) */}
      <div className="hero-glow"></div>
    </section>
  );
}