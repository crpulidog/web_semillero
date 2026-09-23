import React, { useState, useEffect } from 'react';
import './Publicaciones.css';
import publicacionesData from '../../data/publicaciones.json';

export default function Publicaciones() {
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroAnio, setFiltroAnio] = useState('todos');
  const [paginaActual, setPaginaActual] = useState(1);
  
  // Elementos por página responsivos basados en filas de 3 columnas (ej. 6 elementos por página)
  const [elementosPorPagina, setElementosPorPagina] = useState(6);

  useEffect(() => {
    const calcularElementosPorPagina = () => {
      if (window.innerWidth < 768) {
        setElementosPorPagina(4); // En móviles o pantallas pequeñas
      } else {
        setElementosPorPagina(6); // En pantallas medianas y grandes (2 filas completas de 3)
      }
    };

    calcularElementosPorPagina();
    window.addEventListener('resize', calcularElementosPorPagina);
    return () => window.removeEventListener('resize', calcularElementosPorPagina);
  }, []);

  // Generamos dinámicamente las listas de tipos y años únicos a partir del JSON
  const tiposUnicos = ['todos', ...new Set(publicacionesData.map((pub) => pub.tipo))];
  const aniosUnicos = ['todos', ...new Set(publicacionesData.map((pub) => pub.fecha))];

  // 1. Filtrado de publicaciones según los selectores activos
  const publicacionesFiltradas = publicacionesData.filter((pub) => {
    const coincideTipo = filtroTipo === 'todos' || pub.tipo === filtroTipo;
    const coincideAnio = filtroAnio === 'todos' || pub.fecha === filtroAnio;
    return coincideTipo && coincideAnio;
  });

  // 2. Ordenamiento automático del año más reciente al más antiguo de forma transversal
  const publicacionesOrdenadas = [...publicacionesFiltradas].sort((a, b) => {
    // Convierte el campo fecha/año a número para asegurar comparación descendente correcta (ej. 2026 vs 2025)
    return Number(b.fecha) - Number(a.fecha);
  });

  // Cálculo de elementos para la paginación sobre la lista ordenada
  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const publicacionesPaginadas = publicacionesOrdenadas.slice(indicePrimerElemento, indiceUltimoElemento);
  const totalPaginas = Math.ceil(publicacionesOrdenadas.length / elementosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
    const seccion = document.getElementById('publicaciones');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFiltroTipoChange = (e) => {
    setFiltroTipo(e.target.value);
    setPaginaActual(1);
    const seccion = document.getElementById('publicaciones');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFiltroAnioChange = (e) => {
    setFiltroAnio(e.target.value);
    setPaginaActual(1);
    const seccion = document.getElementById('publicaciones');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="publicaciones-container" id="publicaciones">
      <div className="publicaciones-content">
        <div className="section-header">
          <span className="section-tag">Divulgación y Ciencia</span>
          <h2>Artículos y Ponencias</h2>
          <p className="publicaciones-subtitulo">
            Explora los artículos de investigación y documentos desarrollados por el equipo de trabajo.
          </p>
        </div>

        <div className="bloque-seccion">
          <div className="filtros-container">
            <select 
              value={filtroTipo} 
              onChange={handleFiltroTipoChange}
              className="filtro-select"
            >
              <option value="todos">Todos los tipos</option>
              {tiposUnicos.filter(tipo => tipo !== 'todos').map((tipo, index) => (
                <option key={index} value={tipo}>{tipo}</option>
              ))}
            </select>

            <select 
              value={filtroAnio} 
              onChange={handleFiltroAnioChange}
              className="filtro-select"
            >
              <option value="todos">Todos los años</option>
              {aniosUnicos.filter(anio => anio !== 'todos').map((anio, index) => (
                <option key={index} value={anio}>{anio}</option>
              ))}
            </select>
          </div>

          {publicacionesPaginadas.length > 0 ? (
            <>
              <div className="publicaciones-grid">
                {publicacionesPaginadas.map((pub, index) => (
                  <div className="pub-card" key={index}>
                    <div className="pub-header">
                      <span className="pub-tipo">{pub.tipo}</span>
                      <span className="pub-fecha">{pub.fecha}</span>
                    </div>
                    <h4>{pub.titulo}</h4>
                    <p className="pub-fuente">{pub.fuente}</p>
                    <div className="pub-footer">
                      <span className="pub-tag">{pub.etiqueta}</span>
                      <div className="pub-links-grupo">
                        <a href={pub.enlaceOrigen} target="_blank" rel="noopener noreferrer" className="pub-link">
                          Ver fuente ↗
                        </a>
                        <a href={pub.archivoPdf} download className="pub-link pub-descargar" title="Descargar PDF">
                          <svg className="icono-descarga" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPaginas > 1 && (
                <div className="paginacion-container">
                  <button 
                    onClick={() => cambiarPagina(Math.max(paginaActual - 1, 1))}
                    disabled={paginaActual === 1}
                    className="btn-paginacion"
                  >
                    Anterior
                  </button>
                  
                  <span className="paginacion-info">
                    Página {paginaActual} de {totalPaginas}
                  </span>

                  <button 
                    onClick={() => cambiarPagina(Math.min(paginaActual + 1, totalPaginas))}
                    disabled={paginaActual === totalPaginas}
                    className="btn-paginacion"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="mensaje-vacio">
              <p>No se encontraron publicaciones con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}