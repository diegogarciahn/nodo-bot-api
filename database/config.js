const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_BOT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - póngase en contacto con el equipo de soporte.');
    }
}

mongoose.plugin(autopopulate);

module.exports = {
    dbConnection
}