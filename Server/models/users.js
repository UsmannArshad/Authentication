const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    Email:{
        type:String,
        required:true,
        trim:true,
        unique:1,
    },
    Password:{
        type:String,
        required:true,
        minLength:6
    }
})
const User=mongoose.model('User',userSchema)
module.exports={User}