import React, { FC } from 'react'
import { NavbarComponent } from '../ui'
import styles from "../../styles/own.module.css";
import { Footer } from '../ui/Footer';
import Head from 'next/head';


interface Props{
    title?: string
    children: any
}

export const Layout : FC<Props> = ({title, children}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>{title || 'Fessjo'}</title>
        <meta name='author' content='Fessjo Corporative' />
      </Head>

      <NavbarComponent/>

      <main className={ `${styles.mainc} `} style={{ flex: 1 }}>
        {children}
      </main>

      <br/>
      <Footer />
    </div>
  )
}
