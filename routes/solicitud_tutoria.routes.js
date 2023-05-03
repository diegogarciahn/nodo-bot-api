const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutoria, obtenerSolicitudesTutorias, obtenerSolicitudTutoriaId,obtenerSolicitudesPorEstudiante, obtenerSolicitudesPorEstado, actualizarSolicitudTutoria, actualizarSolicitudTutoriaAdmin, eliminarSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller'); 
const { validarEstudianteEnClase  } = require('../middlewares/validarRegistroTutoria.middleware');

router.post('/crearSolicitudTutoria',validarEstudianteEnClase, crearSolicitudTutoria); 
router.get('/obtenerSolicitudesTutorias',  obtenerSolicitudesTutorias); 
router.get('/obtenerSolicitudTutoria/:id', obtenerSolicitudTutoriaId); 
router.get('/obtenerSolicitudTutoriaEs/', obtenerSolicitudesPorEstado); 
router.get('/obtenerSolicitudTutoriaEstu/:estudiante',  obtenerSolicitudesPorEstudiante); 
router.put('/actualizarSolicitudTutoria/:id', [validarJWT],actualizarSolicitudTutoria); 
router.put('/actualizarSolicitudTutoriaAdmi/:id', [validarJWT],actualizarSolicitudTutoriaAdmin); 
router.delete('/eliminarSolicitudTutoria/:id', eliminarSolicitudTutoria); 

module.exports = router;