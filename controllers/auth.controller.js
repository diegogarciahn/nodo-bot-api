const { request, response } = require('express');
const { generarJWT } = require('../helpers/generarJWT.helpers');
const bcrypt = require('bcrypt');
var base64 = require('base-64');
const Usuario = require('../models/usuario.models');

const login = async (req = request, res = response) => {
    var decode = base64.decode(req.headers.authorization.split(' ')[1]);
    const usuario = decode.split(':')[0];
    const password = decode.split(':')[1];
    try {

        const user = await Usuario.findOne({
            where: {
                nombre_usuario: usuario
            },
        });

        if (!user) {
            return res.status(404).send({
                msg: "User Not found."
            });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Warning! Invalid Password!",
            });
        }

        const token = await generarJWT(usuario, password);

        return res.status(200).json({
            token: token,
            usuario: user.usuario,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error interno en el servidor.'
        });
    }
}


const getUser = async (req = request, res = response) => {

    const uid = req.uid;

    try {
        const user = await Usuario.findOne({
            where: {
                id: uid
            },
        });

        if (!user) {
            return res.status(404).json({
                msg: "No se encontró el usuario."
            })
        }


        return res.status(200).json({
            usuario: user.usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno."
        });
    }

}

module.exports = { login, getUser };