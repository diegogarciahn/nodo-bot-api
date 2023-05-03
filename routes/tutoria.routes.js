'Ruta: /api/tutoria';

const { Router } = require('express');
const controller  = require('../controllers/tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const router = Router();

router.get('/obtenerTutorias',                     controller.getTutorias);
router.get('/obtenerTutoria/:id',                  controller.getTutoria);
router.get('/obtenerTutoriasEstudianteTutor',      controller.getTutoriasEstudianteTutor);
router.get('/obtenerTutoriasEstudianteEstudiante', controller.getTutoriasEstudianteEstudiante);
router.post('/crearTutoria',                       controller.createTutoria);
router.put('/actualizarTutoria/:id',               controller.updateTutoria);
router.put('/desactivarTutorias',                  controller.desactivarTutorias);
router.delete('/deleteTutoria/:id',                controller.deleteTutoria);
router.post('/desactivarTodasTutorias', controller.desactivarTodasTutorias);

module.exports = router;

