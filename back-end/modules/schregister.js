const mongoose = require("mongoose")

const utilisateur = mongoose.Schema({
    nom : {
        type: String,
        required: true
    },
    prenom : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
})
const utilisateurModel = mongoose.model("conseiller", utilisateur)
module.exports = utilisateurModel