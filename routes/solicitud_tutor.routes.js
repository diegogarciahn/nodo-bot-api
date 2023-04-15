const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutor, obtenerSolicitudTutorId, obtenerSolicitudesTutores, actualizarSolicitudTutor, eliminarSolicitudTutor } = require('../controllers/solicitud_tutor.controller'); 

router.post('/solicitud_tutor', [validarJWT], crearSolicitudTutor); 
router.get('/solicitud_tutor', [validarJWT], obtenerSolicitudesTutores); 
router.get('/solicitud_tutor/:id', [validarJWT], obtenerSolicitudTutorId); 
router.put('/solicitud_tutor/:id', [validarJWT], actualizarSolicitudTutor); 
router.delete('/solicitud_tutor/:id', [validarJWT], eliminarSolicitudTutor); 

module.exports = router;