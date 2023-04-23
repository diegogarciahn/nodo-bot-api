const {Router} = require('express');
//const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearPermiso, obtenerPermisos, actualizarPermiso, eliminarPermiso  } = require('../controllers/permiso.controller'); // Importar el controlador de Permiso

const router = Router();

router.post('/crearPermiso', crearPermiso); // Ruta para crear un nuevo permiso
router.get('/obtenerPermiso', obtenerPermisos); // Ruta para obtener todos los permiso
router.put('/actualizarPermiso/:id', actualizarPermiso); // Ruta para actualizar un permiso por su ID
router.delete('/eliminarPermiso/:id', eliminarPermiso); // Ruta para borrar un permiso por su ID

module.exports = router;