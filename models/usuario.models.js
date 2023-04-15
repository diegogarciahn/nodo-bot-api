const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    nombre_usuario: String,
    password: String,
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rol',
        required: true
    },
    telefono: String,
},{
    collection: 'usuario'
});

const User = mongoose.model('Usuario', UserSchema);

module.exports = User;
