import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI ?? "";

const connection = {
  isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
   

    const db = await mongoose.connect(MONGODB_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // Opcional: tiempo de espera para la selección del servidor en milisegundos
    });

    

    //connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

export default dbConnect;
