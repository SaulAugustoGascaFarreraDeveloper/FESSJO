import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/own.module.css';
import { Layout } from '../componets/layouts';

const Home: NextPage = () => {
  const h1Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const pVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const pVariants2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.7 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    zoom: { scale: 1.1 },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const containerVariants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <Layout>
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <motion.h1 variants={h1Variants} initial="hidden" animate="visible" className={`px-5  ${styles.gn}`}>
            FESSJO
          </motion.h1>
        </motion.section>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px',
            alignItems: 'center', // Centrar verticalmente los elementos
          }}
        >
          <div style={{ textAlign: 'justify', width: '400px', margin: '10px'}} className={` ${styles.gn}`}>
          <strong>FESSJO</strong> es una empresa especializada y enfocada en la importación y venta de maquinaria de alta calidad para la industria de la fundición. Nuestro enfoque se centra en proporcionar equipos de última generación para la fundición, incluyendo equipos de inyección de aluminio.
          </div>
          <div style={{ width: '400px', margin: '10px' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.img
                src="/static/img/Fessjo.png"
                alt="Imagen Misión"
                style={{ width: '100%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
                whileHover="zoom"
                variants={imageVariants}
              />
            </div>
          </div>
        </motion.div>


        <motion.div
          variants={containerVariants2}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px',
            alignItems: 'center', // Centrar verticalmente los elementos
          }}
        >
          <div style={{ width: '400px', margin: '10px' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.img
                src="/static/img/maquina4.webp"
                alt="Imagen Misión"
                style={{ width: '80%', height: 'auto', cursor: 'zoom-in', marginBottom: '10px' }}
                whileHover="zoom"
                variants={imageVariants}
              />
            </div>
          </div>
          <div style={{ textAlign: 'justify', width: '400px', margin: '10px'}} className={` ${styles.gn}`}>
          Con más de 40 años de experiencia, en <strong>FESSJO</strong> somos los líderes en la importación y venta de maquinaria nueva y usada de alta calidad para la industria de la fundición.
          </div>
          
        </motion.div>


      </Layout>
    </>
  );
};

export default Home;
