'Ruta: /login';
const { Router } = require('express');

const { loginView } = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', loginView);

module.exports = router;