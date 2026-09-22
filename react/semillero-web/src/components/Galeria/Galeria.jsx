import React, { useState } from 'react';
import './Galeria.css';

// Estructura de datos flexible que simula los elementos de una carpeta remota
const fotosData = [
  {
    id: 1,
    url: '/photos/equipo.jpeg', 
    titulo: 'BotRush 2026',
    descripcion: 'Competencia.'
  },
  {
    id: 2,
    url: '/photos/competencia.jpeg', 
    titulo: 'BotRush 2026',
    descripcion: 'Competencia.'
  },
  {
    id: 3,
    url: '/photos/participantes.jpeg', 
    titulo: 'BotRush 2026',
    descripcion: 'Competencia.'
  },
  {
    id: 4,
    url: '/photos/girls.jpeg', 
    titulo: 'BotRush 2026',
    descripcion: 'Competencia.'
  },
  {
    id: 5,
    url: '/photos/win.jpeg', 
    titulo: 'BotRush 2026',
    descripcion: 'Competencia.'
  },
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fotosData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === fotosData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-container">
        <h2 className="section-title">Galería de Proyectos</h2>
        
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Imagen anterior">❮</button>
          
          <div className="carousel-caption">
            <h3>{fotosData[currentIndex].titulo}</h3>
            <div 
              className="carousel-slide" 
              style={{ '--bg-image': `url(${fotosData[currentIndex].url})` }}
            >
              <img src={fotosData[currentIndex].url} alt={fotosData[currentIndex].titulo} />
            </div>
            <p>{fotosData[currentIndex].descripcion}</p>
          </div>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Imagen siguiente">❯</button>
        </div>

        <div className="carousel-dots">
          {fotosData.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}