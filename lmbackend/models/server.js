const express = require("express")
const VideogamesRouter = require("../routes/Videogames")
const userRouter = require("../routes/users")
const connectMongo = require("../database/config")
var cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.usersPath = "/api/Users"
        this.VideogamesPath = "/api/Videogames"

        this.middlewares()
        this.routes()
        this.conectarMongo()
    }

    async conectarMongo() {
        await connectMongo()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        
        this.app.use(this.usersPath, userRouter)

        this.app.use(this.VideogamesPath, VideogamesRouter)
    }

    listen() {
        this.app.listen(this.port, "0.0.0.0", ()=> {
            console.log("Servidor ejecutandose en", this.port)
        })
    }
}

module.exports = Server;