const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { crearSolicitudTutor, obtenerSolicitudTutorId, obtenerSolicitudesTutores,obtenerSolicitudesPorClase, actualizarSolicitudTutor, eliminarSolicitudTutor } = require('../controllers/solicitud_tutor.controller'); 

router.post('/crearSolicitudTutor', /*[validarJWT],*/ crearSolicitudTutor); 
router.get('/obtenerSolicitudesTutores',/*[validarJWT],*/ obtenerSolicitudesTutores); 
router.get('/obtenerSolicitudTutor/:id', [validarJWT], obtenerSolicitudTutorId); 
router.get('/obtenerSolicitudTutorClase/:clase', /*[validarJWT],*/obtenerSolicitudesPorClase); 
router.put('/actualizarSolicitudTutor/:id',/*[validarJWT],*/actualizarSolicitudTutor); 
router.delete('/eliminarSolicitudTutor/:id', [validarJWT],eliminarSolicitudTutor); 

module.exports = router;