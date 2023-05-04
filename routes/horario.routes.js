const {Router} = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { check } = require('express-validator');
const { crearHorario, obtenerHorarioPorDia, obtenerHorarios, actualizarHorario, obtenerDiasDeHorario, eliminarHorario, obtenerHorarioPorId } = require('../controllers/horario.controller'); // Importar el controlador de horario

router.post('/crearHorarios', crearHorario); 
router.get('/obtenerHorarios', obtenerHorarios); // Ruta para obtener todos los horario
router.get('/obtenerHorariosId/:id', obtenerHorarioPorId); 
router.put('/actualizarHorario/:id', actualizarHorario); // Ruta para actualizar un horario por su ID
router.delete('/eliminarHorario/:id', eliminarHorario); // Ruta para borrar un horario por su ID
router.get('/dia/:diaa', obtenerHorarioPorDia);
router.get('/obtenerDias', obtenerDiasDeHorario);


module.exports = router;