const Videogame = require("../models/Videogames");
const { validateVideogame } = require("../helpers/validators.js");

const createVideogame = async (request, response) => {
    const { img } = request.body;

    try {
        if (!img || img.trim() === "") {
            return response.status(400).json({ error: "El campo 'img' es obligatorio." });
        }

        await validateVideogame(request.body.name);
     
        const newVideogame = await Videogame.create(request.body);
        response.status(200).json(newVideogame);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

module.exports = {
    createVideogame,
};