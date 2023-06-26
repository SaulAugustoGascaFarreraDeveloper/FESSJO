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
                ¡Somos líderes en...
              </motion.p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

