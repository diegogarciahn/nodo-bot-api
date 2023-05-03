const Estudiante = require('../models/estudiante.model');

const verificarEstudianteExistente = async (req, res, next) => {
  const { numero_cuenta } = req.body;

  try {
    const estudianteExistente = await Estudiante.findOne({ numero_cuenta });

    if (estudianteExistente) {
      return res.status(409).json({ mensaje: 'El estudiante ya existe' });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al verificar la existencia del estudiante');
  }
};


module.exports = {
    verificarEstudianteExistente
};
