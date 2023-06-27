import { MongoClient } from 'mongodb';
import dbConnect from "../../db/models/dbconnection";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Establecer la conexión a la base de datos
dbConnect();

const MONGODB_URI = process.env.MONGODB_URI ?? "";
const client = new MongoClient(MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

// Función auxiliar para conectar y desconectar el cliente de MongoDB
async function connectDB() {
  if (!client.connect()) {
    await client.connect();
  }
  return client.db("FESSJO");
}

const handler = async (req: any, res: any) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const db = await connectDB();
        const clients = await db.collection('Clientes').find().toArray();
        res.status(200).json({ success: true, data: clients });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case "POST":
      try {
        const clientData = {
          nombre: req.body.nombre,
          apellidoPaterno: req.body.apellidoPaterno,
          apellidoMaterno: req.body.apellidoMaterno,
          cargo: req.body.cargo,
          nombreEmpresa: req.body.nombreEmpresa,
          calle: req.body.calle,
          numero: req.body.numero,
          colonia: req.body.colonia,
          estado: req.body.estado,
          ciudad: req.body.ciudad,
          pais: req.body.pais,
          telefono: req.body.telefono,
          correoElectronico: req.body.correoElectronico,
          descripcion: req.body.descripcion,
        };

        const db = await connectDB();
        const result = await db.collection('Clientes').insertOne(clientData);

        const insertedId = result.insertedId;
        res.status(201).json({ success: true, insertedId });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
