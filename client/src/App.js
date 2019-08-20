import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import LoginPage from './auth/LoginPage';


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
    fetch('http://localhost:9000/tasks')
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

  );
}
}

export default App;
