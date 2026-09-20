import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Nosotros from './components/Nosotros/Nosotros';
import Participaciones from './components/Participaciones/Participaciones';
import Integrantes from './components/Integrantes/Integrantes';
import Publicaciones from './components/Publicaciones/Publicaciones';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Sección Inicio / Hero */}
      <Hero />

      {/* Sección Nosotros */}
      <Nosotros />

      {/* Sección Participaciones */}
      <Participaciones />

      {/* Sección Integrantes */}
      <Integrantes />

      {/* Sección Publicaciones y Documentos */}
      <Publicaciones />
      
      {/* Sección Contacto */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  );
}
