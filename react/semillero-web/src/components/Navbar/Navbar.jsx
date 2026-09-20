import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          <img src="/logo_electron_volt.jpeg" alt="Logo" className="navbar-logo" />
          Electron Volt
        </a>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#inicio" className="nav-links" onClick={toggleMenu}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#nosotros" className="nav-links" onClick={toggleMenu}>Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#participaciones" className="nav-links" onClick={toggleMenu}>Participaciones</a>
          </li>
          <li className="nav-item">
            <a href="#investigadores" className="nav-links" onClick={toggleMenu}>Integrantes</a>
          </li>
          <li className="nav-item">
            <a href="#publicaciones" className="nav-links" onClick={toggleMenu}>Publicaciones</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-links nav-cta" onClick={toggleMenu}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}