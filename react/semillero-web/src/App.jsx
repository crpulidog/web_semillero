import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Nosotros from './components/Nosotros/Nosotros';
import Participaciones from './components/Participaciones/Participaciones';
import Galeria from './components/Galeria/Galeria';
import Publicaciones from './components/Publicaciones/Publicaciones';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Cargar preferencia guardada o usar oscuro por defecto
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setDarkMode(isDark);
      document.documentElement.className = isDark ? 'dark-mode' : 'light-mode';
    } else {
      document.documentElement.className = 'dark-mode';
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const themeClass = newMode ? 'dark-mode' : 'light-mode';
    document.documentElement.className = themeClass;
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Nosotros />
      <Participaciones />
      <Galeria />
      <Publicaciones />
      <Contacto />
      <Footer />
    </div>
  );
}