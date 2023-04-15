const jwt = require('jsonwebtoken');

const generarJWT = (uid = '', IdUsuario = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid, IdUsuario };

        jwt.sign(payload, process.env.API_KEY, {
            // expiresIn: '10h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        });


    })
}

module.exports = {
    generarJWT
}