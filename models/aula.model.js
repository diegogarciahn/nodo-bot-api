const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  numero: { type: String, required: true }
},{
  collection: 'aula'
});

const Aula = mongoose.model('Aula', AulaSchema);

module.exports = Aula;
