const mongoose = require('mongoose');
const Aula = require('./aula.model');
const SolicitudTutoria = require('./solicitud_tutoria.model');

const TutoriaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    aula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aula',
        required: true,
        autopopulate: true
    },
    solicitud_tutoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SolicitudTutorias',   
        required: true,
        autopopulate: true
    },
},{
    collection: 'tutoria'
});

TutoriaSchema.plugin(require('mongoose-autopopulate'));

const Tutoria = mongoose.model('Tutoria', TutoriaSchema);
module.exports = Tutoria;
