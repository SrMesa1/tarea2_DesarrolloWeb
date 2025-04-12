const express = require('express');
const cors = require('cors');
const proyectosRouter = require('./routes/proyectos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log('Hola, estoy aquí');

// Rutas
app.use('/api/proyectos', proyectosRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Control de tipo proyecto. Chévere Cambúr' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});5

