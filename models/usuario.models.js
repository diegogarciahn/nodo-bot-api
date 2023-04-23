const mongoose = require('mongoose');
const Rol = require('./rol.models');

const userSchema = new mongoose.Schema({
    nombre_usuario: String,
    password: String,
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rol',
        required: true,
        autopopulate: true
    },
    telefono: String
},{
    collection: 'usuario'
});

userSchema.plugin(require('mongoose-autopopulate'));

const User = mongoose.model('Usuario', userSchema);

module.exports = User;
