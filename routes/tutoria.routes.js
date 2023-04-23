'Ruta: /api/tutoria';

const { Router } = require('express');
const controller  = require('../controllers/tutoria.controller');

const router = Router();

router.get('/obtenerTutorias', controller.getTutorias);
router.get('/obtenerTutoria/:id', controller.getTutoria);
router.post('/crearTutoria', controller.createTutoria);
router.put('/actualizarTutoria/:id', controller.updateTutoria);
//router.patch('/', );
router.delete('/deleteTutoria/:id', controller.deleteTutoria);

module.exports = router;

