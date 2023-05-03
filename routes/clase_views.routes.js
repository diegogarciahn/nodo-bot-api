'Ruta: /clases';
const { Router } = require('express');
const { servirclases, crearClaseView, updateClaseView } = require('../controllers/clase.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, servirclases);
router.get('/create', validarJWT, crearClaseView);
router.get('/update/:_id', validarJWT, updateClaseView);

module.exports = router;
