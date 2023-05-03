'Ruta: /aulas';
const { Router } = require('express');
const { servirAulas, crearAulaView, updateAulaView } = require('../controllers/aula.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();
router.get('/', validarJWT, servirAulas);

router.get('/crear', crearAulaView);

router.get('/actualizar/:_id', updateAulaView);

module.exports = router;