import palindrome from './routes/palindromo.js';
import express from 'express';

const app = express();
const port = 3001;

// Middleware para analizar JSON
app.use(express.json());

// ruta palindromo
app.use(palindrome);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
