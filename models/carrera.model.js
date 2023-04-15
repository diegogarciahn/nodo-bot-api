const mongoose = require('mongoose');

const CarreraSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nombre_carrera: { type: String, required: true }
});

const Carrera = mongoose.model('Carrera', CarreraSchema);

module.exports = Carrera;