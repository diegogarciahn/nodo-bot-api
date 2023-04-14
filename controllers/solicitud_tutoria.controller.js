const SolicitudTutorias = require('../models/solicitudTutorias.model');

// Controlador para crear una nueva solicitud de tutoría
const crearSolicitudTutoria = async (req, res) => {
  const nuevaSolicitud = new SolicitudTutorias(req.body);

  try {
    const solicitudGuardada = await nuevaSolicitud.save();
    res.status(201).json(solicitudGuardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todas las solicitudes de tutoría
const obtenerSolicitudesTutorias = async (req, res) => {
  try {
    const solicitudes = await SolicitudTutorias.find();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una solicitud de tutoría por su id
const obtenerSolicitudTutoriaId = async (req, res) => {
  try {
    const solicitud = await SolicitudTutorias.findById(req.params.id);
    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(solicitud);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar una solicitud de tutoría por su id
const actualizarSolicitudTutoria = async (req, res) => {
  try {
    const solicitudActualizada = await SolicitudTutorias.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!solicitudActualizada) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(solicitudActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar una solicitud de tutoría por su id
const eliminarSolicitudTutoria = async (req, res) => {
  try {
    const solicitudEliminada = await SolicitudTutorias.findByIdAndDelete(
      req.params.id
    );
    if (!solicitudEliminada) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(solicitudEliminada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    crearSolicitudTutoria,
    obtenerSolicitudesTutorias,
    obtenerSolicitudTutoriaId,
    actualizarSolicitudTutoria,
    eliminarSolicitudTutoria,
  };