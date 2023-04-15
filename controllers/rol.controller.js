const Rol = require('../models/rol');

// Controlador para obtener todos los roles
exports.obtenerRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al obtener los roles' });
  }
}

// Controlador para obtener un rol específico
exports.obtenerRol = async (req, res) => {
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
exports.crearRol = async (req, res) => {
  const { id, nombre_rol, permisos } = req.body;
  try {
    const nuevoRol = new Rol({ id, nombre_rol, permisos });
    await nuevoRol.save();
    res.status(201).json({ mensaje: 'Rol creado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al crear el rol' });
  }
}

// Controlador para actualizar un rol existente
exports.actualizarRol = async (req, res) => {
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
exports.eliminarRol = async (req, res) => {
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