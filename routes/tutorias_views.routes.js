const { Router } = require('express');
const { servirTutoria, desactivarTodasTutorias} = require('../controllers/tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();
router.get('/', validarJWT, servirTutoria);
//router.get('/', servirSolicitudTutoria);

router.get('/desactivar', validarJWT, desactivarTodasTutorias);

//router.get('/actualizar/:_id', updateHorarioView);

module.exports = router;