const express=require('express');
const app=express();
const mongoose=require("mongoose");
const coursesModel=require('./models/Courses');


app.put('/update',async (req,res) =>{
const newGrade= req.body.newGrade;
const id= req.body.id;

try {
     await coursesModel.findyById(id,(error, studentToUpdate) =>{
      studentToUpdate.courseGrade=newGrade;
      studentToUpdate.save();
     });

}catch(err){
    console.log(err);
    }
    res.send("updated");
})

import logo from './logo.svg';
import Axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const{id,setId}=useState("");
  const{name,setName}=useState("");
  const{courseName,setCourseName}=useState("");
  const{courseGrade,setCourseGrade}=useState(0);
  const{listOfStudents,setListOfStudents}=useState([]);
  return (
    <div className="App">
      <div className="inputs">
        <input 
          type="text"/>
        <input
           type="text"/>
        <input 
          type="number"/>
      </div>
    </div>
  );
  }

const updateStudent=(id)=>{
const newGrade= window.promt("Enter new grade");

Axios.put("http://localhost:3000/update",{ newGrade: newGrade, id: id }).then(()=>{
   setListOfStudents(listOfStudent.map((val) => {
    return val.id==id ? {id: id,name: val.name,courseName:val.courseName, grade: newGrade} :val;
          
    }))
  })
};


<button
  OnClick={()=>{
    updateStudent(val.id);
  }}
>  
  Update
</button>  



export default App;