const Tutoria = require('../models/tutoria');

// Controlador para crear una nueva tutoría
const createTutoria = (req, res, next) => {
    const tutoria = new Tutoria(req.body);
    tutoria.save((err) => {
        if (err) return next(err);
        res.json('Tutoría creada correctamente');
    });
};

// Controlador para obtener todas las tutorías
const getAllTutorias = (req, res, next) => {
    Tutoria.find({}, (err, tutorias) => {
        if (err) return next(err);
        res.json(tutorias);
    });
};

// Controlador para obtener una tutoría por su ID
const getTutoriaById = (req, res, next) => {
    Tutoria.findById(req.params.id, (err, tutoria) => {
        if (err) return next(err);
        res.json(tutoria);
    });
};

// Controlador para actualizar una tutoría existente
const updateTutoria = (req, res, next) => {
    Tutoria.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) return next(err);
        res.json('Tutoría actualizada correctamente');
    });
};

// Controlador para eliminar una tutoría existente
const deleteTutoria = (req, res, next) => {
    Tutoria.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.json('Tutoría eliminada correctamente');
    });
};

module.exports = {
    createTutoria,
    getAllTutorias,
    getTutoriaById,
    updateTutoria,
    deleteTutoria
};