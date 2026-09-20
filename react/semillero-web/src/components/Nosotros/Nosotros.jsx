import React from 'react';
import './Nosotros.css';

export default function Nosotros() {
  return (
    <section className="nosotros-container" id="nosotros">
      <div className="nosotros-content">
        <div className="section-header">
          <span className="section-tag">Nuestra Esencia</span>
          <h2>Quiénes Somos</h2>
          <p className="nosotros-subtitulo">
            Electron Volt es un espacio académico que fomenta la investigación formativa en electrónica, automatización y robótica. 
            Se destaca por su participación activa en competencias de robótica y proyectos de instrumentación virtual, control de procesos y energías limpias, integrando a estudiantes y docentes en la solución de problemas reales mediante la ingeniería aplicada.
          </p>
        </div>

        <div className="nosotros-info-grid">
          <div className="info-card-main">
            <h3>Información Institucional (SIGIIP)</h3>
            <div className="sigiip-details">
              <p><strong>Unidad académica responsable:</strong></p><p>Escuela de Ciencias Básicas -Tecnología e Ingeniería ECBTI - UNAD</p><br></br>
              <p><strong>Responsable del Semillero:</strong></p><p>William Alexander Cuevas </p><br></br>
              <p><strong>Fecha de Creación:</strong></p><p> 02/10/2021 </p>
              <p><strong>Sede/Campus:</strong></p><p> Zona Centro Bogota Cundinamarca (Zcbog) </p>
            </div>
            <a 
              href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1970" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-sigiip"
            >
              Ver Ficha Oficial SIGIIP
            </a>
          </div>

          <div className="mision-vision-wrapper">
            <div className="pillar-card">
              <div className="pillar-icon">⚡</div>
              <h3>Misión</h3>
              <p>Fomentar competencias investigativas mediante el diseño de prototipos electrónicos y soluciones tecnológicas funcionales para el entorno.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🌐</div>
              <h3>Visión</h3>
              <p>Consolidarnos como un grupo referente en innovación robótica y sistemas embebidos con alto impacto académico y social.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🚀</div>
              <h3>Objetivo Principal</h3>
              <p>Dinamizar el conocimiento mediante el desarrollo de tecnologías con impacto educativo, social e industrial.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}