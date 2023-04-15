const mongoose = require('mongoose');

const { Schema } = mongoose;

const SolicitudTutorSchema = new Schema({
  id: { type: Number, required: true },
  estudiante: { type: Schema.Types.ObjectId, ref: 'Estudiante', required: true },
  estado: { type: String, required: true },
  fecha_hora: { type: Date, required: true },
  fecha_hora_resuelto: { type: Date },
  feedback: { type: String },
});

const SolicitudTutor = mongoose.model('SolicitudTutor', SolicitudTutorSchema);

module.exports = SolicitudTutor;
