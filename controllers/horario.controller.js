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

const obtenerHorarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const horario = await Horario.findById(id);
    if (!horario) {
      return res.status(404).json({ mensaje: 'Horario no encontrado' });
    }
    res.status(200).json(horario);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener el horario', error: error.message });
  }
};

const obtenerHorarioPorDia = async (req, res) => {
  try {
    const {diaa} = req.params;
    const horarios = await Horario.find({ dia: diaa.trim()} );
    console.log(diaa.trim())
    if (!horarios.length) {
      return res.status(404).json({ mensaje: 'Horario no encontrado' });
    }

    res.status(200).json({horarios});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener el horario', error: error.message });
  }
};

const obtenerDiasDeHorario = async (req, res) => {
  try {
    const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const diasEnBD = await Horario.distinct('dia');
    const dias = diasEnBD.filter(dia => diasDeLaSemana.includes(dia)).sort((a, b) => diasDeLaSemana.indexOf(a) - diasDeLaSemana.indexOf(b));

    if (!dias.length) {
      return res.status(404).json({ mensaje: 'No se encontraron días en el horario.' });
    }

    res.status(200).json({ dias });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener los días del horario', error: error.message });
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
  const id = req.params._id;
  const idSinEspacios = id.trim();
  try {
    const horario = await Horario.findByIdAndUpdate(idSinEspacios, req.body, { new: true });
    if(!horario){
      return res.status(404).json({ message: 'hoario no encontrado'});
    }
    return res.status(200).json({ mensaje: 'Horario actualizado con exito', horario});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error al actualizar el horario '});
  }
};

const eliminarHorario = async (req = request, res) => {
  const id = req.params._id;
  const idSinEspacios = id.trim();
  try {
    const horario = await Horario.findByIdAndDelete(idSinEspacios);
    if (!horario){
      return res.status(404).json({message: 'Horario no encontrado'});
    }
    return res.status(200).json({ mensaje: 'Horario borrado exitosament', horario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error al eliminar el horario ', error: error.message });
  }
};

const servirHorarios = async (req = request, res = response) => {
  const horarios = await Horario.find();
  res.render('ver_horarios', {horarios})
};

const crearHorarioView = async (req = request, res = response) => {
  return res.render('crear_horario');
}

const updateHorarioView = async (req = request, res = response) => {
  const horario = await Horario.findById(req.params._id);

  return res.render('update_horario', { horario });
}
module.exports = {
  servirHorarios,
  crearHorarioView,
  obtenerHorarios,
  crearHorario,
  actualizarHorario,
  obtenerHorarioPorId,
  obtenerHorarioPorDia,
  updateHorarioView,
  eliminarHorario,
  obtenerDiasDeHorario
};
