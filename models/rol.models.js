const mongoose = require('mongoose');

const permisoSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nombre_permiso: { type: String, required: true },
  descripcion: { type: String }
});

const rolSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nombre_rol: { type: String, required: true },
  permisos: [permisoSchema]
},{
  collection: 'rol'
});

const Rol = mongoose.model('Rol', rolSchema);

module.exports = Rol;