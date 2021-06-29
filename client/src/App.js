
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import TA from './components/TA';
import './App.css';
import Student from './components/Student';
import CourseGrades from './components/CourseGrades';
import CourseDetails from './components/CourseDetails';
import Apply from './components/Apply';
import CreateSchedule from './components/CreateSchedule';
import ViewSchedule from './components/ViewSchedule';
import Admin from './components/Admin';
import AddCourses from './components/AddCourses';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import Add from './components/Add';
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
        <Route path="/create-schedule"><CreateSchedule /></Route>
        <Route path="/view-schedule/:SemesterNumber/:SID"><ViewSchedule /></Route>
        <Route path="/Admin"><Admin /></Route>
        <Route path="/add-Courses"><AddCourses /></Route>
        <Route path="/change-password"><ChangePassword /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/add"><Add /></Route>
        <Route path="/update"><Update /></Route>  
      </Switch>
    </Router>
);


}

export default App;
