const validarMetodo = async (req = request, res = response, next) => {
    // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.
    const allowedMethods = [
        "OPTIONS",
        "HEAD",
        "CONNECT",
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH",
    ];

    if (!allowedMethods.includes(req.method)) {
        return res.status(405).send(`${req.method} not allowed.`);
    }

    next();
}

module.exports = {
    validarMetodo
};