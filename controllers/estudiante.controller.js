const Estudiante = require('../models/estudiante.model'); // Importar el modelo de Estudiante

// Crear un nuevo estudiante
const crearEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = new Estudiante(req.body);
        await nuevoEstudiante.save();
        return res.status(201).json({
            mensaje: 'Estudiante creado exitosamente', estudiante: nuevoEstudiante
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al crear el estudiante', error: error.message
        });
    }
};

// Leer todos los estudiantes
const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        return res.status(200).json({
            estudiantes
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener los estudiantes', error: error.message
        });
    }
};

// Leer todos los tutores
const obtenerTutores = async (req, res) => {
    try {
        const tutores = await Estudiante.find({
            tutor: 1,
            activo: 1
        });
        return res.status(200).json({
            tutores
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener los tutores', error: error.message
        });
    }
};

// Obtener estudiante por ID
const obtenerEstudiantePorId = async (req, res) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Estudiante no encontrado'
            });
        }
        return res.status(200).json({ estudiante });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener el estudiante', error: error.message
        });
    }
};

// Actualizar un estudiante por su ID
const actualizarEstudiante = async (req, res) => {
    try {
        const estudianteActualizado = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            mensaje: 'Estudiante actualizado exitosamente', estudiante: estudianteActualizado
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al actualizar el estudiante', error: error.message
        });
    }
};

// Borrar un estudiante por su ID
const borrarEstudiante = async (req, res) => {
    try {
        await Estudiante.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            mensaje: 'Estudiante borrado exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al borrar el estudiante', error: error.message
        });
    }
};

// Exportar las funciones del controlador
module.exports = {
    crearEstudiante,
    obtenerEstudiantes,
    obtenerTutores,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    borrarEstudiante
};
