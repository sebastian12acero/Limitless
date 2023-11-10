const { models } = require("mongoose")
const User = require("../models/users.js")
const Videogame = require("../models/Videogames.js")

const validateAge = (age = 0) => {
    if (age < 18) {
        throw new Error("Must have more than 18 years")
    }
    return true
}

const validateEmail = async (emailIngresado) => {
    const emailExist = await User.find({ email: emailIngresado })
    if (emailExist.length > 0) {
        throw new Error("El email ya existe")
    }

    return true
}
const validateVideogame = async (juegoIngresado) => {
    const gameExist = await Videogame.findOne({ name: juegoIngresado })
    if (gameExist.length > 0) {
        throw new Error("El juego ya existe")
    }

    return true
}

module.exports = {
    validateAge,
    validateEmail,
    validateVideogame
}