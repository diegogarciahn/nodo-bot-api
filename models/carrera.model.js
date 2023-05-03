const mongoose = require('mongoose');

const CarreraSchema = new mongoose.Schema({
  nombre_carrera: { type: String, required: true }
},{
  collection: 'carrera'
});

const Carrera = mongoose.model('Carrera', CarreraSchema);

module.exports = Carrera;