const mongoose = require('mongoose');
const Carrera = require('./carrera.model');

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
    horario: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Horario',
            required: true,
            autopopulate: true
        }
    ],
    telefono: { type: String },
    id_telegram: { type: String },
    horario_solicitado: [{ type: mongoose.Schema.Types.ObjectId,
        ref: 'Horario', 
        required: true, 
        autopopulate: true }],
},{
    collection: 'estudiante',
    timestamp: false
});

// Crear y exportar el modelo
EstudianteSchema.plugin(require('mongoose-autopopulate'));

const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
module.exports = Estudiante;
