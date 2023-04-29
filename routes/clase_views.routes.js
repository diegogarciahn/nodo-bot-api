'Ruta: /clases';
const { Router } = require('express');
const { servirclases, crearClaseView } = require('../controllers/clase.controller');

const router = Router();

router.get('/', servirclases);
router.get('/create', crearClaseView);

module.exports = router;