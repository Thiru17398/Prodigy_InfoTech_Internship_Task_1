const express = require('express');
var bodyParser = require('body-parser');

const bcrypt = require('bcrypt');

const cookieSession = require('cookie-session');
const path = require('path');

const app = express();
const {v4 : uuidv4} = require('uuid');

const basicAuth = require('express-basic-auth');

const cors = require('cors');
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

const database = mongoClient.db('test');
const collection = database.collection('users');


async function insertUser(data) {
    try{
        collection.insertOne(data , (err , db) => {
            if(err)
                throw err;
            else
                console.log("User Data Inserted");
        });
    }
    finally{
        console.log('Finally Reached');
    }
}

async function authenticateLogin(username , password){
    try{
        var user;
        var message;
        var isAuthenticated = true;
        var role ='';
        if(username.substring(0,5) === "admin")
                role = "admin"
        await collection.findOne({username:username})
        .then((res) => user =  res);
        if(user){
            var isPasswordCorrect = bcrypt.compareSync(password , user.newPassword);
            if(isPasswordCorrect)
                message = "Valid Password";
            else{
                message = "Invalid Password",
                isAuthenticated = false;
            }

        }
        else{
            message = "User does not exist";
            isAuthenticated = false;
        }
        return {
            message , 
            isAuthenticated,
            role
        }
    }
    finally{
        console.log('Authentication Finally');
    }
}



app.use(cors({credentials:true,origin:true}));

app.set('trust proxy', 1);


app.use(cookieSession({
    name:"SessionCookie",
    secret:'secret-key',
    maxAge:24*60*60*1000,
    sameSite:'strict',
    domain:'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.json());


app.get("/" , (req,res) => {
    console.log(req.session);
    res.status(200).send({
        authenticated:true
    });

})



app.get("/admin" , (req,res) => {
    console.log(req.session);
    res.status(200).send({
        authorized:true
    });
})


app.post("/login"  , async (req,res) => {
    const {username , password} = req.body;
    const result = authenticateLogin(username , password);
    
    if((await result).isAuthenticated){
        req.session.isLoggedIn = true;
        req.session.username = username;
        req.session.role = (await result).role;
        console.log(req.session);
        res.status(200).send((await result));
    }
    else
        res.status(401).send((await result));
    
});

app.post('/register' ,async (req, res) => {
    const userData = req.body;
    const hashedPassword = await bcrypt.hash(userData.newPassword , 10).then(res => res);
    const newUserData = { ... userData , rePassword : hashedPassword , newPassword : hashedPassword};
    insertUser(newUserData).catch(console.dir);
    res.status(200).send({messsage:"User Registered Successfully" , registered : true}  );
});



const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log('Server Listening on port ' + port);
});