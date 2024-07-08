const express = require('express');
const adminRoute = express.Router();

const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

const database = mongoClient.db('test');
const collection = database.collection('employees');

adminRoute.post('/addEmployee',async (req , res) =>{
    try{
        const data = req.body;
        await collection.insertOne(data , (err,db) => {
            if(err)
                console.log(err);
            else
                console.log('Data Inserted');
        })
    }
    finally{
        console.log('Finally Add');
    }
    res.send({
        message:'Employee Registered'
    });
});

adminRoute.get("/viewEmployees",async (req,res) => {
    var result = [];
    try{
        await collection.find().toArray().then(response => result = [...response]);
    }
    finally{
        console.log('Finally View');
    }
    res.send(result);
});


adminRoute.post('/updateEmployee', async (req,res) => {
    try{
        const updatedData = req.body;
        const filter = {employeeId:updatedData.employeeId};
        await collection.replaceOne(filter,updatedData);
    }
    finally{
        console.log('Finally Update');
    }

    res.send({
        message : 'Employee Details Updated'
    });
})


adminRoute.post('/deleteEmployee' , async (req , res) => {
    try{
        const filter = {employeeId:req.body.employeeId}
        console.log(filter);
        await collection.deleteOne(filter).then(res => console.log(res)).catch(e => console.log(e));
    }
    finally{
        console.log('Finally delete');
    }
    res.send({
        message : 'Employee Removed'
    });
})

module.exports = adminRoute;