const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearEstudiante, obtenerEstudiantes, obtenerEstudiantePorId, actualizarEstudiante, borrarEstudiante, obtenerTutores, obtenerEstudiantesNoTutores } = require('../controllers/estudiante.controller'); // Importar el controlador de Estudiante
const router = Router();

router.post('/', [
    validarJWT,
    
], crearEstudiante); // Ruta para crear un nuevo estudiante

router.get('/', [
    validarJWT,
    
], obtenerEstudiantes); // Ruta para obtener todos los estudiantes

router.get('/', [
    validarJWT,
    
], obtenerEstudiantes); // Ruta para obtener todos los estudiantes

router.get('/tutores', obtenerTutores); // Ruta para obtener todos los tutores

router.get('/no', obtenerEstudiantesNoTutores); // Ruta para obtener no tutores

router.get('/search', [
    validarJWT,
    
], obtenerEstudiantePorId); // Ruta para obtener un estudiante por su ID

router.put('/', [
    validarJWT,
    
], actualizarEstudiante); // Ruta para actualizar un estudiante por su ID

router.delete('/', [
    validarJWT,
    
], borrarEstudiante); // Ruta para borrar un estudiante por su ID

module.exports = router;