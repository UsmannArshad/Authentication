const express = require('express')
const App = express()
const bodyparser = require('body-parser')
const cookieparser=require('cookie-parser')
const mongoose = require('mongoose')
const mongooseUri = 'mongodb+srv://admin:123@cluster0.oopswlg.mongodb.net/?retryWrites=true&w=majority';
const bcrypt=require('bcrypt')
//MiddleWare
App.use(bodyparser.json())
App.use(cookieparser())

//Model
const { User } = require('./models/users')
mongoose.connect(mongooseUri)
App.get('/',(req,res)=>{
res.send("gg")
})
App.post('/api/postUser',(req,res)=>{
    const newUser=new User({
        Email:req.body.Email,
        Password:req.body.Password
    })
    newUser.save((err,doc)=>{
        if(err)
        {
            console.log(err)
        }
        res.status(200).send(doc)
    })
})
App.post('/api/login',(req,res)=>{
    const Email=req.body.Email;
    const Pwd=req.body.Password
    User.findOne({Email:Email},(err,user)=>{
        if(!user)console.log("Username not found")
        bcrypt.compare(Pwd,user.Password,(err,result)=>{
            console.log(Pwd)
            console.log(result)
            if(err) throw err
            if(result==true)
            {
                user.createToken((userr)=>{
                    console.log(userr)
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',userr.Token).send('OK')
                })
            }
            else

            {
                res.json({message:'Password Incorrect'})
            }
        })
    })
})
App.listen(3001, () => {
    console.log("Running on port 3001")
})
