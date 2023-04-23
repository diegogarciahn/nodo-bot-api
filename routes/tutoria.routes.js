'Ruta: /api/tutoria';

const { Router } = require('express');
const controller  = require('../controllers/tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const router = Router();

router.get('/obtenerTutorias',       [validarJWT],    controller.getTutorias);
router.get('/obtenerTutoria/:id',    [validarJWT],    controller.getTutoria);
router.post('/crearTutoria',         [validarJWT],    controller.createTutoria);
router.put('/actualizarTutoria/:id', [validarJWT],    controller.updateTutoria);
router.delete('/deleteTutoria/:id',  [validarJWT],    controller.deleteTutoria);

module.exports = router;

