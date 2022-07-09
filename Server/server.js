const express = require('express')
const App = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const mongooseUri = 'mongodb+srv://admin:123@cluster0.oopswlg.mongodb.net/?retryWrites=true&w=majority';

//MiddleWare
App.use(bodyparser.json())

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
        res.send(200,doc)
    })
})
App.listen(3001, () => {
    console.log("Running on port 3001")
})
