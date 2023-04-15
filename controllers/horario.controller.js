const Horario = require('../models/horario');

const obtenerHorarios = async (req, res) => {
  try {
    const horarios = await Horario.find();
    res.status(200).json({horarios});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener los horarios', error: error.message });
  }
};

const crearHorario = async (req, res) => {
  try {
    const nuevoHorario = new Horario(req.body);
    await nuevoHorario.save();
    res.status(201).json({ mensaje: 'Permiso Creado con exito', horario: nuevoHorario});
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el horario ', error: error.message });
  }
};

const actualizarHorario = async (req, res) => {
  try {
    const horarioActualizado = await Horario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ mensaje: 'Permiso actualizado con exito', horario: horarioActualizado});
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el horario ', error: error.message });
  }
};

const eliminarHorario = async (req, res) => {
  try {
    await Horario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Horario borrado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el horario ', error: error.message });
  }
};

module.exports = {
  obtenerHorarios,
  crearHorario,
  actualizarHorario,
  eliminarHorario
};
