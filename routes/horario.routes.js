const {Router} = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { check } = require('express-validator');
const { crearHorario, obtenerHorarios, actualizarHorario, eliminarHorario  } = require('../controllers/horario.controller'); // Importar el controlador de horario

router.post('/crearHorarios', crearHorario); 
router.get('/obtenerHorarios', obtenerHorarios); // Ruta para obtener todos los horario
router.put('/actualizarHorario/:_id', actualizarHorario); // Ruta para actualizar un horario por su ID
router.delete('/eliminarHorario/:_id', eliminarHorario); // Ruta para borrar un horario por su ID

module.exports = router;