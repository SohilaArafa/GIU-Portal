// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import TA from './components/TA';
import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';
import CourseGrades from './components/CourseGrades';
import CourseDetails from './components/CourseDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import CourseStudents from './components/CourseStudents';
import UploadGrades from './components/uploadGrades';

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
      </Switch>
    </Router>
);


}

export default App;
