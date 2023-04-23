const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
  numero: { type: String, required: true }
},{
  collection: 'aula'
});

const Aula = mongoose.model('Aula', AulaSchema);

module.exports = Aula;
