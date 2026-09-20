import React, { useState, useEffect, useRef } from 'react';
import './Integrantes.css';

export default function Integrantes() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const lineasInvestigacion = [
    {
      titulo: "Gestión, Innovación y Desarrollo de la Ciencia y Tecnología de Alimentos",
      descripcion: "Investigación en procesos de producción, conservación y control de calidad de alimentos mediante técnicas avanzadas."
    },
    {
      titulo: "Diseño Tecnológico Centrado en la Experiencia de Usuario",
      descripcion: "Desarrollo de interfaces y sistemas interactivos que optimicen la experiencia del usuario en aplicaciones tecnológicas."
    },
    {
      titulo: "Contenidos y Aplicaciones Inmersivas e Interactivas para el Fortalecimiento de la Gestión e Innovación Educativa",
      descripcion: "Creación de entornos virtuales y aplicaciones interactivas que potencien la enseñanza y el aprendizaje mediante tecnologías inmersivas."
    },
    {
      titulo: "Electrónica, Automatización y Robótica",
      descripcion: "Investigación y desarrollo en electrónica, automatización y robótica para soluciones tecnológicas innovadoras."
    },
    {
      titulo: "Infraestructura Tecnológica y Transformación Digital Inteligente",
      descripcion: "Implementación de soluciones de infraestructura tecnológica y estrategias de transformación digital para optimizar procesos y servicios."
    },
    {
      titulo: "Energías y Desarrollo Sostenible",
      descripcion: "Investigación en energías renovables y sostenibilidad para promover prácticas responsables y eficientes en el uso de recursos."
    }
  ];

  const integrantesList = [
    {
      nombre: "Carolina Rosa Pulido Gómez",
      rol: "Estudiante Investigadora",
      programa: "Ingeniería Electrónica - UNAD",
      area: "Sistemas Embebidos y Robótica"
    },
    {
      nombre: "Carolina Rosa Pulido Gómez",
      rol: "Estudiante Investigadora",
      programa: "Ingeniería Electrónica - UNAD",
      area: "Sistemas Embebidos y Robótica"
    },
    {
      nombre: "Carolina Rosa Pulido Gómez",
      rol: "Estudiante Investigadora",
      programa: "Ingeniería Electrónica - UNAD",
      area: "Sistemas Embebidos y Robótica"
    },
  ];

  // Observer para activar tarjetas en móviles al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) return; // Solo para pantallas móviles/medianas
      
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        // Si la tarjeta está cerca del centro de la pantalla
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="integrantes-container" id="integrantes">
      <div className="integrantes-content">
        <div className="section-header">
          <span className="section-tag">Capital Humano y Enfoque</span>
          <h2>Integrantes y Líneas de Investigación</h2>
          <p className="integrantes-subtitulo">
            Conoce el equipo de trabajo que impulsa los proyectos tecnológicos y las áreas estratégicas de desarrollo en el semillero.
          </p>
        </div>

        <div className="bloque-seccion">
          <h3 className="titulo-seccion">Equipo de Trabajo</h3>
          <div className="integrantes-grid">
            {integrantesList.map((integrante, index) => (
              <div className="integrante-card" key={index}>
                <div className="integrante-avatar">⚡</div>
                <h4>{integrante.nombre}</h4>
                <p className="integrante-rol">{integrante.rol}</p>
                <p className="integrante-programa">{integrante.programa}</p>
                <span className="integrante-area">{integrante.area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lineas-section">
          <h3>Líneas de Investigación</h3>
          <p className="integrantes-subtitulo" style={{ marginBottom: '30px', fontSize: '0.95rem' }}>
            Desliza o pasa el cursor sobre los números para desplegar la información de cada línea.
          </p>
          <div className="lineas-grid">
            {lineasInvestigacion.map((linea, index) => (
              <div 
                className={`linea-card-interactive ${activeIndex === index ? 'mobile-active' : ''}`} 
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                tabIndex="0"
              >
                <div className="linea-badge-num">0{index + 1}</div>
                <div className="linea-content-hidden">
                  <h4>{linea.titulo}</h4>
                  <p>{linea.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}