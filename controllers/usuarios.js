const { request, response } = require('express');


const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey}= req.query;
    res.json(
        {
            ok: true,
            msg: 'GET API desde el controlador',
            q,
            nombre,
            apikey
        });
}

const usuariosPost = (req = request, res) => {

    // const body = req.body;
    const { nombre, edad } = req.body;

    res.status(201).json(
        {
            msg: 'POST API desde el controlador',
            nombre,
            edad
        });
}

const usuariosPut = (req = request, res) => {

    const id = req.params.id;
    res.json(
        {
            ok: true,
            msg: 'PUT API desde el controlador',
            id
        });
}

const usuariosPatch = (req, res) => {
    res.json(
        {
            ok: true,
            msg: 'PATCH API'
        });
}

const usuariosDelete = (req, res) => {
    res.json(
        {
            ok: true,
            msg: 'DELETE API desde el controlador'
        });
    }

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}

