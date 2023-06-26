import Client from "../../db/models/ClientModel";
import dbConnect from "../../db/models/dbconnection";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI ?? "";

// Conectarse a la base de datos
dbConnect();

const handler = async (req: any, res: any) => {
  const { method } = req;

  switch (method) {
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

          const client = await MongoClient.connect(MONGODB_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Opcional: tiempo de espera para la selección del servidor en milisegundos
          });

          const db = client.db("FESSJO")
          const result = await db.collection('Clientes').insertOne(clientData);

            client.close(); // Cerrar la conexión a la base de datos

        //const client = await Client.create(req.body);
        //res.status(201).json({ success: true, data: client });
            const insertedId = result.insertedId; // Castear a any para evitar el error
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
