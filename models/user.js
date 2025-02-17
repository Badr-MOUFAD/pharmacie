const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["medecin", "pharmacien", "pharmacienP", "admin"]
    },
	active:Boolean
})

module.exports = mongoose.model('Utilisateur', userSchema)