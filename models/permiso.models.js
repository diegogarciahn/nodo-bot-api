const mongoose = require('mongoose');

const permisoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  nombre_permiso: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});

const Permiso = mongoose.model('Permiso', permisoSchema);

module.exports = Permiso;
