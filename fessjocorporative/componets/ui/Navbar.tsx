import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import styles from "../../styles/own.module.css";

export const NavbarComponent = () => {
  return (

    <>

        <Navbar style={{backgroundColor:'#25ADE1'}}  expand="lg" className={`px-5  ${styles.nb}`}>
        <Navbar.Brand href="/" className="mr-auto">
            <Image src="/static/img/Fessjo.png" alt="Logo" width={100} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse  id="navbar-nav" className={`justify-content-end ${styles.footer}`}>
            <Nav style={{backgroundColor:'#25ADE1'}}>
            <Nav.Link href="/who-we-are" className={`${styles.cn} ${styles.nb}`} style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Quienes Somos
            </Nav.Link>
            <Nav.Link  href="/services" className={`${styles.cn} ${styles.nb}`} style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Servicios
            </Nav.Link>
            <Nav.Link href="/contact-us" className={`${styles.cn} ${styles.nb}`} style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Contactanos
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <hr style={{borderBottom:'5px solid white'}} />

    </>
   
  );
};
