//import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import TA from './components/TA';
import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';
import CourseGrades from './components/CourseGrades';
import CourseStudents from './components/CourseStudents';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
      </div>
      <Switch>
        <Route path="/change-password"><ChangePassword /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/ta"><TA /></Route>
        <Route path="/course-students/:course"><CourseStudents /></Route>
        <Route path="/students"><Student /></Route>
        <Route path="/course-grade/:SemesterNumber/:SID"><CourseGrades /></Route>
      </Switch>
    </Router>
);


}


export default App;
