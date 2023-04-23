const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  dia: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
},{
  collection: 'horario'
});

const Horario = mongoose.model('Horario', horarioSchema);

module.exports = Horario;
