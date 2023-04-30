const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(404).json({
                msg: "No hay token en la petición."
            })
        }

        try {
            const { uid } = jwt.verify(token, process.env.API_KEY);
            
            req.uid = uid;
            next();
        } catch (error) {
            res.status(401).json({
                msg: 'Token no válido.'
            })
        }
    } catch (error2) {
        return res.status(404).json({
            msg: "No hay token en la petición."
        })
    }


}

module.exports = {
    validarJWT
}