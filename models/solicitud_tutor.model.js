const mongoose = require('mongoose');
const Estudiante = require('./estudiante.model');
const Horario = require('./horario.models');
const Clase = require('./clase.model');

const { Schema } = mongoose;

const SolicitudTutorSchema = new Schema({
  estudiante: { type: Schema.Types.ObjectId,
     ref: 'Estudiante', 
     required: true, 
     autopopulate: true },
  clase: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clase',
      required: true,
      autopopulate: true
    },
  horario_solicitado: [{ type: mongoose.Schema.Types.ObjectId,
      ref: 'Horario', 
      required: true, 
      autopopulate: true }],
  estado: { type: String, required: true, default: '0'},
  fecha_hora: { type: Date, required: false },
  fecha_hora_resuelto: { type: Date, required: false , default: null},
  feedback: { type: String,required: false, default: null},
},{
  collection: 'solicitud_tutor'
});

SolicitudTutorSchema.plugin(require('mongoose-autopopulate'));

const SolicitudTutor = mongoose.model('SolicitudTutor', SolicitudTutorSchema);

module.exports = SolicitudTutor;
