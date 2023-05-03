const path = require('path');
const fs = require('fs');

const { request, response } = require('express');
//Aquí seguirían la importación de los modelos
const getImages = async (req = request, res = response) => {
    const { urlImage } = req.params;

    const pathImage = path.join(__dirname, '../public/images', urlImage);

    if (fs.existsSync(pathImage)) {
        return res.sendFile(pathImage);

    }
}

module.exports = {
    getImages,

}