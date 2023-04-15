const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  numero: { type: String, required: true }
});

const Aula = mongoose.model('Aula', AulaSchema);

module.exports = Aula;
