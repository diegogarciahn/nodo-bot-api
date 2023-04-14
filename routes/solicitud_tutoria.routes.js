const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutoria, obtenerSolicitudesTutorias, obtenerSolicitudTutoriaId, actualizarSolicitudTutoria, eliminarSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller'); 

router.post('/solicitud_tutoria', [validarJWT], crearSolicitudTutoria); 
router.get('/solicitud_tutoria', [validarJWT], obtenerSolicitudesTutorias); 
router.get('/solicitud_tutoria/:id', [validarJWT], obtenerSolicitudTutoriaId); 
router.put('/solicitud_tutoria/:id', [validarJWT], actualizarSolicitudTutoria); 
router.delete('/solicitud_tutoria/:id', [validarJWT], eliminarSolicitudTutoria); 

module.exports = router;