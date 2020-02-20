import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"; 
import Landing from "./components/Landing/Landing";
import Selection from "./components/Selection/Selection";
import NewDisc from './components/NewDisc/NewDisc';
import AllDiscs from './components/AllDiscs/AllDiscs';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Landing}/>
      <Route path="/selection/:id" component={Selection}/>
      <Route path="/new/:id" component={NewDisc}/>
      <Route path="/join/:id" component={AllDiscs}/>
      <Route path="/analytics" component={Analytics}/>
    </Router>
  );
}

export default App;
