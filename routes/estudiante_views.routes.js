const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearEstudiante, obtenerEstudiantes, obtenerEstudiantePorId, actualizarEstudiante,obtenerEstudiantePorTelegramId, borrarEstudiante, obtenerTutores, obtenerEstudiantesNoTutores } = require('../controllers/estudiante.controller'); // Importar el controlador de Estudiante
const router = Router();

router.get('/', [validarJWT], obtenerEstudiantes); // Ruta para obtener todos los estudiantes

module.exports = router;