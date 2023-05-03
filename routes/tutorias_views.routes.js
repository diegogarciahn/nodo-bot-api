const { Router } = require('express');
const { servirTutoria, desactivarTodasTutorias} = require('../controllers/tutoria.controller');

const router = Router();
router.get('/', servirTutoria);
//router.get('/', servirSolicitudTutoria);

router.get('/desactivar', desactivarTodasTutorias);

//router.get('/actualizar/:_id', updateHorarioView);

module.exports = router;