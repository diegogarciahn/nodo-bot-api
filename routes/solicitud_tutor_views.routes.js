'Ruta: /solicitud_tutor';
const { Router } = require('express');
const { solicitudesTutorView } = require('../controllers/solicitud_tutor.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, solicitudesTutorView);
// router.get('/create', crearClaseView);
// router.get('/update/:_id', updateClaseView);

module.exports = router;