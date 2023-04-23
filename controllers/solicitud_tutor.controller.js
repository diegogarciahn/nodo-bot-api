const SolicitudTutor = require('../models/solicitud_tutor.model');

const crearSolicitudTutor = async (req, res) => {
  try {
    const nuevaSolicitudTutor = new SolicitudTutor({
      estudiante: req.body.estudiante,
      estado: req.body.estado,
      fecha_hora: req.body.fecha_hora,
      fecha_hora_resuelto: req.body.fecha_hora_resuelto,
      feedback: req.body.feedback
    });
    await nuevaSolicitudTutor.save();
    res.json({ mensaje: 'Solicitud de tutor creada exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la solicitud de tutor');
  }
};

const obtenerSolicitudTutorId = async (req, res) => {
    const { id } = req.params;
    try {
      const solicitudTutor = await SolicitudTutor.findById(id);
      if (!solicitudTutor) {
        return res.status(404).json({ error: 'Solicitud de tutor no encontrada' });
      }
      res.json(solicitudTutor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Controlador para obtener todas las solicitudes de tutoría
const obtenerSolicitudesTutores = async (req, res) => {
    try {
      const solicitudes = await SolicitudTutor.find().populate('estudiante');
      res.json(solicitudes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const actualizarSolicitudTutor = async (req, res) => {
    const { id } = req.params;
    const { estado, fecha_hora_resuelto, feedback } = req.body;
    try {
      const solicitudTutorActualizada = await SolicitudTutor.findByIdAndUpdate(
        id,
        {
          estado,
          fecha_hora_resuelto,
          feedback,
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
  
  const eliminarSolicitudTutor = async (req, res) => {
    const { id } = req.params;
    try {
      const solicitudTutorEliminada = await SolicitudTutor.findByIdAndDelete(id);
      if (!solicitudTutorEliminada) {
        return res.status(404).json({ error: 'Solicitud de tutor no encontrada' });
      }
      res.json(solicitudTutorEliminada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    crearSolicitudTutor,
    obtenerSolicitudTutorId,
    obtenerSolicitudesTutores,
    actualizarSolicitudTutor,
    eliminarSolicitudTutor,
  };