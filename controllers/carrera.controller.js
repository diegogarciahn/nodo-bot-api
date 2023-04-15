const Carrera = require('../models/carrera');

// Crear nueva carrera
const createCarrera = async (req, res) => {
    try {
        const carrera = new Carrera(req.body);
        await carrera.save();
        return res.status(201).json({ message: 'Carrera creada con éxito', carrera });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear carrera' });
    }
};

// Obtener todas las carreras
const getAllCarreras = async (req, res) => {
    try {
        const carreras = await Carrera.find();
        return res.status(200).json(carreras);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener carreras' });
    }
};

// Obtener una carrera por ID
const getCarreraById = async (req, res) => {
    try {
        const carrera = await Carrera.findById(req.params.id);
        if (!carrera) {
            return res.status(404).json({ message: 'Carrera no encontrada' });
        }
        return res.status(200).json(carrera);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener carrera' });
    }
};

// Actualizar una carrera por ID
const updateCarreraById = async (req, res) => {
    try {
        const carrera = await Carrera.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!carrera) {
            return res.status(404).json({ message: 'Carrera no encontrada' });
        }
        return res.status(200).json({ message: 'Carrera actualizada con éxito', carrera });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al actualizar carrera' });
    }
};

// Eliminar una carrera por ID
const deleteCarreraById = async (req, res) => {
    try {
        const carrera = await Carrera.findByIdAndDelete(req.params.id);
        if (!carrera) {
            return res.status(404).json({ message: 'Carrera no encontrada' });
        }
        return res.status(200).json({ message: 'Carrera eliminada con éxito', carrera });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al eliminar carrera' });
    }
};

module.exports = {
    createCarrera,
    getAllCarreras,
    getCarreraById,
    updateCarreraById,
    deleteCarreraById,
}