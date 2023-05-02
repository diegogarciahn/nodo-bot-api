const { Router } = require('express');
const { servirSolicitudTutoria } = require('../controllers/solicitud_tutoria.controller');

const router = Router();

router.get('/', servirSolicitudTutoria);
// router.get('/create', crearClaseView);
// router.get('/update/:_id', updateClaseView);

module.exports = router;