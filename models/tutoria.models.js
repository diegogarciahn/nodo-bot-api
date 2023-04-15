const mongoose = require('mongoose');

const TutoriaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    aula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aula',
        required: true
    },
    solicitud_tutoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'solicitud_tutoria',   
        required: true
    },
},{
    collection: 'tutoria'
});

const Tutoria = mongoose.model('Tutoria', TutoriaSchema);
module.exports = Tutoria;
