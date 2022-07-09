const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
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
userSchema.pre('save',function(next){
    bcrypt.hash(this.Password,10,(err,hash)=>{
        if(err)console.log(err)
        this.Password=hash
        next()
    })
})
const User=mongoose.model('User',userSchema)
module.exports={User}