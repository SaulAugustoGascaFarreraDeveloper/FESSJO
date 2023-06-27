import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer style={{ backgroundColor: '#25ADE1', color: '#FFFFFF', padding: '20px', textAlign: 'center', position: 'relative' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        <a href="/who-we-are" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Quiénes somos</a> |
        <a href="/contact-us" style={{ color: '#FFFFFF', textDecoration: 'none' }}> Contáctanos</a> |
        <a href="/services" style={{ color: '#FFFFFF', textDecoration: 'none' }}> Servicios</a>
      </div>
      <div style={{ fontSize: '14px', color: '#FFFFFF' }}>© 2023 FESSJO. Todos los derechos reservados.</div>
      <a
        href="https://api.whatsapp.com/send?phone=4427513077"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          bottom: '120px',
          right: '20px',
          backgroundColor: isHovered ? '#054917' : '#128C45',
          color: '#FFF',
          borderRadius: '50%',
          padding: '8px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '30px' }} />
      </a>
    </footer>
  );
};
