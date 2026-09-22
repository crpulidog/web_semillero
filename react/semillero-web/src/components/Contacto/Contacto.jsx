import React, { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar la lógica para enviar el mensaje (por ejemplo, EmailJS o una API)
    setEnviado(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="contacto" className="section contacto">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-item">   
                  <h4>📧<br></br>Email</h4>
                  <p>william.cuevas@unad.edu.co</p>
              </div>
              <div className="contact-item">
                  <h4>📱<br></br>Teléfono</h4>
                  <p>+57 320 444 4030</p>
              </div>
              <div className="contact-item">
                  <h4>📍<br></br>Ubicación</h4>
                  <p>UNAD - Zona Centro Bogotá Cundinamarca<br></br>Facatativá, Colombia</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Tu nombre" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Tu email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Asunto" 
                  value={formData.subject}
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  placeholder="Tu mensaje" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              {enviado && <p className="form-success-msg">¡Mensaje enviado con éxito al director!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}