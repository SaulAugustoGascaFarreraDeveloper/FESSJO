import React from 'react';
import { Layout } from '../componets/layouts';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const h1Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    zoom: { scale: 1.1 },
  };

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          Acerca de Nosotros
        </motion.h1>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/mission1.jpg"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>
          <h2 style={{ marginBottom: '10px' }}>Misión</h2>
          <p>
            Our mission is to find the best quality alternatives to high priced new and used machines and equipment and
            to offer them through our online portal.
          </p>
        </div>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/vision1.jpg"
              alt="Imagen Visión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>
          <h2 style={{ marginBottom: '10px' }}>Visión</h2>
          <p>
            Our vision is to become the leading provider of affordable and high-quality machinery solutions for various
            industries.
          </p>
        </div>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/WHO-WE-ARE.jpg"
              alt="Imagen Valores"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>
          <h2 style={{ marginBottom: '10px' }}>Valores</h2>
          <p>
            We are committed to integrity, customer satisfaction, continuous improvement, and environmental
            sustainability.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
