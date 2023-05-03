const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config').dbConnection();
const https = require('https');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

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

        // Rutas página web
        this.rutaPaginaClases = '/clases';
        this.rutaPaginaAulas = '/aulas';
        this.rutaPaginaHorario = '/horarios';
        this.rutaLogin = '/login';
        this.rutaPaginaEstudiantes = '/estudiantes';
        this.rutaPaginaSolicitudTutor = '/solicitud_tutor';
        this.rutaPaginaTuroria = '/tutorias'
        this.rutaPaginaSolicitudTutorias = '/solicitud_tutorias';
        this.rutaImagenes = '/images'


        // Midlewares: funciones que siempre se van a ejecutar cuando iniciamos un servidor
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // Cookie parser
        this.app.use(cookieParser());

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición

        this.app.set('view engine', 'html');
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('views', path.join(__dirname, '../public'));

        // Directorio público
        // this.app.use('images/', express.static('public/images'));

        this.app.get('/', (req, res) => {
            res.render('index');
        });

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
        // this.app.use(this.rutaSolicitudTutoria, require('../routes/solicitud_tutoria.routes'));

        // Rutas de página
        this.app.use(this.rutaPaginaClases, require('../routes/clase_views.routes'));
        this.app.use(this.rutaPaginaAulas, require('../routes/aulas_views.routes'));
        this.app.use(this.rutaPaginaHorario, require('../routes/horario_views.routes'));
        this.app.use(this.rutaLogin, require('../routes/auth_views.routes'));
        this.app.use(this.rutaPaginaEstudiantes, require('../routes/estudiante_views.routes'));
        this.app.use(this.rutaPaginaSolicitudTutor, require('../routes/solicitud_tutor_views.routes'));
        this.app.use(this.rutaPaginaTuroria, require('../routes/tutorias_views.routes'));
        this.app.use(this.rutaImagenes, require('../routes/images.routes'));
        // this.app.use(this.rutaSolicitudTutoria, require('../routes/solicitud_tutoria_views.routes'));
    }

    listen() {
        const opcionesHttps = {
            key: fs.readFileSync(path.join(__dirname, '../Certificado', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, '../Certificado', 'cert.cer'))
        };
        const server = https.createServer(opcionesHttps, this.app);
        server.listen(this.port, () => {
            console.log('Servidor HTTPS corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;
