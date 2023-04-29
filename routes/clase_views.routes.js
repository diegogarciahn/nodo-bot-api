'Ruta: /clases';
const { Router } = require('express');
const { servirclases } = require('../controllers/clase.controller');

const router = Router();

router.get('/', servirclases);

module.exports = router;