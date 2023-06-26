import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Layout } from '../componets/layouts';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const formVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 3,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Layout>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <Form>
          <Row>
            <Col xs={12} md={4} controlId="firstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="firstName" />
            </Col>
            <Col xs={12} md={4} controlId="lastName">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="text" name="lastName" />
            </Col>
            <Col xs={12} md={4} controlId="paternalLastName">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="text" name="paternalLastName" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} controlId="position">
              <Form.Label>Cargo</Form.Label>
              <Form.Control type="text" name="position" />
            </Col>
            <Col xs={12} md={6} controlId="companyName">
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control type="text" name="companyName" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} controlId="street">
              <Form.Label>Calle</Form.Label>
              <Form.Control type="text" name="street" />
            </Col>
            <Col xs={12} md={6} controlId="number">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" name="number" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} controlId="neighborhood">
              <Form.Label>Colonia</Form.Label>
              <Form.Control type="text" name="neighborhood" />
            </Col>
            <Col xs={12} md={4} controlId="state">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" name="state">
                <option>Seleccionar Estado</option>
                <option>Estado 1</option>
                <option>Estado 2</option>
                <option>Estado 3</option>
                {/* Agrega aquí más opciones de estados */}
              </Form.Control>
            </Col>
            <Col xs={12} md={4} controlId="city">
              <Form.Label>Municipio</Form.Label>
              <Form.Control type="text" name="city" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} controlId="country">
              <Form.Label>País</Form.Label>
              <Form.Control type="text" name="country" />
            </Col>
            <Col xs={12} md={4} controlId="phone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" name="phone" />
            </Col>
            <Col xs={12} md={4} controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" />
            </Col>
          </Row>
          <Form.Group controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" />
          </Form.Group>
          <br/>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </motion.div>
    </Layout>
  );
};

export default ContactUs;
