const { Router } = require('express');
const { servirTutoria} = require('../controllers/tutoria.controller');

const router = Router();
router.get('/', servirTutoria);

//router.get('/crear', crearHorarioView);

//router.get('/actualizar/:_id', updateHorarioView);

module.exports = router;