import React from 'react';
import './Participaciones.css';

export default function Participaciones() {
  const participacionesList = [
    {
      id: 1,
      titulo: 'Muestra de Robótica Aplicada e IoT',
      evento: 'Encuentro Departamental de Semilleros de Investigación',
      lugar: 'Duitama, Boyacá',
      anio: '2026',
      descripcion: 'Presentación del sistema automatizado de clasificación de residuos basado en visión artificial con ESP32-S3 y telemetría en tiempo real.',
      categoria: 'Ponencia y Demostración'
    },
    {
      id: 2,
      titulo: 'Exhibición de Sistemas Embebidos y Hardware Abierto',
      evento: 'Jornada Académica de Ingeniería Electrónica',
      lugar: 'Sogamoso, Boyacá',
      anio: '2025',
      descripcion: 'Exposición de prototipos de control PID para plataformas móviles y desarrollo de firmware con arquitecturas libres.',
      categoria: 'Muestra Tecnológica'
    },
    {
      id: 3,
      titulo: 'Desarrollo de Soluciones AgTech para Minifundios',
      evento: 'Feria de Innovación y Desarrollo Tecnológico Regional',
      lugar: 'Boyacá, Colombia',
      anio: '2025',
      descripcion: 'Propuesta de redes de sensores inalámbricas orientadas a la optimización de variables agroclimáticas en pequeños cultivos.',
      categoria: 'Proyecto de Investigación'
    }
  ];

  return (
    <section className="participaciones-container" id="participaciones">
      <div className="participaciones-content">
        <div className="section-header">
          <span className="section-tag">Reconocimiento y Divulgación</span>
          <h2>Participaciones Destacadas</h2>
        </div>

        <div className="participaciones-grid">
          {participacionesList.map((item) => (
            <div key={item.id} className="participacion-card">
              <div className="participacion-meta">
                <span className="participacion-anio">{item.anio}</span>
                <span className="participacion-tag-cat">{item.categoria}</span>
              </div>
              <h3>{item.titulo}</h3>
              <p className="participacion-evento"><strong>{item.evento}</strong></p>
              <p className="participacion-lugar">📍 {item.lugar}</p>
              <p className="participacion-desc">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}