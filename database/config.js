const mongoose = require('mongoose');


const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_BOT);

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - póngase en contacto con el equipo de soporte.');
    }
}

module.exports = {
    dbConnection
}