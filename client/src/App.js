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
  Redirect,
  //withRouter

} from "react-router-dom";

import React, { Component } from 'react';


class App extends Component {

  state = {
    redirect: null
  }

  // componentDidMount () {

  //   const taRoutes = ['/ta', '/course-students', '/change-password']
  //   const studentRoutes = ['/students', '/course-grade', '/change-password']
  //   const publicRoutes = ['/login']

  //   const user = JSON.parse(localStorage.getItem('user'))
  //   const path = window.location.pathname

  //    if (!user && publicRoutes.indexOf(path) == -1) this.setState({ redirect: '/login' })
    
  //   if(user.profile == 'student') {

  //     console.log(path)
  //     if (studentRoutes.indexOf(path) == -1) {
  //       this.setState({ redirect: '/students' })
  //     }
    
  //   } else if (user.profile == 'ta') {

  //     if (taRoutes.indexOf(path) == -1) {
  //       this.setState({ redirect: '/ta' })
  //     }

    
  //   } 

  //   // setTimeout(() => {
  //   //   this.setState({ redirect: null })
  //   // }, 100)
  // }

  render () {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          { this.state.redirect && (<Redirect to={this.state.redirect} />) }
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

}



export default App;
