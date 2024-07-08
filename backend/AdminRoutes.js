const express = require('express');
const adminRoute = express.Router();

const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

const database = mongoClient.db('test');
const collection = database.collection('employees');

adminRoute.post('/addEmployee',async (req , res) =>{
    try{
        console.log(req.body);
        await collection.insertOne(req.body , (err,db) => {
            if(err)
                console.log(err);
            else
                console.log('Data Inserted');
        })
    }
    finally{
        console.log('Finally Add');
    }
    res.send('Add');
});

adminRoute.get("/viewEmployees",(req,res) => {
    
});


adminRoute.post('/updateEmployee',(req,res) => {
    
})


module.exports = adminRoute;