const Estudiante = require('../models/estudiante.model'); // Importar el modelo de Estudiante
const Carrera = require('../models/carrera.model');

// Crear un nuevo estudiante
const crearEstudiante = async (req, res) => {
    try {
        const { numero_cuenta, nombre, carrera, telefono, id_telegram } = req.body;
        if (!numero_cuenta || !nombre || !carrera) {
            return res.status(400).json({ mensaje: 'Debe proporcionar número de cuenta, nombre y carrera' });
        }
        const carreraExiste = await Carrera.findById(carrera);
        if (!carreraExiste) {
            return res.status(404).json({ mensaje: 'La carrera proporcionada no existe' });
        }
        const nuevoEstudiante = new Estudiante({
            numero_cuenta,
            nombre,
            estado: '0',
            tutor: '0',
            estudiante: '0',
            carrera,
            telefono,
            id_telegram
        });
        await nuevoEstudiante.save();
        res.json({ mensaje: 'Estudiante creado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el estudiante');
    }
};

const obtenerEstudiantePorTelegramId = async (req, res) => {
    try {
        const id_telegram = req.params.id_telegram;
        const estudiante = await Estudiante.findOne({ id_telegram: id_telegram })
            .populate('carrera', 'nombre_carrera'); // Popula el campo carrera y solo trae el nombre de la carrera

        if (!estudiante) {
            return res.status(404).json({ message: 'No se encontró ningún estudiante con el id_telegram proporcionado.' });
        }

        return res.json(estudiante);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener el estudiante.' });
    }
};

// Leer todos los estudiantes
const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({
            activo: 1
        });
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

const obtenerEstudiantesNoTutores = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({
            tutor: 0,
            activo: 1
        });
        return res.status(200).json({
            estudiantes
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener los estudiantes', error: error.message
        });
    }
};

// Obtener estudiante por ID
const obtenerEstudiantePorId = async (req, res) => {
    try {
        const estudiante = await Estudiante.findById(req.query.id);
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
        const estudianteActualizado = await Estudiante.findByIdAndUpdate(req.query.id, req.body, { new: true });
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
        await Estudiante.findByIdAndDelete(req.query.id);
        return res.status(200).json({
            mensaje: 'Estudiante borrado exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al borrar el estudiante', error: error.message
        });
    }
};

const servirEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({
            activo: 1
        });
        return res.render('verclases');
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener los estudiantes', error: error.message
        });
    }
}

// Exportar las funciones del controlador
module.exports = {
    crearEstudiante,
    obtenerEstudiantes,
    obtenerTutores,
    obtenerEstudiantesNoTutores,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    obtenerEstudiantePorTelegramId,
    borrarEstudiante,
    servirEstudiantes
};
