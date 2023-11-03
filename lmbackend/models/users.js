const { Schema, model } = require("mongoose")

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },        
        email: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            unique: true
        },
        age: {
            type: Number,
            required: [true, "El nombre es obligatorio"]
        },
        password: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        }
    }
)

module.exports = model("User", UserSchema)