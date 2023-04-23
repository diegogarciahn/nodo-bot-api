const {Router} = require('express');
//const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { check } = require('express-validator');
const { crearPermiso, obtenerPermisos, actualizarPermiso, eliminarPermiso  } = require('../controllers/permiso.controller'); // Importar el controlador de Permiso

const router = Router();

router.post('/crearPermiso',[
    validarJWT,
    check('nombre_permiso', 'El nombre del permiso es obligatorio').notEmpty(),
    check('descripcion', 'la descripcion del permiso es obligatoria').notEmpty()
], crearPermiso); // Ruta para crear un nuevo permiso

router.get('/obtenerPermiso', 
[validarJWT], obtenerPermisos); // Ruta para obtener todos los permiso

router.put('/actualizarPermiso/:id', 
[validarJWT], actualizarPermiso); // Ruta para actualizar un permiso por su ID

router.delete('/eliminarPermiso/:id',
[validarJWT], eliminarPermiso); // Ruta para borrar un permiso por su ID

module.exports = router;