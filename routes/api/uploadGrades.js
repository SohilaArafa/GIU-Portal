const express=require('express');
const app=express();
const mongoose=require("mongoose");
const studentModel=require('./models/student');


app.put('/update',async (req,res) =>{
const newGrade= req.body.newGrade;
const id= req.body.id;

try {
     await studentModel.findyById(id,(error, studentToUpdate) =>{
      studentToUpdate.courseGrade=newGrade;
      studentToUpdate.save();
     });

}catch(err){
    console.log(err);
    }
    res.send("updated");
})