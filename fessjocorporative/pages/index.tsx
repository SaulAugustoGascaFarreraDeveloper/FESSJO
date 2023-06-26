import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
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

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <motion.h1
                variants={h1Variants}
                initial="hidden"
                animate="visible"
              >
                FESSJO
              </motion.h1>
              <motion.p
                variants={pVariants}
                initial="hidden"
                animate="visible"
              >
                  Contamos con equipos de inyección de aluminio
        
              </motion.p>
              <motion.p
                variants={pVariants}
                initial="hidden"
                animate="visible"
              >
                  
                  Contamos con experiencia mayor a 40 años
              </motion.p>
              <br/>
              <motion.h3
                variants={h1Variants}
                initial="hidden"
                animate="visible"
              >
                Contamos con refacciones y partes para su maquinaria
              </motion.h3>
              <motion.p
                variants={pVariants2}
                initial="hidden"
                animate="visible"
              >
               22222Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod purus at justo tincidunt, in interdum dolor vestibulum. Aenean vestibulum metus mauris, non dignissim velit finibus vitae. Sed pulvinar urna in nibh porta, vel fermentum sapien convallis. Nunc a purus ac odio sagittis iaculis. Fusce non feugiat lorem. Integer euismod tortor a magna viverra eleifend. Sed vehicula metus in elit luctus scelerisque. Cras quis erat a turpis finibus fringilla sed eget odio. Nam tempus dolor risus, eu fringilla velit viverra eget.
              </motion.p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

