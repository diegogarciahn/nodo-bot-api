const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearHorario, obtenerHorarios, actualizarHorario, eliminarHorario  } = require('../controllers/horario.controller'); // Importar el controlador de horario

router.post('/horario', [validarJWT], crearHorario); // Ruta para crear un nuevo horario
router.get('/horario', [validarJWT], obtenerHorarios); // Ruta para obtener todos los horario
router.put('/horario/:id', [validarJWT], actualizarHorario); // Ruta para actualizar un horario por su ID
router.delete('/horario/:id', [validarJWT], eliminarHorario); // Ruta para borrar un horario por su ID

module.exports = router;