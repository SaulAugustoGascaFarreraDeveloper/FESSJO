const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidoPaterno: {
    type: String,
    required: true
  },
  apellidoMaterno: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  },
  nombreEmpresa: {
    type: String,
    required: true
  },
  calle: {
    type: String,
    required: true
  },
  numero: {
    type: String,
  },
  colonia: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: [
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
    ],
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correoElectronico: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;
