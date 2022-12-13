const mongoose = require('mongoose')
const task = mongoose.Schema({
    name : {
        type :  String,
        required : true,
        unique : true
    },
    date : {
        type : Date,
        require : true
    },
    users : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'conseillers', /* table de la base de données */
        require : true
    }
})

const taskModel = mongoose.model("tasks", task)
module.exports = taskModel