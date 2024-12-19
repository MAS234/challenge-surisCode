import palindrome from './routes/palindromo.js';
import express from 'express';
import cors from "cors"; 

const app = express();

const port = 3001;

// Solo permite solicitudes de este origen
app.use(cors({
  origin: "http://localhost:3000" 
}));

// Middleware para analizar JSON
app.use(express.json());

// ruta palindromo
app.use(palindrome);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
