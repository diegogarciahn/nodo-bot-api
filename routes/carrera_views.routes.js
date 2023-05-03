'Ruta: /clases';
const { Router } = require('express');
const { servirCarreras, crearCarreraView, updateCarreraView } = require('../controllers/carrera.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, servirCarreras);
router.get('/create', validarJWT, crearCarreraView);
router.get('/update/:_id', validarJWT, updateCarreraView);

module.exports = router;
