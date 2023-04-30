const { Router } = require('express');
const { servirHorarios, crearHorarioView } = require('../controllers/horario.controller');

const router = Router();
router.get('/', servirHorarios);

router.get('/crear', crearHorarioView);

//router.get('/actualizar/:_id', updateAulaView);

module.exports = router;