const Clase = require('../models/clase.model'); // Importar el modelo de Clase

// Crear una nueva clase
const crearClase = async (req, res) => {
    try {
        const nuevaClase = new Clase(req.body);
        await nuevaClase.save();
        res.status(201).json({ mensaje: 'Clase creada exitosamente', clase: nuevaClase });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la clase', error: error.message });
    }
};

// Leer todas las clases
const obtenerClases = async (req, res) => {
    try {
        const clases = await Clase.find();
        res.status(200).json({ clases });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las clases', error: error.message });
    }
};

// Actualizar una clase por su ID
const actualizarClase = async (req, res) => {
    try {
        const claseActualizada = await Clase.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ mensaje: 'Clase actualizada exitosamente', clase: claseActualizada });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la clase', error: error.message });
    }
};

// Borrar una clase por su ID
const borrarClase = async (req, res) => {
    try {
        await Clase.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Clase borrada exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al borrar la clase', error: error.message });
    }
};

// Exportar las funciones del controlador
module.exports = {
    crearClase,
    obtenerClases,
    actualizarClase,
    borrarClase
};
