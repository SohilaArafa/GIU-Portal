// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';

import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';

import ViewSchedule from './components/ViewSchedule';

import Admin from './components/Admin';
import AddCourses from './components/AddCourses';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import Add from './components/Add';
import Update from './components/Update';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
      </div>

      <Switch>  
        <Route path="/students"><Student /></Route>  
        <Route path="/view-schedule/:SemesterNumber/:SID"><ViewSchedule /></Route>
        <Route path="/create-schedule/:SemesterNumber/:AdminID"><Admin /></Route>
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
