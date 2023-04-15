const Rol = require('../models/rol.model');

// Controlador para obtener todos los roles
const obtenerRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al obtener los roles' });
  }
}

// Controlador para obtener un rol específico
const obtenerRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findOne({ id });
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    res.status(200).json(rol);
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al obtener el rol' });
  }
}

// Controlador para crear un nuevo rol
const crearRol = async (req, res) => {
  const { id, nombre_rol, permisos } = req.body;
  try {
    const nuevoRol = new Rol({ id, nombre_rol, permisos });
    await nuevoRol.save();
    res.status(201).json({ mensaje: 'Rol creado con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al crear el rol' });
  }
}

// Controlador para actualizar un rol existente
const actualizarRol = async (req, res) => {
  const { id } = req.params;
  const { nombre_rol, permisos } = req.body;
  try {
    const rol = await Rol.findOneAndUpdate({ id }, { nombre_rol, permisos });
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    res.status(200).json({ mensaje: 'Rol actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el rol' });
  }
}

// Controlador para eliminar un rol existente
const eliminarRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findOneAndDelete({ id });
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    res.status(200).json({ mensaje: 'Rol eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el rol' });
  }
}
module.exports = {
    obtenerRoles,
    obtenerRol,
    crearRol,
    actualizarRol,
    eliminarRol
}