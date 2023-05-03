const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { servirEstudiantes } = require('../controllers/estudiante.controller'); // Importar el controlador de Estudiante
const router = Router();

router.get('/', validarJWT, servirEstudiantes); // Ruta para obtener todos los estudiantes

module.exports = router;