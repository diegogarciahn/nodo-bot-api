const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  dia: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
});

const Horario = mongoose.model('Horario', horarioSchema);

module.exports = Horario;
