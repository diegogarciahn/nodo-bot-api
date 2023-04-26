const mongoose = require('mongoose');

// Definir el esquema del modelo
const EstudianteSchema = new mongoose.Schema({
    numero_cuenta: { type: String, required: true },
    nombre: { type: String, required: true },
    activo: { type: Number, default: 0 },
    tutor: { type: Number, default: 0 },
    estudiante: { type: Number, default: 0 },
    carrera: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrera',
        required: true,
        autopopulate: true
    },
    telefono: { type: String },
    id_telegram: { type: String },
    horario_tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Horario',
        required: true,
        autopopulate: true
    }
},{
    collection: 'estudiante'
});

// Crear y exportar el modelo
const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
module.exports = Estudiante;
