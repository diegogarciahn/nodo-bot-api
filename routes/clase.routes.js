const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearClase, obtenerClases, obtenerClasePorId, actualizarClase, borrarClase } = require('../controllers/clase.controller'); // Importar el controlador de Clase
const { servirclases } = require('../controllers/usuarios.controller');
const router = Router();

router.post('/', crearClase); // Ruta para crear un nuevo clase
router.get('/', obtenerClases); // Ruta para obtener todos los clase
router.get('/search', obtenerClasePorId); // Ruta para obtener un clase por su ID
router.put('/:_id', actualizarClase); // Ruta para actualizar un clase por su ID
router.delete('/:_id', borrarClase); // Ruta para borrar un clase por su ID

module.exports = router;
