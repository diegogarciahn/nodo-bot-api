const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { obtenerRoles, obtenerRol, crearRol, actualizarRol, eliminarRol } = require('../controllers/rol.controller'); // Importar el controlador de Rol
const { route } = require('./estudiante.routes');
const router = Router();

router.get('/', obtenerRoles);
router.get('/', obtenerRol);
router.post('/', crearRol);
router.put('/', actualizarRol);
router.delete('/', eliminarRol);

module.exports = routet; 
