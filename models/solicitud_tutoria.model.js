const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solicitudTutoriasSchema = new Schema({
  id: { type: Number, required: true },
  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
    required: true
  },
  clase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clase',
    required: true
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true
  },
  estado: { type: String, required: true },
  horario_solicitado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Horario',
    required: true
  },
},{
  collection: 'solicitud_tutoria'
});

const SolicitudTutorias = mongoose.model('SolicitudTutorias', solicitudTutoriasSchema);

module.exports = SolicitudTutorias;
