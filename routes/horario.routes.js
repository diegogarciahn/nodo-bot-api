const {Router} = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearHorario, obtenerHorarios, actualizarHorario, eliminarHorario  } = require('../controllers/horario.controller'); // Importar el controlador de horario

router.post('/', crearHorario); // Ruta para crear un nuevo horario
router.get('/', obtenerHorarios); // Ruta para obtener todos los horario
router.put('/', actualizarHorario); // Ruta para actualizar un horario por su ID
router.delete('/', eliminarHorario); // Ruta para borrar un horario por su ID

module.exports = router;