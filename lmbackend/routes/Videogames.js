const { createVideogame } = require("../controllers/Videogames")
const { Router } = require("express")

const VideogamesRouter = Router()

VideogamesRouter.post("/", createVideogame)
module.exports = VideogamesRouter