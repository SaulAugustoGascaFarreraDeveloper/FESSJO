import React from 'react';
import { motion } from 'framer-motion';


export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2D2C2C', color: '#FFF', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>Footer content goes here</div>
      <div style={{ fontSize: '14px', color: '#666' }}>© 2023 FESSJO. All rights reserved.</div>
      <a href="https://api.whatsapp.com/send?phone=4425785179" target="_blank" rel="noopener noreferrer">
        Contactanos por WhatsApp
      </a>
    </footer>
  );
};

