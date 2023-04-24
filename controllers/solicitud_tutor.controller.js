const SolicitudTutor = require('../models/solicitud_tutor.model');

const crearSolicitudTutor = async (req, res) => {
  try {
    const { estudiante, clase, horario_solicitado } = req.body;
    if (!estudiante || !clase || !horario_solicitado) {
      return res.status(400).json({ mensaje: 'Debe proporcionar estudiante, clase y horario_solicitado' });
    }
    const nuevaSolicitudTutor = new SolicitudTutor({
      estudiante,
      clase,
      horario_solicitado,
      estado: '0', 
      fecha_hora: req.body.fecha_hora || Date.now(),
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
    console.log(req.params);
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

  const obtenerSolicitudesPorEstado = async (req, res) => {
    const { estado } = req.params;
    try {
      const solicitudes = await SolicitudTutor.find({ estado });
      res.json(solicitudes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  // Controlador para obtener todas las solicitudes de tutoría
const obtenerSolicitudesTutores = async (req, res) => {
    try {
      const solicitudes = await SolicitudTutor.find().populate('estudiante').populate('clase').populate('horario_solicitado');
      res.json(solicitudes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const actualizarSolicitudTutor = async (req, res) => {
    const { id } = req.params;
    try {
      // Validar que los campos estado y feedback estén presentes y tengan algún valor
      if (!req.body.estado || !req.body.feedback) {
        return res.status(400).json({ error: 'Los campos estado y feedback son obligatorios'});
      }
      
      const solicitudTutorActualizada = await SolicitudTutor.findByIdAndUpdate(
        id,
        {
          estado: req.body.estado,
          fecha_hora_resuelto: Date.now(),
          feedback: req.body.feedback
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
    obtenerSolicitudesPorEstado,
    actualizarSolicitudTutor,
    eliminarSolicitudTutor,
  };