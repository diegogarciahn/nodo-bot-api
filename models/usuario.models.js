const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    nombre_usuario: String,
    password: String,
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rol',
    },
    telefono: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
