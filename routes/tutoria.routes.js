'Ruta: /api/tutoria';

const { Router } = require('express');
const controller  = require('../controllers/tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const router = Router();

router.get('/obtenerTutorias',                                              /*[validarJWT],*/       controller.getTutorias);
router.get('/obtenerTutoriasDisponibles',                                   /*[validarJWT],*/       controller.getTutoriasDisponibles);
router.get('/obtenerTutoria/:id',                                           [validarJWT],           controller.getTutoria);
router.get('/obtenerTutoriasEstudianteTutor/:id_telegram',                  /*[validarJWT],*/       controller.getTutoriasEstudianteTutor);
router.get('/obtenerTutoriasEstudianteEstudiante/:id_telegram',             /*[validarJWT],*/       controller.getTutoriasEstudianteEstudiante);
router.delete('/deleteTutoriaForIdSolicitudTutoria/:id_Solicitud_Tutoria',  /*[validarJWT],*/       controller.deleteTutoriaForIdSolicitudTutoria);
router.post('/crearTutoria',                                                [validarJWT],           controller.createTutoria);
router.put('/actualizarTutoria/:id',                                        [validarJWT],           controller.updateTutoria);
router.delete('/deleteTutoria/:id',                                         [validarJWT],           controller.deleteTutoria);
router.post('/desactivarTodasTutorias', controller.desactivarTodasTutorias);

module.exports = router;

