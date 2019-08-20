import React, { Component } from "react";
import './App.css';

import { BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";


class App extends Component{
 
    state = {
      todos: []
    }
    

  // callAPI(){
  //   fetch('http://localhost:9000/testAPI')
  //   .then(res=>res.text())
  //   .then(res=>this.setState({ apiResponse:res }))
  //   .catch(err => err);
  // }


  callData(){
    fetch('https://cstonboarding.azurewebsites.net/GET/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC')
    .then(res=>res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
   
  }

  componentDidMount() {
    this.callData();
  }


render(){
  return(
    // Nav Log

   
  <Router>
    <div className="App">
        <Navbar />
        <Landing />
        
        <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      </div> 

    <div className="container">
        <div className="col-xs-12">
        <h1>Tasks</h1>

        
          <table className = "table">
            <thead className = "thead-dark">
               <tr>
                <th scope="col">#</th>
                <th scope="col">Customer First Name</th>
                <th scope="col">Customer Last Name</th>
                <th scope="col">Task Status</th>
               </tr>
            </thead>
            <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                  <td>{todo.task_id} </td>
                  <td>{todo.customer_first_name} </td>
                  <td>{todo.customer_last_name} </td>
                  <td>{todo.task_status_name} </td>
              </tr>
              ))}
            </tbody>
          </table>
        
        </div>
        <p className = "App-intro">{this.state.apiData}</p>

    </div>
    </Router>

  );
}
}

export default App;
