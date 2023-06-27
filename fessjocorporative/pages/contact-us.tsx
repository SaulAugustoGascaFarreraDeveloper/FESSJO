import React, { useState,useRef  } from 'react';
import { Form, Button, Col, Row,Alert  } from 'react-bootstrap';
import { Layout } from '../componets/layouts';
import { motion } from 'framer-motion';
import axios from 'axios'
import Swal from 'sweetalert2';





const estadosMexico = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Coahuila',
  'Colima',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Durango',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'México',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas'
]



const ContactUs = () => {

  const [client,setClient] = useState({
    nombre:'',
    apellidoPaterno: '',
    apellidoMaterno: '',
    cargo:'',
    nombreEmpresa:'',
    calle:'',
    numero:'',
    colonia:'',
    estado: '',
    ciudad:'',
    pais:'',
    telefono:'',
    correoElectronico:'',
    descripcion:''
  })

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try{

      const response = await axios.post("/api/posts",client)

      if(response.status === 201)
      {
        console.log("Cliente guardado exitosamente --> ",client);

        Swal.fire({
          title: '¡Tu datos han sido guardados exitosamente, nos comunicaremos contigo pronto!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        

      }else {
        console.error('Error al guardar el cliente en la base de datos');
        alert("No se pudo guardar la informacion")
        
      }

    }catch(error)
    {
      console.log("Error al guadar cliente en la base de datos --> ",error)
      alert(`No se pudo guardar la informacion --> ${error}`)
    }


    setClient({
      nombre:'',
      apellidoPaterno: '',
      apellidoMaterno: '',
      cargo:'',
      nombreEmpresa:'',
      calle:'',
      numero:'',
      colonia:'',
      estado: '',
      ciudad:'',
      pais:'',
      telefono:'',
      correoElectronico:'',
      descripcion:''
    })

  }


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

      <h3 className='container'>Agrega Tus Datos para que nosotros nos contactemos con ustedes</h3>

      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >

      

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={4} controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" onChange={handleChange} value={client.nombre} required />
            </Col>
            <Col xs={12} md={4} controlId="apellidoPaterno">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="text" name="apellidoPaterno" onChange={handleChange} value={client.apellidoPaterno} required />
            </Col>
            <Col xs={12} md={4} controlId="apellidoMaterno">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="text" name="apellidoMaterno" onChange={handleChange} value={client.apellidoMaterno} required />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} controlId="cargo">
              <Form.Label>Cargo</Form.Label>
              <Form.Control type="text" name="cargo" onChange={handleChange} value={client.cargo} required />
            </Col>
            <Col xs={12} md={6} controlId="nombreEmpresa">
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control type="text" name="nombreEmpresa" onChange={handleChange} value={client.nombreEmpresa} required />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} controlId="calle">
              <Form.Label>Calle</Form.Label>
              <Form.Control type="text" name="calle" onChange={handleChange} value={client.calle} required />
            </Col>
            <Col xs={12} md={6} controlId="numero">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" name="numero" onChange={handleChange} value={client.numero} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} controlId="colonia">
              <Form.Label>Colonia</Form.Label>
              <Form.Control type="text" name="colonia" onChange={handleChange} value={client.colonia} required />
            </Col>
            <Col xs={12} md={4} controlId="estado">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" name="estado" onChange={handleChange} value={client.estado} required>
                <option value="">Seleccionar Estado</option>
                {estadosMexico.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col xs={12} md={4} controlId="ciudad">
              <Form.Label>Ciudad / Municipio</Form.Label>
              <Form.Control type="text" name="ciudad" onChange={handleChange} value={client.ciudad} required />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} controlId="pais">
              <Form.Label>País</Form.Label>
              <Form.Control type="text" name="pais" onChange={handleChange} value={client.pais} required />
            </Col>
            <Col xs={12} md={4} controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" name="telefono" onChange={handleChange} value={client.telefono} required />
            </Col>
            <Col xs={12} md={4} controlId="correoElectronico">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="correoElectronico" onChange={handleChange} value={client.correoElectronico} required />
            </Col>
          </Row>
          <Form.Group controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control placeholder='Escriba una descripción de sus reuqrimientos...' as="textarea" rows={3} name="descripcion" onChange={handleChange} value={client.descripcion} required />
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
