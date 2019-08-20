import React, { Component } from "react";
import { Link } from "react-router-dom";

// var apiBaseUrl = "https://cstonboarding.azurewebsites.net/";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      personnel_phone: "",
      personnel_password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      personnel_phone: this.state.personnel_phone,
      personnel_password: this.state.personnel_password
    };
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.personnel_phone}
                  error={errors.personnel_phone}
                  id="email"
                  type="INTEGER"
                />
                <label htmlFor="email">Username</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.personnel_password}
                  error={errors.personnel_password}
                  id="personnel_password"
                  type="password"
                />
                <label htmlFor="personnel_password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;