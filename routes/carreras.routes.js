'Ruta: /api/carreras';
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const { createCarrera, getAllCarreras, getCarreraById, updateCarreraById, deleteCarreraById } = require('../controllers/carrera.controller');

const router = Router();

router.post('/', createCarrera);

router.get('/obtenerCarreras', getAllCarreras);

router.get('/buscar', getCarreraById);

router.put('/:id', updateCarreraById);

router.delete('/:id', deleteCarreraById);

module.exports = router;