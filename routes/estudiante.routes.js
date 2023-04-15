const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearEstudiante, obtenerEstudiantes, obtenerEstudiantePorId, actualizarEstudiante, borrarEstudiante } = require('../controllers/estudiante.controller'); // Importar el controlador de Estudiante

router.post('/estudiantes', [validarJWT], crearEstudiante); // Ruta para crear un nuevo estudiante
router.get('/estudiantes', [validarJWT], obtenerEstudiantes); // Ruta para obtener todos los estudiantes
router.get('/estudiantes/:id', [validarJWT], obtenerEstudiantePorId); // Ruta para obtener un estudiante por su ID
router.put('/estudiantes/:id', [validarJWT], actualizarEstudiante); // Ruta para actualizar un estudiante por su ID
router.delete('/estudiantes/:id', [validarJWT], borrarEstudiante); // Ruta para borrar un estudiante por su ID

module.exports = router;
