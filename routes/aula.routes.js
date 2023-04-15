'Ruta: /PATH DEL END POINT';
const { Router } = require('express');
const { createAula, getAllAulas, getAulaById, updateAulaById, deleteAulaById } = require('../controllers/aula.controller');
const router = Router();

router.post('/', createAula);

router.get('/', getAllAulas);

router.get('/buscar', getAulaById);

router.put('/', updateAulaById);

router.delete('/', deleteAulaById);

module.exports = router;