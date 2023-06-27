import React from 'react';
import { Layout } from '../componets/layouts';
import { motion } from 'framer-motion';
import styles from '../styles/own.module.css';

const WhoWeAre = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const h1Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 5, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    zoom: { scale: 1.1 },
  };

  return (
    <Layout>
      {/* <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
      >
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          Acerca de Nosotros
        </motion.h1>
      </motion.section> */}

      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className={`px-5  ${styles.gn}`} >Acerca de Nosotros</h1>

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
          <h2 style={{ marginBottom: '10px' }} className={`px-5  ${styles.gn}`} >Misión</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`px-5  ${styles.gn}`}>
            Nuestra misión es encontrar las mejores alternativas de maquinaria y equipos de alta calidad, ofreciéndolos a través de nuestros servicios.
          </p>
        </div>
        <div style={{ textAlign: 'center', width: '260px', margin: '10px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/browser.png"
              alt="Imagen Visión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>
          <h2 style={{ marginBottom: '10px' }} className={`px-5  ${styles.gn}`}>Visión</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }}>
            Nuestra visión es convertirnos en el proveedor líder de soluciones de maquinaria accesibles y de alta calidad para diversas industrias.
          </p>
        </div>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/VALORES.png"
              alt="Imagen Valores"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>
          <h2 style={{ marginBottom: '10px' }} className={`px-5  ${styles.gn}`}>Valores</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`px-5  ${styles.gn}`}>
            Nos comprometemos con la integridad, la satisfacción del cliente, la mejora continua y la sostenibilidad ambiental.
          </p>
        </div>
      </div>


      <section style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#FEFFFF' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '800px', margin: '10px' }}>
            <div style={{ display: 'flex', color: '#000000', padding: '20px', flexDirection: 'column-reverse' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/static/img/Mision1.png"
                  alt="Imagen"
                  style={{ width: '80%', height: 'auto' }}
                />
              </div>
              <div style={{ flex: 1 }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px',color:"#25ADE1" }} className={`px-5  ${styles.gn}`}>Lo que nos impulsa</h2>
            <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`px-5  ${styles.gn}`}>
              Estamos comprometidos en ofrecer a nuestros clientes opciones asequibles, brindándoles la oportunidad de adquirir maquinaria a precios bajos.
              Nuestro objetivo es proporcionar soluciones confiables y rentables, asegurando que nuestros clientes obtengan el máximo valor por su inversión. A través de nuestra empresa,
              buscamos constantemente en diferentes mercados para ofrecer un amplio inventario de máquinas que satisfagan las necesidades específicas de cada proyecto. Nuestro enfoque dinámico y
              compromiso con la satisfacción del cliente nos impulsa a mantenernos actualizados con las demandas del mercado y a ofrecer un servicio de excelencia en todo momento.
            </p>
          </div>
            </div>
          </div>
      </section>

<style jsx>{`
  @media (max-width: 768px) {
    /* Estilos para pantallas más pequeñas */
    section {
      flex-direction: column;
    }
  }
`}</style>




    </Layout>
  );
};

export default WhoWeAre;
