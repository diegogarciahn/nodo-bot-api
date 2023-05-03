'Ruta: /images';
const { Router } = require('express');
const { getImages } = require('../controllers/images.controller');

const router = Router();

router.get('/:urlImage', getImages);

module.exports = router;