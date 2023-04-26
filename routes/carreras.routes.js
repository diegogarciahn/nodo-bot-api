'Ruta: /api/carreras';
const { Router } = require('express');

const { createCarrera, getAllCarreras, getCarreraById, updateCarreraById, deleteCarreraById } = require('../controllers/carrera.controller');

const router = Router();

router.post('/', createCarrera);

router.get('/obtenerCarreras', getAllCarreras);

router.get('/buscar', getCarreraById);

router.put('/', updateCarreraById);

router.delete('/', deleteCarreraById);

module.exports = router;