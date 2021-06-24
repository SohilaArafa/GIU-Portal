//import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
      </Switch>
    </Router>
);


}


export default App;
