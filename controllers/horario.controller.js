const Horario = require('../models/horario.models');
const { request, response } = require('express');

const obtenerHorarios = async (req, res) => {
  try {
    const horarios = await Horario.find();
    res.status(200).json(horarios);
    //return res.render('ver_horarios', {horarios});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener los horarios', error: error.message });
  }
};

const crearHorario = async (req, res) => {
  try {
    const nuevoHorario = new Horario(req.body);
    await nuevoHorario.save();
    return res.status(201).json({ mensaje: 'Horario creado con exito', nuevoHorario});
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

const servirHorarios = async (req = request, res = response) => {
  const horarios = await Horario.find();
  res.render('ver_horarios', {horarios})
};

const crearHorarioView = async (req = request, res = response) => {
  return res.render('crear_horario');
}
module.exports = {
  servirHorarios,
  crearHorarioView,
  obtenerHorarios,
  crearHorario,
  actualizarHorario,
  eliminarHorario
};
