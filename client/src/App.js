
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import TA from './components/TA';
import './App.css';
import Student from './components/Student';
import CourseGrades from './components/CourseGrades';
import CourseDetails from './components/CourseDetails';
import Apply from './components/Apply';
import Schedule from './components/Schedule';
import Admin from './components/Admin';
import EditCourses from './components/EditCourses';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import AddCourse from './components/AddCourse';
import Update from './components/Update';
import CourseStudents from './components/CourseStudents';
import UploadGrades from './components/uploadGrades';

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
        <Route path="/ta"><TA /></Route>
        <Route path="/course-students/:CourseID"><CourseStudents /></Route>
        <Route path="/students"><Student /></Route>
        <Route path="/course-grade/:SemesterNumber/:SID"><CourseGrades /></Route>
        <Route path="/course-details/:SemesterNumber/:CourseMajor/:SID"><CourseDetails /></Route>
        <Route path="/upload-grade/:CourseID/:SID"><UploadGrades /></Route>
        <Route path="/apply"><Apply /></Route>
        <Route path="/create-schedule"><Schedule /></Route>
        <Route path="/view-schedule/:SemesterNumber/:SID"><Schedule /></Route>
        <Route path="/Admin"><Admin /></Route>
        <Route path="/edit-courses"><EditCourses /></Route>
        <Route path="/change-password"><ChangePassword /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/add-course"><AddCourse /></Route>
        <Route path="/update"><Update /></Route>  
      </Switch>
    </Router>
);


}

export default App;
