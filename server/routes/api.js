const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const User=require('../models/user')


mongoose.connect('mongodb+srv://root:passer@cluster0.93mfx.mongodb.net/eventsdb')
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



/*
const mongoose=require("mongoose")
const db="mongodb+srv://root:passer@cluster0.93mfx.mongodb.net/eventsdb"
mongoose.connect(db,err=>{
    if(err){
        console.error("Error"+err);
    }else{
        console.log("Connected to my MongoDB")
    }
});*/

router.get('/',(req,res)=>{
    res.send('From API route')
})

router.get('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })
})

module.exports=router