'Ruta: /api/usuarios';

const { Router } = require('express');
const controller  = require('../controllers/usuarios.controller');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/obtenerUsuarios',       /*[validarJWT],*/   controller.getUsers);
router.get('/obtenerUsuario/:id',    /*[validarJWT],*/   controller.getUser);
router.post('/crearUsuario',         /*[validarJWT],*/   controller.createUser);
router.put('/actualizarUsuario/:id', /*[validarJWT],*/   controller.updateUser);
router.delete('/deleteUsuario/:id',  /*[validarJWT],*/   controller.deleteUser);

module.exports = router;



