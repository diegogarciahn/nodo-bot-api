const User = require("../models/user");

// GET /users
const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
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
    res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST /users
const createUser = async (req, res) => {
    const { nombre_usuario, password, rol, telefono } = req.body;
    const user = new User({
        nombre_usuario,
        password,
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
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.nombre_usuario = nombre_usuario || user.nombre_usuario;
        user.password = password || user.password;
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
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};