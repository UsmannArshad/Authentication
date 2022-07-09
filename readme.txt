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

=>Login:
To login we have to compare passwords.First we ll get the user by comparing email.
now we hve encrypted password we will compare it with given password.It will return boolean by this method:
bcrypt.compare(pwd,hashedpwd,(err,result)
{
    if(result==true)authntiacted
    else not authenticated
})

=>JWT:
jason web token :a compact and self-contained way for securely transmitting information between parties as a JSON object
One of its major use is API authentication.You get a secret token when u register that api.
On the client side, you create the token (there are many libraries for this) using the secret token to sign it.

When you pass it as part of the API request, the server will know it’s that specific client because the request is signed with its unique identifier

Consider only admin is allowed to create a post.So we assign a token whenver someone login 
and if he want to create a post we ll compare the token with our signed token.
if equal then he will be able to do so.

npm install jsonwebtoken
Check jwt.js file for code
jwt.sign(data,'supersecure')
jwt.verify(token,'supersecure')
