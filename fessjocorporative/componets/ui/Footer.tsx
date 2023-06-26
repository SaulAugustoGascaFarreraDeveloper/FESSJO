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
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>Footer content goes here</div>
      <div style={{ fontSize: '14px', color: '#FFFFFF' }}>© 2023 FESSJO. All rights reserved.</div>
      <a
        href="https://api.whatsapp.com/send?phone=4425785179"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '-50px',
          right: '28px',
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
