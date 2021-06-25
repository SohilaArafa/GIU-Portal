// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';

import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';

import ViewSchedule from './components/ViewSchedule';

import Admin from './components/Admin';

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
      </Switch>
    </Router>
);


}

export default App;
