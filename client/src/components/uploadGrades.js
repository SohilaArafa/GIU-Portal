const express=require('express');
const app=express();
const mongoose=require("mongoose");
//const coursesModel=require('./models/Courses');
// import StudentTakeCourses from '../../models/StudentTakeCourses';
const studentTakeCourse = require('../../models/StudentTakeCourses');
//import {connect } from 'react-redux';
// import {getCourse} from '..actions/itemActions';
import PropTypes from'prop-types'
app.put('/update',async (req,res) =>{
const newGrade= req.body.newGrade;
const SID= req.body.SID;
const CourseID= req.body.CourseID;



try {
     await studentTakeCourse.find(SID, CourseID,(error, studentToUpdate) =>{
      studentToUpdate.CourseGrade=newGrade;
      studentToUpdate.save();
     });

}catch(err){
    console.log(err);
    }
    res.send("updated");
})

//import logo from './logo.svg';
import Axios from 'axios';
//import './App.css';
import { useState,useEffect } from 'react';


// componentDidMount () {
//   this.props.getCourse();
// }
function App() {
 
  const{SID,setId}=useState("");
  const{SemesterNumber,setSemesterNumber}=useState("");
  const{CourseID,setCourseID}=useState("");
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
        <input
          type="number"/>  
      </div>
    </div>
  );
  }

const updateStudent=(SID,CourseID)=>{
const newGrade= window.promt("Enter new grade");

Axios.put("http://localhost:3000/update",{ newGrade: newGrade, SID: SID,CourseID: CourseID }).then(()=>{
   setListOfStudents(listOfStudent.map((val) => {
    return val.SID==SID ? {SID: SID,CourseID: CourseID,SemesterNumber:val.SemesterNumber, grade: newGrade} :val;
          
    }))
  })
};


  

// App.protoTypes={
//   getCourse:PropTypes.func.isRequired,
//   course :PropTypes.object.isRequired
// }


// const mapStateToProps=(state)=>({
//   course: state.course
// });



//export default connect (mapStateToProps,{getCourse})(App);
export default App;