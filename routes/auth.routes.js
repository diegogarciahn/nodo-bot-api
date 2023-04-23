'Ruta: /api/auth';
const { Router } = require('express');
const {login, getUser} = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.post('/', login);
router.get('/', validarJWT, getUser);

module.exports = router;