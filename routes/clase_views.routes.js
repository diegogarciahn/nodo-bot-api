'Ruta: /clases';
const { Router } = require('express');
const { servirclases, crearClaseView, updateClaseView } = require('../controllers/clase.controller');

const router = Router();

router.get('/', servirclases);
router.get('/create', crearClaseView);
router.get('/update/:_id', updateClaseView);

module.exports = router;