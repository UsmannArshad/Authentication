const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
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
    },
    Token:{
        type:String
    }
})
userSchema.pre('save',function(next){
    bcrypt.hash(this.Password,10,(err,hash)=>{
        if(err)console.log(err)
        this.Password=hash
        next()
    })
})
userSchema.methods.createToken=function(cb){
    console.log("User",this)
    var token=jwt.sign(this.Email,'supersecretpassword')
    this.Token=token
    cb(this)
}
userSchema.statics.findbyToken=function(token,cb){
    const email=jwt.verify(token,'supersecretpassword')
    User.findOne({Email:email},(err,doc)=>{
        if(err)return cb(err)
        return cb(null,doc)
    })
}
const User=mongoose.model('User',userSchema)
module.exports={User}