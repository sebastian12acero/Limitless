const { Schema, model } = require("mongoose")
const VideogameSchema = Schema(
    {

        name: {
            type: String,
            required: [true, "El nombre es obligatorio"],
        },
        company: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        category: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },

        imageclassification: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        description: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        img: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        video: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        price: {
            type: Number,
            required: [true, "El nombre es obligatorio"]
        },
        platform: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        features: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        }
    }
)

module.exports = model("Videogame", VideogameSchema)
