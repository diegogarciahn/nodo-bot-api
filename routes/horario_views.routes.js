const { Router } = require('express');
const { servirHorarios, crearHorarioView, updateHorarioView } = require('../controllers/horario.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();
router.get('/', validarJWT, servirHorarios);

router.get('/crear', validarJWT, crearHorarioView);

router.get('/actualizar/:_id', validarJWT, updateHorarioView);

module.exports = router;