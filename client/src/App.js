import React, { Component } from "react";
import { BrowserRouter as Router,Route} from 'react-router-dom';

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
        <Landing />
        
        <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}
export default App;