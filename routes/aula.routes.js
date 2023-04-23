'Ruta: /api/aula';
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { createAula, getAllAulas, getAulaById, updateAulaById, deleteAulaById } = require('../controllers/aula.controller');
const router = Router();

router.post('/', [
    validarJWT,
    check('numero', 'El numero de aula es obligatorio.').notEmpty(),
    check('numero', 'El numero de aula es texto.').isString(),
], createAula);

router.get('/', [
    validarJWT,
    
], getAllAulas);

router.get('/buscar', [
    validarJWT,
    
], getAulaById);

router.put('/', [
    validarJWT,
    
], updateAulaById);

router.delete('/', [
    validarJWT,
    
], deleteAulaById);

module.exports = router;