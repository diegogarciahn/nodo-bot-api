const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearClase, obtenerClases, obtenerClasePorId, actualizarClase, borrarClase  } = require('../controllers/clase.controller'); // Importar el controlador de Clase

router.post('/clases', [validarJWT], crearClase); // Ruta para crear un nuevo clase
router.get('/clases', [validarJWT], obtenerClases); // Ruta para obtener todos los clase
router.get('/clases/:id', [validarJWT], obtenerClasePorId); // Ruta para obtener un clase por su ID
router.put('/clases/:id', [validarJWT], actualizarClase); // Ruta para actualizar un clase por su ID
router.delete('/clases/:id', [validarJWT], borrarClase); // Ruta para borrar un clase por su ID

module.exports = router;
