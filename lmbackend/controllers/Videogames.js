const Videogame = require("../models/Videogames")

const createVideogame = async (request, response) => {
    let videogame = request.body

    let newVideogame = await Videogame.create(videogame);

    response.json(newVideogame)
}



module.exports = {
    createVideogame,
    
}