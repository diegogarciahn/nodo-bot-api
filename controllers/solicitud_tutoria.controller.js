const SolicitudTutorias = require('../models/solicitud_tutoria.model.js');

// Controlador para crear una nueva solicitud de tutoría
const crearSolicitudTutoria = async (req, res) => {
  try {
    const nuevaSolicitudTutoria = new SolicitudTutorias({
      estudiante: req.body.estudiante,
      clase: req.body.clase,
      tutor: req.body.tutor,
      estado: req.body.estado,
      horario_solicitado: req.body.horario_solicitado,
    });
    await nuevaSolicitudTutoria.save();
    res.json({ mensaje: 'Solicitud de tutoría creada exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la solicitud de tutoría');
  }
};



// Controlador para obtener todas las solicitudes de tutoría
const obtenerSolicitudesTutorias = async (req, res) => {
  try {
    const solicitudes = await SolicitudTutorias.find().populate('estudiante')
    .populate('clase').populate('tutor').populate('horario_solicitado');
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
  const { id } = req.params;
  const { estudiante, clase, tutor,estado,horario_solicitado } = req.body;
  try {
    const solicitudTutorActualizada = await SolicitudTutor.findByIdAndUpdate(
      id,
      {
        estudiante,
        clase,
        tutor,
        estado,
        horario_solicitado
      },
      { new: true }
    );
    if (!solicitudTutorActualizada) {
      return res.status(404).json({ error: 'Solicitud de tutor no encontrada' });
    }
    res.json(solicitudTutorActualizada);
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