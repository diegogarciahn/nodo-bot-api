const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutor, obtenerSolicitudTutorId, obtenerSolicitudesTutores, obtenerSolicitudesPorEstudiante,obtenerSolicitudesPorClase, actualizarSolicitudTutor, eliminarSolicitudTutor } = require('../controllers/solicitud_tutor.controller'); 
const { validarEstudianteEnClase  } = require('../middlewares/validarRegistroTutor.middleware');


router.post('/crearSolicitudTutor', validarEstudianteEnClase, crearSolicitudTutor); 
router.get('/obtenerSolicitudesTutores',obtenerSolicitudesTutores); 
router.get('/obtenerSolicitudTutor/:id',obtenerSolicitudTutorId); 
router.get('/obtenerSolicitudTutorClase/:clase',obtenerSolicitudesPorClase); 
router.get('/obtenerSolicitudTutorEstudiante/:estudiante',obtenerSolicitudesPorEstudiante); 
router.put('/actualizarSolicitudTutor/:id',actualizarSolicitudTutor); 
router.delete('/eliminarSolicitudTutor/:id', eliminarSolicitudTutor); 

module.exports = router;