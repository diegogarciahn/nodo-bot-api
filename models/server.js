const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config').dbConnection();
const https = require('https');
const fs = require('fs');
const path = require('path');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authRoutePath = '/api/auth';
        this.usuariosRoutePath = '/api/usuarios';
        this.tutoriasRoutePath = '/api/tutoria';
        this.rutaAulas = '/api/aulas';
        this.rutaClases = '/api/clases';
        this.rutaEstudiantes = '/api/estudiantes';
        this.rutaCarreras = '/api/carreras';
        this.rutaRol = '/api/roles'
        this.rutaHorario = '/api/horario'
        this.rutaPermiso = '/api/permiso'
        this.rutaSolicitudTutor = '/api/solicitud_tutor';   
        this.rutaSolicitudTutoria = '/api/solicitud_tutoria';

        // Midlewares: funciones que siempre se van a ejecutar cuando iniciamos un servidor
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición

        // Directorio público
        this.app.use(express.static('public'));

        this.app.set('view engine', 'html');
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('views', path.join(__dirname,'../public'));
    }

    // Endpoints 
    routes() {
        // Ruta de usuarios api
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios.routes'));
        this.app.use(this.tutoriasRoutePath, require('../routes/tutoria.routes'));
        this.app.use(this.authRoutePath, require('../routes/auth.routes'));
        this.app.use(this.rutaAulas, require('../routes/aula.routes'));
        this.app.use(this.rutaClases, require('../routes/clase.routes'));
        this.app.use(this.rutaEstudiantes, require('../routes/estudiante.routes'));
        this.app.use(this.rutaCarreras, require('../routes/carreras.routes'));
        this.app.use(this.rutaRol, require('../routes/rol.routes'));
        this.app.use(this.rutaHorario, require('../routes/horario.routes'));
        this.app.use(this.rutaPermiso, require('../routes/permiso.routes'))
        this.app.use(this.rutaSolicitudTutor, require('../routes/solicitud_tutor.routes'));
        this.app.use(this.rutaSolicitudTutoria, require('../routes/solicitud_tutoria.routes'));
    }

    listen() {
        const opcionesHttps  = {
            key:  fs.readFileSync(path.join(__dirname, '../Certificado', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, '../Certificado', 'cert.cer'))
        };
        const server = https.createServer(opcionesHttps, this.app);
        server.listen(this.port, () => {
            console.log('Servidor HTTPS corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;
