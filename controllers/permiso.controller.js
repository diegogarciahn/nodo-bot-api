const Permiso = require('../models/permiso.models');

// Controlador para obtener todos los permisos
const obtenerPermisos = async (req, res) => {
  try {
    const permisos = await Permiso.find();
    res.status(200).json(permisos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las permisos', error: error.message });
  }
};

// Controlador para crear un nuevo permiso
const crearPermiso = async (req, res) => {
  try {
    const nuevoPermiso = new Permiso(req.body);
    await nuevoPermiso.save();
    res.status(201).json({ mensaje: 'Permiso Creado con exito', permiso: nuevoPermiso});
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el permiso ', error: error.message });
  }
};

// Controlador para actualizar un permiso existente
const actualizarPermiso = async (req, res) => {
  try {
    const permisoActualizado = await Permiso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ mensaje: 'Permiso actualizado con exito', permiso: permisoActualizado});
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el permiso ', error: error.message });
  }
};

// Controlador para eliminar un permiso existente
const eliminarPermiso = async (req, res) => {
  try {
    await Permiso.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Permiso borrado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el permiso ', error: error.message });
  }
};

module.exports = {
  obtenerPermisos,
  crearPermiso,
  actualizarPermiso,
  eliminarPermiso
};
