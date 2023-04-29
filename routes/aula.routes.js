'Ruta: /api/aulas';
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos.middleware');
const { createAula, getAllAulas, getAulaById, updateAulaById, deleteAulaById } = require('../controllers/aula.controller');
const router = Router();

router.post('/', [
    check('numero', 'El numero de aula es obligatorio.').notEmpty(),
    check('numero', 'El numero de aula es texto.').isString(),
    validarCampos
], createAula);

router.get('/', [
    validarJWT,
], getAllAulas);

router.get('/buscar', [
    validarJWT,

], getAulaById);

router.put('/:_id', [
    check('numero', 'El numero de aula es obligatorio.').notEmpty(),
    check('numero', 'El numero de aula es texto.').isString(),
    validarCampos

], updateAulaById);

router.delete('/:_id', deleteAulaById);

module.exports = router;