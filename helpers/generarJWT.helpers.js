const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        console.log(uid);

        jwt.sign(payload, process.env.API_KEY, {
            expiresIn: "86400000"
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