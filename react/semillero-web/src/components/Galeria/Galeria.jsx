import React, { useState } from 'react';
import './Galeria.css';
import galeriaData from '../../data/galeria.json';

// Asignar un identificador único automático basado en el orden del arreglo
const fotosProcesadas = galeriaData.map((foto, index) => ({
  ...foto,
  id: index + 1
}));

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fotosProcesadas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === fotosProcesadas.length - 1 ? 0 : prev + 1));
  };

  const itemActual = fotosProcesadas[currentIndex];

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-container">
        <h2 className="section-title">Galería</h2>
        
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Imagen anterior">❮</button>
          
          <div className="carousel-caption">
            <h3>{itemActual.titulo}</h3>
            <div 
              className="carousel-slide" 
              style={{ '--bg-image': `url(${itemActual.url})` }}
            >
              <img src={itemActual.url} alt={itemActual.titulo} />
            </div>
            <p>{itemActual.descripcion}</p>
          </div>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Imagen siguiente">❯</button>
        </div>

        <div className="carousel-dots">
          {fotosProcesadas.map((_, index) => (
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