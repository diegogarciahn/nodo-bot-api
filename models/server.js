const express = require('express');
const cors = require('cors');
        

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

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
        this.app.use( express.static('public') );

    }

   // Endpoints 
    routes() {
        // Ruta de usuarios api
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }

}

module.exports = Server;