const Aula = require('../models/aula.model');
const { request, response } = require('express');

// Crear nueva aula
const createAula = async (req = request, res) => {

    try {
        const aula = new Aula(req.body);
        await aula.save();
        return res.status(201).json({ message: 'Aula creada con éxito', aula });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear aula' });
    }
};

// Obtener todas las aulas
const getAllAulas = async (req, res) => {
    try {
        const aulas = await Aula.find();

        if (aulas.length === 0) {
            return res.status(404).json({
                msg: 'No hay aulas'
            });
        }

        return res.status(200).json(aulas);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener aulas' });
    }
};

// Obtener una aula por ID
const getAulaById = async (req, res) => {
    try {
        const aula = await Aula.findById(req.query.id);
        if (!aula) {
            return res.status(404).json({ message: 'Aula no encontrada' });
        }
        return res.status(200).json(aula);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener aula' });
    }
};

// Actualizar una aula por ID
const updateAulaById = async (req, res) => {

    try {
        const aula = await Aula.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        });
        if (!aula) {
            return res.status(404).json({ message: 'Aula no encontrada' });
        }
        return res.status(200).json({ message: 'Aula actualizada con éxito', aula });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al actualizar aula' });
    }
};

// Eliminar una aula por ID
const deleteAulaById = async (req = request, res) => {
    try {
        const aula = await Aula.findByIdAndDelete(req.params._id);
        if (!aula) {
            return res.status(404).json({ message: 'Aula no encontrada' });
        }
        return res.status(200).json({ message: 'Aula eliminada con éxito', aula });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al eliminar aula' });
    }
};

const servirAulas = async (req = request, res = response) => {
    const aulas = await Aula.find();
    return res.render('ver_aulas', { aulas })
}

const crearAulaView = async (req = request, res = response) => {
    return res.render('crear_aula');
}

const updateAulaView = async (req = request, res = response) => {
    const aula = await Aula.findById(req.params._id);

    return res.render('update_aula', { aula });
}

module.exports = {
    createAula,
    getAllAulas,
    getAulaById,
    updateAulaById,
    deleteAulaById,
    servirAulas,
    crearAulaView,
    updateAulaView
}