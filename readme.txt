Postman:
Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated
We can test our db without client or react app using Postman.

=>After making schema and model we will make a addUser route for adding new user
in mongodb.Now to test it we will go to postman change the action method to post
change url to 127.0.0.1/api/addUser.User will be posted to db.

=>Hashing:
bcrypt.js file include how to hash using bcrypt
We cant store pwd as it is in db we have to encrypt it to make it secure.
We ll use bcrypt library.(Library for hasing pwd)
npm install bcrypt
Usage:
This method automatically find salt
1)bcrypt.hash(plainpwd,saltround,(err,hash)=>{
    if(err)....
    console.log(hash)   =>give us a hashed pwd with salt attached also
})
2)Generate salt and hashing on seperate function calls:
bcrypt.genSalt(saltrounds,(err,salt)=>{
    bcrypt.hash(pwd,salt,(err,hash)=>{
        console.log(salt)
        console.log(hash)
    })
})

Explanation:
Salt:Salt is a random string that makes hashed password unpredictable.It should be different for even same pwds.
Salt rounds:Salt rounds are cost factors.It controls how much time is needed to calcualte
a single bcrypt hash.The higher the cost factor, the more hashing rounds are done   

Hashing of pwd while posting new user:
For this we ll ue pre middleware that will hash the pwd before saving into db
Watch users.js for explanation.