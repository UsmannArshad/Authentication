const jwt=require('jsonwebtoken')
const userdata='admin' //can be anything json too
const secret='supersecret'
const token=jwt.sign(userdata,secret)
const decodetoken=jwt.verify(token,secret)
console.log(token)
console.log(decodetoken)