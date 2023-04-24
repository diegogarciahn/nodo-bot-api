const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutor, obtenerSolicitudTutorId, obtenerSolicitudesTutores,obtenerSolicitudesPorEstado, actualizarSolicitudTutor, eliminarSolicitudTutor } = require('../controllers/solicitud_tutor.controller'); 

router.post('/crearSolicitudTutor', [validarJWT], crearSolicitudTutor); 
router.get('/obtenerSolicitudesTutores',[validarJWT],obtenerSolicitudesTutores); 
router.get('/obtenerSolicitudTutor/:id', [validarJWT], obtenerSolicitudTutorId); 
router.get('/obtenerSolicitudTutorEs/:estado', [validarJWT], obtenerSolicitudesPorEstado); 
router.put('/actualizarSolicitudTutor/:id',[validarJWT], actualizarSolicitudTutor); 
router.delete('/eliminarSolicitudTutor/:id', [validarJWT],eliminarSolicitudTutor); 

module.exports = router;