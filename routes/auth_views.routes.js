'Ruta: /login';
const { Router } = require('express');

const { loginView } = require('../controllers/auth.controller');

const router = Router();

router.get('/', loginView);

module.exports = router;