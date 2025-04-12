const express = require('express');
const router = express.Router();
const proyectosRepository = require('../repositories/proyectos');

// GET todos los tipos de propyectos
router.get('/', async (req, res) => {
  console.log("Estoy dentro de listado usuarios");
  try {
    
    const tipoProyecto = await proyectosRepository.getAll();
    res.status(200).json(tipoProyecto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar proyectos', error: error.message });
  }
});

// POST crear nuevo usuario
router.post('/', async (req, res) => {
  try {
    console.log('📥 Datos recibidos en req.body:', req.body);
    const nuevoProyecto = await proyectosRepository.create(req.body);
    res.status(201).json({ 
      message: 'Proyecto creado exitosamente',
      proyecto: nuevoProyecto
    });
  } catch (error) {
    console.error(error);
    console.error('❌ Error al crear proyecto:', error);
    res.status(400).json({ message: 'Error al crear el proyecto', error: error.message });
  }
});

// PUT actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const proyectoActualizado = await proyectosRepository.update(req.params.id, req.body);
    if (proyectoActualizado) {
      res.status(200).json({ 
        message: 'Proyecto actualizado exitosamente',
        proyecto: proyectoActualizado
      });
    } else {
      res.status(404).json({ message: 'proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar el proyecto', error: error.message });
  }
});

// DELETE eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await proyectosRepository.delete(req.params.id);
    if (eliminado) {
      res.status(200).json({ message: 'proyecto eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el proyecto', error: error.message });
  }
});

module.exports = router;