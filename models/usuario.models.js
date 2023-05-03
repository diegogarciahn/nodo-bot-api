const mongoose = require('mongoose');
const Rol = require('./rol.models');

const userSchema = new mongoose.Schema({
    nombre_usuario: String,
    password: String,
    telefono: String
},{
    collection: 'usuario',
    timeseries: false
});

userSchema.plugin(require('mongoose-autopopulate'));

const User = mongoose.model('Usuario', userSchema);

module.exports = User;
