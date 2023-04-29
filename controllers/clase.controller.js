const Clase = require('../models/clase.model'); // Importar el modelo de Clase
const Carrera = require('../models/carrera.model'); // Importar el modelo de Clase

// Crear una nueva clase
const crearClase = async (req, res) => {
    try {
        const nuevaClase = new Clase(req.body);
        await nuevaClase.save();
        return res.status(201).json({
            mensaje: 'Clase creada exitosamente',
            clase: nuevaClase
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al crear la clase',
            error: error.message
        });
    }
};

// Obtener todas las clases
const obtenerClases = async (req, res) => {
    try {
        const clases = await Clase.find();

        if (clases.length === 0) {
            return res.status(404).json({
                msg: 'No hay clases'
            });
        }

        return res.status(200).json(
            clases
        );
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener las clases', error: error.message
        });
    }
};

// Obtener una clase por su ID
const obtenerClasePorId = async (req, res) => {
    try {
        const clase = await Clase.findById(req.params.id);
        if (!clase) {
            return res.status(404).json({
                mensaje: 'Clase no encontrada'
            });
        }
        return res.status(200).json({
            clase
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al obtener la clase', error: error.message
        });
    }
};

// Actualizar una clase por su ID
const actualizarClase = async (req, res) => {
    try {
        const claseActualizada = await Clase.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            mensaje: 'Clase actualizada exitosamente', clase: claseActualizada
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al actualizar la clase', error: error.message
        });
    }
};

// Borrar una clase por su ID
const borrarClase = async (req, res) => {
    try {
        await Clase.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            mensaje: 'Clase borrada exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al borrar la clase', error: error.message
        });
    }
};

const servirclases = async (req = request, res = response) => {
    const clases = await Clase.find();
    return res.render('verclases', { clases });
}

const crearClaseView = async (req = request, res = response) => {
    const carreras = await Carrera.find();
    return res.render('crearclase', {carreras});
}

const updateClaseView = async (req = request, res = response) => {
    const clase = await Clase.findById(req.params._id);
    const carreras = await Carrera.find();

    return res.render('updateclase', {clase, carreras});
}

// Exportar las funciones del controlador
module.exports = {
    crearClase,
    obtenerClases,
    obtenerClasePorId,
    actualizarClase,
    borrarClase,
    servirclases,
    crearClaseView,
    updateClaseView
};
