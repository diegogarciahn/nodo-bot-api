'Ruta: /api/usuarios';

const { Router } = require('express');
const controller  = require('../controllers/usuarios.controller');

const router = Router();

router.get('/obtenerUsuarios', controller.getUsers);
router.get('/obtenerUsuario/:id', controller.getUser);
router.post('/crearUsuario', controller.createUser);
router.put('/actualizarUsuario/:id', controller.updateUser);
//router.patch('/', );
router.delete('/delete/:id', controller.deleteUser);

module.exports = router;



