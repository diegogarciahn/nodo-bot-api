const Tutoria = require('../models/tutoria.models');
const SolicitudTutorias = require('../models/solicitud_tutoria.model.js');
const Estudiante = require('../models/estudiante.model');
const { request, response } = require('express');

// Controlador para obtener todas las tutorías de un estudiante tutor
const getTutoriasEstudianteTutor = async (req, res, next) => {
    try {
        const idTutor = "64494f9cf6032eb0e17eff44"; //sera reemplazo por el id del tutor que este logueado
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        const tutoriasAgrupadas = {};
        tutorias.forEach(tutoria => {
            const tutor = tutoria.solicitud_tutoria.tutor;
            const clase = tutoria.solicitud_tutoria.clase;
            const active = tutoria.activa;
            if (tutor._id.toString() === idTutor) {
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
            res.status(404).json({ message: "No se encontraron tutorías" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener todas las tutorías de un estudiante estudiante
const getTutoriasEstudianteEstudiante = async (req, res, next) => {
    try {
        const idEstudiante = "643ad74e81eae928e53cb3fe"; //sera reemplazo por el id del estudiante que este logueado
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        const tutoriasAgrupadas = {};
        tutorias.forEach(tutoria => {
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
            res.status(404).json({ message: "No se encontraron tutorías" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Controlador para obtener todas las tutorías
const getTutorias = async (req, res, next) => {
    try {
        const tutorias = await Tutoria.find().populate('aula', 'solicitud_tutoria');
        res.status(200).json(tutorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener una tutoría por su ID
const getTutoria = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findById(req.params.id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        res.status(200).json(tutoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para crear una nueva tutoría
const createTutoria = async (req, res, next) => {
    try {
        const { aula, solicitud_tutoria } = req.body;
        if (!aula || !solicitud_tutoria) {
            return res.status(400).json({ error: 'Los parámetros aula y solicitud_tutoria son requeridos.' });
        }
        const tutoria = new Tutoria({
            aula,
            solicitud_tutoria,
        });
        const newTutoria = await tutoria.save();
        res.status(201).json(newTutoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para actualizar una tutoría existente
const updateTutoria = async (req, res, next) => {
    try {
        const { aula, solicitud_tutoria } = req.body;
        const tutoria = await Tutoria.findById(req.params._id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        tutoria.aula = aula || tutoria.aula;
        tutoria.solicitud_tutoria = solicitud_tutoria || tutoria.solicitud_tutoria;
        const updatedTutoria = await tutoria.save();
        res.status(200).json(updatedTutoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controlador para eliminar una tutoría existente
const deleteTutoria = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findByIdAndDelete(req.params.id);
        if (!tutoria) {
            return res.status(404).json({ message: "Tutoría no encontrada" });
        }
        res.status(200).json({ message: "Tutoría eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para eliminar una tutoría existente
const desactivarTutorias = async (req, res, next) => {
    try {
        const tutoria = await Tutoria.findByIdAndUpdate(req.params.id, {
            activa: 0
        });
        
        res.status(200).json({ message: "Tutoría eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const servirTutoria = async (req = request, res = response) => {
    const tutorias = await Tutoria.find();
    const solicitudTutorias = await SolicitudTutorias.find(); 
    res.render('tutorias', { tutorias, solicitudTutorias });
  };
  
  
  //const servirSolicitudTutoria = async (req = request, res = response) => {
   // const solicitudTutorias = await SolicitudTutorias.find();
   // res.render('tutorias', {solicitudTutorias})
  //};
  
  //Contralador para desactivar todas las tutorias
  const desactivarTodasTutorias = async (req = request, res = response) =>{
    try {
      await Tutoria.updateMany({}, { activa: false });
      //console.log(error);
      res.status(200).json({message: 'Tutorias desactivadas'})
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
    getTutoriasEstudianteTutor,
    getTutoriasEstudianteEstudiante,
    getTutorias,
    getTutoria,
    createTutoria,
    updateTutoria,
    deleteTutoria,
    desactivarTutorias,
    servirTutoria,
    desactivarTodasTutorias,
   // servirSolicitudTutoria
};