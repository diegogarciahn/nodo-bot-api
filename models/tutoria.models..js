const mongoose = require('mongoose');

const solicitudTutoriaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante',
        required: true
    },
    clase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clase',
        required: true
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    horario_solicitado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HorarioTutoria',
        required: true
    },
    aula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aula',
        required: true
    }
});

module.exports = mongoose.model('SolicitudTutoria', solicitudTutoriaSchema);
