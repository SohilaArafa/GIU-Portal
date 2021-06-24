// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';

import './App.css';
//import ChangePass from './components/ChangePass';
import Student from './components/Student';

import CreateSchedule from './components/CreateSchedule';

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
        <Route path="/create-schedule/:SemesterNumber/:SID"><CreateSchedule /></Route>
      </Switch>
    </Router>
);


}

export default App;
