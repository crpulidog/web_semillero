import React from 'react';
import './Publicaciones.css';

export default function Publicaciones() {
  const publicacionesList = [
    {
      tipo: "Artículo de Investigación",
      titulo: "Implementación de sistemas embebidos y visión artificial para la clasificación automatizada de residuos sólidos",
      fuente: "Revista Científica de Ingeniería UNAD",
      fecha: "2026",
      enlace: "#",
      etiqueta: "Edge AI"
    },
    {
      tipo: "Documentación Técnica",
      titulo: "Guía de configuración de protocolos de comunicación inalámbrica ESP-NOW y Bluedroid BLE en ESP32-S3",
      fuente: "Repositorio Semillero Electron Volt",
      fecha: "2026",
      enlace: "#",
      etiqueta: "Firmware"
    },
    {
      tipo: "Ponencia / Póster",
      titulo: "Modelado cinemático y control PID para plataformas móviles de navegación autónoma",
      fuente: "Encuentro Regional de Investigadores SENA - UNAD",
      fecha: "2025",
      enlace: "#",
      etiqueta: "Robótica"
    }
  ];

  const recursosList = [
    {
      nombre: "Dashboard de Telemetría en Python",
      descripcion: "Interfaz gráfica en PyQt6 para el monitoreo y sintonización de lazo cerrado en motores DC.",
      tipo: "Software / Código",
      enlace: "#"
    },
    {
      nombre: "Modelos CAD Paramétricos (CadQuery)",
      descripcion: "Diseños modulares en 3D para soportes de cámaras y chasis de robots velocistas listos para impresión en PrusaSlicer.",
      tipo: "Hardware Libre",
      enlace: "#"
    },
    {
      nombre: "Plantillas LaTeX Académicas",
      descripcion: "Formato estructurado bajo normas APA e IEEE para informes de laboratorio y artículos técnicos de ingeniería.",
      tipo: "Documentación",
      enlace: "#"
    }
  ];

  return (
    <section className="publicaciones-container" id="publicaciones">
      <div className="publicaciones-content">
        <div className="section-header">
          <span className="section-tag">Divulgación y Ciencia</span>
          <h2>Publicaciones y Recursos</h2>
          <p className="publicaciones-subtitulo">
            Explora los artículos de investigación, desarrollos de código abierto y documentación técnica generados por el equipo de trabajo.
          </p>
        </div>

        {/* Sección de Publicaciones */}
        <div className="bloque-seccion">
          <h3 className="titulo-seccion">Artículos y Ponencias</h3>
          <div className="publicaciones-grid">
            {publicacionesList.map((pub, index) => (
              <div className="pub-card" key={index}>
                <div className="pub-header">
                  <span className="pub-tipo">{pub.tipo}</span>
                  <span className="pub-fecha">{pub.fecha}</span>
                </div>
                <h4>{pub.titulo}</h4>
                <p className="pub-fuente">{pub.fuente}</p>
                <div className="pub-footer">
                  <span className="pub-tag">{pub.etiqueta}</span>
                  <a href={pub.enlace} className="pub-link">Ver detalle →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Recursos y Herramientas */}
        <div className="bloque-seccion">
          <h3 className="titulo-seccion">Recursos Técnicos y Repositorios</h3>
          <div className="recursos-grid">
            {recursosList.map((recurso, index) => (
              <div className="recurso-card" key={index}>
                <div className="recurso-badge">{recurso.tipo}</div>
                <h4>{recurso.nombre}</h4>
                <p>{recurso.descripcion}</p>
                <a href={recurso.enlace} className="recurso-link">Acceder al recurso ↗</a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}