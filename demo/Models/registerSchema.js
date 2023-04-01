const mongoose= require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    username : {
        type : String,
        required: true,
        min : 3,
        max : 50,
    },
    email : {
        type : String,
        unique: true,
        required: true,
    },
    password : {
        type : String,
        required: true,
    },
}, {timestamps : true})

module.exports = mongoose.model('Registeruser',userSchema)