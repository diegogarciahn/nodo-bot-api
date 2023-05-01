const mongoose = require('mongoose');

// Definir el esquema del modelo
const ClaseSchema = new mongoose.Schema({
    nombre_clase: { type: String, required: true },
    codigo_clase: { type: String, required: true },
    carrera: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrera',
        required: true,
        autopopulate: true
    }
},{
    collection: 'clase',
    timestamp: false
});

ClaseSchema.plugin(require('mongoose-autopopulate'));

// Crear y exportar el modelo
const Clase = mongoose.model('Clase', ClaseSchema);
module.exports = Clase;
