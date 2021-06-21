
<<<<<<< HEAD
=======

// import logo from './logo.svg';
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import TA from './components/TA';
import './App.css';
<<<<<<< HEAD
=======
// import View_Grades from './components/View_Grades';s
import ChangePass from './components/ChangePass';
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
<<<<<<< HEAD
import Student from './components/Student';
=======
import CourseStudents from './components/CourseStudents';
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
      </div>

      <Switch>
<<<<<<< HEAD
        <Route path="/ta"><TA /></Route>
        <Route path="/course-students"><CourseStudents /></Route>
        <Route path="/students"><Student /></Route>
      </Switch>
    </Router>
);
=======
        <Route path="/change-password"><ChangePass /></Route>
        <Route path="/ta"><TA /></Route>
        <Route path="/course-students/:course"><CourseStudents /></Route>
      </Switch>
    </Router>
);


>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
}

export default App;
