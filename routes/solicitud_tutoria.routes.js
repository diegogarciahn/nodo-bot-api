const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutoria, obtenerSolicitudesTutorias, obtenerSolicitudTutoriaId, actualizarSolicitudTutoria, eliminarSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller'); 

router.post('/crearSolicitudTutoria', [validarJWT,],crearSolicitudTutoria); 
router.get('/obtenerSolicitudesTutorias', [validarJWT], obtenerSolicitudesTutorias); 
router.get('/obtenerSolicitudTutoria/:id', [validarJWT],obtenerSolicitudTutoriaId); 
router.put('/actualizarSolicitudTutoria/:id', [validarJWT],actualizarSolicitudTutoria); 
router.delete('/eliminarSolicitudTutoria/:id', [validarJWT],eliminarSolicitudTutoria); 

module.exports = router;