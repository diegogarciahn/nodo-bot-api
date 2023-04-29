const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutoria, obtenerSolicitudesTutorias, obtenerSolicitudTutoriaId,obtenerSolicitudesPorEstudiante, obtenerSolicitudesPorEstado, actualizarSolicitudTutoria, actualizarSolicitudTutoriaAdmin, eliminarSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller'); 

router.post('/crearSolicitudTutoria', [validarJWT], crearSolicitudTutoria); 
router.get('/obtenerSolicitudesTutorias', [validarJWT], obtenerSolicitudesTutorias); 
router.get('/obtenerSolicitudTutoria/:id', [validarJWT],obtenerSolicitudTutoriaId); 
router.get('/obtenerSolicitudTutoriaEs/',[validarJWT], obtenerSolicitudesPorEstado); 
router.get('/obtenerSolicitudTutoriaEstu/:estudiante',  [validarJWT],obtenerSolicitudesPorEstudiante); 
router.put('/actualizarSolicitudTutoria/:id', [validarJWT],actualizarSolicitudTutoria); 
router.put('/actualizarSolicitudTutoriaAdmi/:id', [validarJWT],actualizarSolicitudTutoriaAdmin); 
router.delete('/eliminarSolicitudTutoria/:id', [validarJWT],eliminarSolicitudTutoria); 

module.exports = router;