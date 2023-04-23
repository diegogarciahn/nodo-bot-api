const {Router} = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { check } = require('express-validator');
const { crearHorario, obtenerHorarios, actualizarHorario, eliminarHorario  } = require('../controllers/horario.controller'); // Importar el controlador de horario

router.post('/crearHorarios',
[validarJWT,
check('dia', 'El dia para este horario es obligatorio').isEmpty(), 
check('hora', 'La hora es obligatorio').notEmpty()], 
crearHorario); // Ruta para crear un nuevo horario

router.get('/obtenerHorarios', obtenerHorarios); // Ruta para obtener todos los horario
router.put('/actualizarHorario/:id', actualizarHorario); // Ruta para actualizar un horario por su ID
router.delete('/eliminarHorario/:id', eliminarHorario); // Ruta para borrar un horario por su ID

module.exports = router;