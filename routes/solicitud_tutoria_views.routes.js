const { Router } = require('express');
const { servirSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, servirSolicitudTutoria);
// router.get('/create', crearClaseView);
// router.get('/update/:_id', updateClaseView);

module.exports = router;