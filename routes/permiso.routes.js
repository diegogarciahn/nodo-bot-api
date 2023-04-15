const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearPermiso, obtenerPermisos, actualizarPermiso, eliminarPermiso  } = require('../controllers/permiso.controller'); // Importar el controlador de Permiso

router.post('/permiso', [validarJWT], crearPermiso); // Ruta para crear un nuevo permiso
router.get('/permiso', [validarJWT], obtenerPermisos); // Ruta para obtener todos los permiso
router.put('/permiso/:id', [validarJWT], actualizarPermiso); // Ruta para actualizar un permiso por su ID
router.delete('/permiso/:id', [validarJWT], eliminarPermiso); // Ruta para borrar un permiso por su ID

module.exports = router;