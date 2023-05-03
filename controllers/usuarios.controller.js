const User = require("../models/usuario.models");
const bcrypt = require('bcrypt');
const key = require('../database/secretKey');

// GET /users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('rol');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET /users/:id
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST /users
const createUser = async (req, res) => {
    const { id, nombre_usuario, password, rol, telefono } = req.body;
    //const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, key.secret);
    const user = new User({
        id,
        nombre_usuario,
        password: hashedPassword,
        rol,
        telefono,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// PUT /users/:id
const updateUser = async (req, res) => {
    const { nombre_usuario, password, rol, telefono } = req.body;
    const hashedPassword = await bcrypt.hash(password, key.secret);
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.nombre_usuario = nombre_usuario || user.nombre_usuario;
        user.password = hashedPassword || user.hashedPassword;
        user.rol = rol || user.rol;
        user.telefono = telefono || user.telefono;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// DELETE /users/:id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateUserPassword = async (req, res) => {
    //pedir la conrtaseña actual y la nueva contraseña
    const { password, newPassword } = req.body;
    //buscar el usuario en la base de datos
    const user = await User.findById(req.params.id);
}
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
