const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutoria, obtenerSolicitudesTutorias, obtenerSolicitudTutoriaId, actualizarSolicitudTutoria, eliminarSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller'); 

router.post('/crearSolicitudTutoria', [
    validarJWT,
    check('estudiante', 'El estudiante debe ser obligatorio.').notEmpty(),
    check('clase', 'La clase debe ser obligatoria.').notEmpty(),
    check('horario_solicitado', 'El horario debe ser obligatorio.').notEmpty()
],crearSolicitudTutoria); 
router.get('/obtenerSolicitudesTutorias', [validarJWT], obtenerSolicitudesTutorias); 
router.get('/obtenerSolicitudTutoria/:id', [validarJWT],obtenerSolicitudTutoriaId); 
router.put('/actualizarSolicitudTutoria/:id', [validarJWT],actualizarSolicitudTutoria); 
router.delete('/eliminarSolicitudTutoria/:id', [validarJWT],eliminarSolicitudTutoria); 

module.exports = router;