'Ruta: /aulas';
const { Router } = require('express');
const { servirAulas, crearAulaView, updateAulaView } = require('../controllers/aula.controller');

const router = Router();
router.get('/', servirAulas);

router.get('/crear', crearAulaView);

router.get('/actualizar/:_id', updateAulaView);

module.exports = router;