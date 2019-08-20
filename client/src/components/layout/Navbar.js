import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
               Nanyuki Backend Developer. Tasks Schedule...
            </Link>
            <Link to="/" className="btn-flat waves-effect">
              Back to home
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;