const { Router } = require('express');
const { servirHorarios, crearHorarioView,updateHorarioView } = require('../controllers/horario.controller');

const router = Router();
router.get('/', servirHorarios);

router.get('/crear', crearHorarioView);

router.get('/actualizar/:_id', updateHorarioView);

module.exports = router;