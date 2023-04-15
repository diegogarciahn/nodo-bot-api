const mongoose = require('mongoose');

// Definir el esquema del modelo
const ClaseSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nombre_clase: { type: String, required: true },
    codigo_clase: { type: String, required: true },
    carrera: [{ type: String }]
});

// Crear y exportar el modelo
const Clase = mongoose.model('Clase', ClaseSchema);
module.exports = Clase;
