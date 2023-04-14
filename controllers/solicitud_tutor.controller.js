const SolicitudTutor = require('../models/solicitud_tutor.model');

const crearSolicitudTutor = async (req, res) => {
    const { id, estudiante, estado, fecha_hora, feedback} = req.body;
    try {
      const nuevaSolicitudTutor = new SolicitudTutor({
        id, estudiante, estado, fecha_hora, feedback,
      });
      await solicitud_tutor.save();
        return res.status(201).json({ message: 'Solicitud Creada con éxito', solicitud_tutor });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear Solicitud de Tutor ' });
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
const obtenerSolicitudesTutorias = async (req, res) => {
    try {
      const solicitudes = await SolicitudTutor.find();
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
    obtenerSolicitudesTutorias,
    actualizarSolicitudTutor,
    eliminarSolicitudTutor,
  };