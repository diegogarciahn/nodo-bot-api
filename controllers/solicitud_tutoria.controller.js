const SolicitudTutorias = require('../models/solicitud_tutoria.model.js');

// Controlador para crear una nueva solicitud de tutoría
const crearSolicitudTutoria = async (req, res) => {
  try {
    const nuevaSolicitudTutoria = new SolicitudTutorias({
      estudiante: req.body.estudiante,
      clase: req.body.clase,
      tutor: req.body.tutor,
      horario_solicitado: req.body.horario_solicitado,
      estado:  '0', 
      fecha_hora: req.body.fecha_hora || Date.now(),
      fecha_hora_resuelto: req.body.fecha_hora_resuelto,
      
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

const obtenerSolicitudesPorEstado = async (req, res) => {
  const { estado } = req.params;
  try {
    const solicitudes = await SolicitudTutorias.find({ estado });
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

// Controlador para actualizar una solicitud de tutoría por su id Estudiante
const actualizarSolicitudTutoria = async (req, res) => {
  const { id } = req.params;
  const { estudiante, clase, tutor,horario_solicitado } = req.body;
  try {
    const solicitudTutorActualizada = await SolicitudTutorias.findByIdAndUpdate(
      id,
      {
        estudiante,
        clase,
        tutor,
        horario_solicitado
      },
      { new: true }
    );
    if (!solicitudTutorActualizada) {
      return res.status(404).json({ error: 'Solicitud de tutoria no encontrada' });
    }
    return res.status(200).send('Actualizada con éxito');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarSolicitudTutoriaAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body.estado ) {
      return res.status(400).json({ error: 'El campos estado es obligatorio'});
    }
    const solicitudTutoriaActualizada = await SolicitudTutorias.findByIdAndUpdate(
      id,
      {
        estado: req.body.estado,
        fecha_hora_resuelto: Date.now(),
      },
      { new: true }
    );
    
    if (!solicitudTutoriaActualizada) {
      return res.status(404).json({ error: 'Solicitud de tutoria no encontrada' });
    }
    
    return res.status(200).send('Actualizada con éxito');
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
    return res.status(200).send('Eliminada con éxito');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    crearSolicitudTutoria,
    obtenerSolicitudesTutorias,
    obtenerSolicitudTutoriaId,
    obtenerSolicitudesPorEstado,
    actualizarSolicitudTutoria,
    actualizarSolicitudTutoriaAdmin,
    eliminarSolicitudTutoria,
  };