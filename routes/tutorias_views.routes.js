const { Router } = require('express');
const { servirTutoria, desactivarTodasTutorias,crearTutoriasView, getTutoriaView} = require('../controllers/tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();
router.get('/', validarJWT, servirTutoria);
router.get('/desactivar', validarJWT, desactivarTodasTutorias);
router.get('/crearTutorias', validarJWT, crearTutoriasView);
router.get('/obtenerTutoria/:_id', validarJWT, getTutoriaView);

//router.get('/actualizar/:_id', updateHorarioView);

module.exports = router;