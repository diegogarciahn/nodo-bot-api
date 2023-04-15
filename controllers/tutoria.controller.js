const Tutoria = require('../models/tutoria.models');

// Controlador para crear una nueva tutoría
const createTutoria = async (req, res, next) => {
    try{
        const {id, aula, solicitud_tutoria} = req.body;
        const tutoria = new Tutoria({
            id,
            aula,
            solicitud_tutoria,
        });
        const newTutoria = await tutoria.save();
        res.status(201).json(newTutoria);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener todas las tutorías
const getAllTutorias = async (req, res, next) => {
    try{
        const tutorias = await Tutoria.find();
        res.status(200).json(tutorias);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener una tutoría por su ID
const getTutoriaById = async (req, res, next) => {
    try{
        const tutoria = await Tutoria.findById(req.params.id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        res.status(200).json(tutoria);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

// Controlador para actualizar una tutoría existente
const updateTutoria = async (req, res, next) => {
    try{
        const { aula, solicitud_tutoria } = req.body;
        const tutoria = await Tutoria.findById(req.params.id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        tutoria.aula = aula || tutoria.aula;
        tutoria.solicitud_tutoria = solicitud_tutoria || tutoria.solicitud_tutoria;
        const updatedTutoria = await tutoria.save();
        res.status(200).json(updatedTutoria);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

// Controlador para eliminar una tutoría existente
const deleteTutoria = async (req, res, next) => {
    try{
        const tutoria = await Tutoria.findByIdAndDelete(req.params.id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        res.status(200).json({ message: "Tutoría eliminada" });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTutoria,
    getAllTutorias,
    getTutoriaById,
    updateTutoria,
    deleteTutoria
};