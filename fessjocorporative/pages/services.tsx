import React from 'react';
import { Layout } from '../componets/layouts';
import { motion } from 'framer-motion';
import styles from '../styles/own.module.css';

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const h1Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    zoom: { scale: 1.1 },
  };

  return (
    <Layout>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
      >
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible" className={`px-5  ${styles.gn}`}>
          Servicios
        </motion.h1>
      </motion.section>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          
          <h2 style={{ marginBottom: '10px' }} > Importación y Venta de Maquinaria para Fundición</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`  ${styles.gn}`}>
          En <strong>FESSJO </strong>, nos especializamos en la importación y venta de maquinaria de alta calidad para la industria de la fundición.
          </p>
          <p style={{ textAlign: 'left', marginLeft: '10px' }} className={` ${styles.gn}`}>
              Algunos de nuestros servicios incluyen:
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '10px' }} className={`  ${styles.gn}`}>
              <li>Venta de Equipo Nuevo y Seminuevo</li>
              <li>Compra de Equipo Nuevo y Seminuevo</li>
              
            </ul>

          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/maquina1.png"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>

          
        </div>

        
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          
          <h2 style={{ marginBottom: '10px' }} >Partes y Refacciones</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`  ${styles.gn}`}>
          En <strong>FESSJO </strong>, nos especializamos en ofrecer una amplia gama de partes y refacciones para maquinaria industrial.
          </p>
          <p style={{ textAlign: 'left', marginLeft: '10px' }} className={`  ${styles.gn}`}>
              Algunos de nuestros servicios incluyen:
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '10px' }} className={`  ${styles.gn}`}>
              <li>Suministro de partes originales y compatibles</li>
              <li>Asesoramiento técnico especializado</li>
              <li>Envío rápido y seguro a nivel nacional</li>
              <li>Precios competitivos </li>
            </ul>

          <br/>
          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/maquina3.jpg"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>

          
        </div>



        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          
          <h2 style={{ marginBottom: '10px' }}>Reparación y Servicio</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }} className={`  ${styles.gn}`}>
          En <strong>FESSJO </strong>, ofrecemos servicios de reparación y mantenimiento de maquinaria para fundición.
          </p>
          <p style={{ textAlign: 'left', marginLeft: '10px' }} className={`  ${styles.gn}`}>
              Algunos de nuestros servicios incluyen:
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '10px' }} className={`  ${styles.gn}`}>
              <li>Diagnóstico y solución de problemas</li>
              <li>Reparación de equipos,reconstrucción, overhaul y componentes</li>
              <li>Mantenimiento preventivo</li>
              <li>Asesoramiento técnico y soporte</li>
            </ul>

            <br/>

          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/maquina2.png"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>

          
        </div>


      </div>


    {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          
          <h2 style={{ marginBottom: '10px' }}>Partes y Refacciones</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }}>
          En <strong>FESSJO </strong>, nos especializamos en ofrecer una amplia gama de partes y refacciones para maquinaria industrial.
          </p>
          <p style={{ textAlign: 'left', marginLeft: '10px' }}>
              Algunos de nuestros servicios incluyen:
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '10px' }}>
              <li>Suministro de partes originales y compatibles</li>
              <li>Asesoramiento técnico especializado</li>
              <li>Envío rápido y seguro a nivel nacional</li>
              <li>Precios competitivos </li>
            </ul>

          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/vision1.jpg"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>

          
        </div>



        <div style={{ textAlign: 'center', width: '400px', margin: '10px' }}>
          
          <h2 style={{ marginBottom: '10px' }}>Reparación y Servicio</h2>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }}>
          En <strong>FESSJO </strong>, ofrecemos servicios de reparación y mantenimiento de maquinaria para fundición.
          </p>
          <p style={{ textAlign: 'left', marginLeft: '10px' }}>
              Algunos de nuestros servicios incluyen:
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '10px' }}>
              <li>Diagnóstico y solución de problemas</li>
              <li>Reparación de equipos,reconstrucción, overhaul y componentes</li>
              <li>Mantenimiento preventivo</li>
              <li>Actualizaciones y mejoras</li>
              <li>Asesoramiento técnico y soporte</li>
            </ul>

          <div style={{ overflow: 'hidden' }}>
            <motion.img
              src="/static/img/vision1.jpg"
              alt="Imagen Misión"
              style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
              whileHover="zoom"
              variants={imageVariants}
            />
          </div>

          
        </div>
       
    </div> */}


     

       
       
    
    </Layout>
  );
};

export default Services;