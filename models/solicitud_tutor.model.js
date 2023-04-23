const mongoose = require('mongoose');
const Estudiante = require('./estudiante.model');

const { Schema } = mongoose;

const SolicitudTutorSchema = new Schema({
  estudiante: { type: Schema.Types.ObjectId, ref: 'Estudiante', required: true, autopopulate: true },
  estado: { type: String, required: true },
  fecha_hora: { type: Date, required: true,default: null },
  fecha_hora_resuelto: { type: Date, required: false,default: null },
  feedback: { type: String,required: false, default: null },
},{
  collection: 'solicitud_tutor'
});

SolicitudTutorSchema.plugin(require('mongoose-autopopulate'));

const SolicitudTutor = mongoose.model('SolicitudTutor', SolicitudTutorSchema);

module.exports = SolicitudTutor;
