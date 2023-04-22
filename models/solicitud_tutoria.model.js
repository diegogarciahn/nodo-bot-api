const mongoose = require('mongoose');
const Estudiante = require('./estudiante.model');
const Clase = require('./clase.model');
const Tutor = require('./estudiante.model');
const Horario = require('./horario.models');

const Schema = mongoose.Schema;

const solicitudTutoriasSchema = new Schema({
  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
    required: true,
    autopopulate: true
  },
  clase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clase',
    required: true,
    autopopulate: true
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
    required: false,
    autopopulate: true,
    default: null
  },
  estado: { type: String, required: true, default: 0},
  horario_solicitado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Horario',
    required: true,
    autopopulate: true
  },
},{
  collection: 'solicitud_tutoria'
});

solicitudTutoriasSchema.plugin(require('mongoose-autopopulate'));

const SolicitudTutorias = mongoose.model('SolicitudTutorias', solicitudTutoriasSchema);

module.exports = SolicitudTutorias;
