//How to use bcrypt to hash password
//node bcrypt.js to run this file
const bcrypt=require('bcrypt')
const saltrounds=1
const plainpwd='password'
bcrypt.genSalt(saltrounds,(err,salt)=>{
    if(err)console.log(err)
    console.log("Salt",salt)
    bcrypt.hash(plainpwd,salt,(err,hash)=>{
        if(err)console.log(err)
        //store hash in your db
        console.log("Hash",hash)
    })

})