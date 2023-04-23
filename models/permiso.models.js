const mongoose = require('mongoose');

const permisoSchema = new mongoose.Schema({
  nombre_permiso: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
},{
  collection: 'permiso'
});

const Permiso = mongoose.model('Permiso', permisoSchema);

module.exports = Permiso;
