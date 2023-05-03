const Tutoria = require('../models/tutoria.models');
const SolicitudTutorias = require('../models/solicitud_tutoria.model.js');
const Estudiante = require('../models/estudiante.model');
const Aula = require('../models/aula.model');
const {
    request,
    response
} = require('express');

// Controlador para obtener todas las tutorías de un estudiante tutor
const getTutoriasEstudianteTutor = async (req, res, next) => {
    try {
        const id_telegram = req.params.id_telegram;
        const estud = await Estudiante.findOne({
            id_telegram: id_telegram.trim()
        });
        if (!estud) {
            return res.status(401).json({
                message: 'No se encontró ningún estudiante con el id_telegram proporcionado.'
            });
        }
        const idTutor = estud._id.valueOf();
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        if (!tutorias) {
            return res.status(404).json({
                message: 'Usted es un estudiante por lo tanto no ah impartido una tutoria'
            });
        }
        const tutoriasAgrupadas = {};
        tutorias.forEach(tutoria => {
            const tutor = tutoria.solicitud_tutoria.tutor;
            const clase = tutoria.solicitud_tutoria.clase;
            const active = tutoria.activa;
            if (tutor._id.valueOf() === idTutor) {
                const claveAgrupacion = `${tutor.numero_cuenta}-${clase._id}`;
                if (!tutoriasAgrupadas[claveAgrupacion]) {
                    tutoriasAgrupadas[claveAgrupacion] = {
                        numerocuenta: tutor.numero_cuenta,
                        nombretutor: tutor.nombre,
                        clase: clase.nombre_clase,
                        codigoclase: clase.codigo_clase,
                        activa: active
                    };
                }
            }
        });
        const respuesta = Object.values(tutoriasAgrupadas);
        // Ordenar por la propiedad activa (true al inicio)
        respuesta.sort((a, b) => b.activa - a.activa);
        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: "Usted es un estudiante por lo tanto no ah impartido una tutoria"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para obtener todas las tutorías de un estudiante estudiante
const getTutoriasEstudianteEstudiante = async (req, res, next) => {
    try {
        const id_telegram = req.params.id_telegram;
        const estud = await Estudiante.findOne({
            id_telegram: id_telegram.trim()
        });
        if (!estud) {
            return res.status(401).json({
                message: 'No se encontró ningún estudiante con el id_telegram proporcionado.'
            });
        }
        const idEstudiante = estud._id.valueOf();
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        const tutoriasAgrupadas = {};
        tutorias.forEach(tutoria => {
            const tutor = tutoria.solicitud_tutoria.tutor;
            const aula = tutoria.aula.numero;
            const horario = tutoria.solicitud_tutoria.horario_solicitado;
            const estudiante = tutoria.solicitud_tutoria.estudiante;
            const clase = tutoria.solicitud_tutoria.clase;
            const active = tutoria.activa;
            if (estudiante._id.toString() === idEstudiante) {
                const claveAgrupacion = `${estudiante.numero_cuenta}-${clase._id}`;
                if (!tutoriasAgrupadas[claveAgrupacion]) {
                    tutoriasAgrupadas[claveAgrupacion] = {
                        numerocuenta: estudiante.numero_cuenta,
                        nombreestudiante: estudiante.nombre,
                        clase: clase.nombre_clase,
                        codigoclase: clase.codigo_clase,
                        dia: horario[0].dia,
                        hora: horario[0].hora,
                        aula: aula,
                        nombretutor: tutor.nombre,
                        numerocuentatutor: tutor.numero_cuenta,
                        activa: active
                    };
                }
            }
        });
        const respuesta = Object.values(tutoriasAgrupadas);

        // Ordenar por la propiedad activa (true al inicio)
        respuesta.sort((a, b) => b.activa - a.activa);
        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: "Usted es un tutor por lo tanto no ah recibido ninguna tutoria"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
// Controlador para obtener todas las tutorías
const getTutorias = async (req, res, next) => {
    try {
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        res.status(200).json(tutorias);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para obtener una tutoría por su ID
const getTutoria = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findById(req.params.id);
        if (!tutoria) {
            return res.status(404).json({
                message: "Tutoría no encontrada"
            });
        }
        res.status(200).json(tutoria);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para obtener todas las tutorías disponibles
const getTutoriasDisponibles = async (req, res, next) => {
    try {
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        const tutoriasActivas = tutorias.filter(tutoria => tutoria.activa === true);
        if (tutoriasActivas.length > 0) {
            res.status(200).json(tutoriasActivas);
        } else {
            res.status(404).json({
                message: "No hay tutorías activas disponibles"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para crear una nueva tutoría
const createTutoria = async (req, res, next) => {
    try {
        const {
            aula,
            solicitud_tutoria
        } = req.body;
        if (!aula || !solicitud_tutoria) {
            return res.status(400).json({
                error: 'Los parámetros aula y solicitud_tutoria son requeridos.'
            });
        }
    // Buscar la solicitud de tutoría correspondiente
    const solicitud = await SolicitudTutorias.findById(solicitud_tutoria);
    if (!solicitud) {
    console.log(solicitud_tutoria)
      return res.status(404).json({
        error: 'No se encontró la solicitud de tutoría.'
      });
    }
    // Actualizar el estado de la solicitud de tutoría a "creada"
    solicitud.estado = '0';
    await solicitud.save();
    // Crear la tutoría
        const tutoria = new Tutoria({
            aula,
            solicitud_tutoria,
        });
        const newTutoria = await tutoria.save();
        res.status(201).json(newTutoria);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para actualizar una tutoría existente
const updateTutoria = async (req, res, next) => {
    try {
        const {
            aula,
            solicitud_tutoria
        } = req.body;
        const tutoria = await Tutoria.findById(req.params._id);
        if (!tutoria) {
            return res.status(404).json({
                message: "Tutoría no encontrada"
            });
        }
        tutoria.aula = aula || tutoria.aula;
        tutoria.solicitud_tutoria = solicitud_tutoria || tutoria.solicitud_tutoria;
        const updatedTutoria = await tutoria.save();
        res.status(200).json(updatedTutoria);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

// Controlador para eliminar una tutoría existente
const deleteTutoria = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findByIdAndDelete(req.params.id);
        if (!tutoria) {
            return res.status(404).json({
                message: "Tutoría no encontrada"
            });
        }
        res.status(200).json({
            message: "Tutoría eliminada"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const deleteTutoriaForIdSolicitudTutoria = async (req, res, next) => {
    try {
        const id_Solicitud_Tutoria = req.params.id_Solicitud_Tutoria;
        const tutoria = await Tutoria.findOne({solicitud_tutoria: id_Solicitud_Tutoria});
        if (!tutoria) {
            return res.status(404).json({
                message: "Tutoría no encontrada"
            });
        }
        const deleteTutoria = await Tutoria.findOneAndDelete({solicitud_tutoria: id_Solicitud_Tutoria});
        if(!deleteTutoria){
            return res.status(404).json({
                message: "Ocurreio un error en el proceso de eliminacion!"
            })
        }
        res.status(200).json({
            message: "Tutoría eliminada"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Controlador para eliminar una tutoría existente
const desactivarTutorias = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findByIdAndUpdate(req.params.id, {
            activa: 0
        });

        res.status(200).json({
            message: "Tutoría eliminada"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const servirTutoria = async (req = request, res = response) => {
    const tutorias = await Tutoria.find();
    const solicitudTutorias = await SolicitudTutorias.find();
    res.render('tutorias', {
        tutorias,
        solicitudTutorias
    });
};


// --> Controladores para las vistas 
//
//
//Contralador para desactivar todas las tutorias
const desactivarTodasTutorias = async (req = request, res = response) => {
    try {
        const tutorias = await Tutoria.updateMany({}, {
            activa: false
        });
        console.log(res.status(200).json({
            message: 'Tutorias desactivadas'
        }));
        return res.render('tutorias', {
            tutorias
        })
    } catch (error) {
        console.log(error);
        return res.render('tutorias')
    }
}

//Aceptar las tutorias una vez dando aprobar
const crearTutoriasView = async (req = request, res = response) => {
    const aula = await Aula.find();
    res.render('aceptar_tutorias', { aula});
  }

//Vista Aceptar Tutorias obtiene la tutoria que le esto pasando el ID en la URL 
const getTutoriaView = async (req = request, res = response) => {
    const aula = await Aula.find();
    const solicitudTutoria = await SolicitudTutorias.findById(req.params._id);
    res.render('aceptar_tutorias', { aula, solicitudTutoria  });
};

module.exports = {
    getTutoriasEstudianteTutor,
    getTutoriasEstudianteEstudiante,
    getTutorias,
    getTutoria,
    getTutoriasDisponibles,
    createTutoria,
    updateTutoria,
    deleteTutoria,
    deleteTutoriaForIdSolicitudTutoria,
    desactivarTutorias,
    servirTutoria,
    desactivarTodasTutorias,
    // servirSolicitudTutoria
    crearTutoriasView,
    getTutoriaView
};