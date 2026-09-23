import React, { useState } from 'react';
import Galeria from '../Galeria/Galeria';
import './Eventos.css';
import eventosData from '../../data/eventos.json';

export default function Eventos() {
  const [indiceActual, setIndiceActual] = useState(0);
  const elementosPorVista = 3;

  const hoyIso = new Date().toISOString().split('T')[0];

  // Función para formatear la fecha Iso a un texto legible (ej. 15 Oct, 2026)
  const formatearFechaVisible = (fechaStr) => {
    const [anio, mes, dia] = fechaStr.split('-');
    const fecha = new Date(anio, mes - 1, dia);
    const opciones = { day: '2-digit', month: 'short', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones).replace('.', '');
  };

  // Enriquecer los datos automáticamente con id único y fecha visible calculada
  const eventosProcesados = eventosData.map((evento, index) => ({
    ...evento,
    id: index + 1,
    fechaVisible: formatearFechaVisible(evento.fechaIso)
  }));

  // Filtrar eventos futuros o iguales a hoy
  const eventosFuturos = eventosProcesados.filter(evento => evento.fechaIso >= hoyIso);
  const totalEventos = eventosFuturos.length;

  const handleAnterior = () => {
    setIndiceActual(prev => Math.max(prev - elementosPorVista, 0));
  };

  const handleSiguiente = () => {
    setIndiceActual(prev => 
      prev + elementosPorVista < totalEventos ? prev + elementosPorVista : prev
    );
  };

  const eventosVisibles = eventosFuturos.slice(indiceActual, indiceActual + elementosPorVista);

  return (
    <section id="eventos" className="eventos-section">
      <div className="eventos-container">
        <div className="section-header">
          <span className="section-tag">Agenda y Encuentros</span>
          <h2>Próximos Eventos</h2>
          <p className="eventos-subtitulo">
            Acompaña al semillero en nuestras próximas actividades y competencias programadas.
          </p>
        </div>

        {totalEventos > 0 ? (
          <div className="eventos-carrusel-wrapper">
            <div> <button 
              className={`carousel-btn prev ${indiceActual === 0 ? 'disabled' : ''}`} 
              onClick={handleAnterior}
              disabled={indiceActual === 0}
              aria-label="Eventos anteriores"
            >
              ❮
            </button> </div>

            <div className="eventos-grid-compacto">
              {eventosVisibles.map((evento) => (
                <div className="evento-card-compacta" key={evento.id}>
                  <div className="evento-header-compacto">
                    <span className="evento-fecha-tag">{evento.fechaVisible}</span>
                    <span className="evento-hora-tag">{evento.hora}</span>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p className="evento-ubicacion">📍 {evento.ubicacion}</p>
                  <p className="evento-desc">{evento.descripcion}</p>
                  <div className="evento-footer">
                    <a href={evento.enlace} className="evento-link">
                      Más info ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`carousel-btn next ${indiceActual + elementosPorVista >= totalEventos ? 'disabled' : ''}`} 
              onClick={handleSiguiente}
              disabled={indiceActual + elementosPorVista >= totalEventos}
              aria-label="Siguientes eventos"
            >
              ❯
            </button>
          </div>
        ) : (
          <div className="mensaje-vacio">
            <p>No hay próximos eventos programados por el momento.</p>
          </div>
        )}
      </div>

      <Galeria />
    </section>
  );
}