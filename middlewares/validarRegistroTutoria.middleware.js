const SolicitudTutorias = require('../models/solicitud_tutoria.model');


const validarEstudianteEnClase = async (req, res, next) => {
  const { estudiante, clase } = req.body;
  const solicitudesAnteriores = await SolicitudTutorias.find({ estudiante, clase });
  if (solicitudesAnteriores.length > 0) {
    return res.status(400).json({ mensaje: 'El estudiante ya se ha registrado anteriormente en la misma clase' });
  }
  next();
};

module.exports = {
  validarEstudianteEnClase,
};
