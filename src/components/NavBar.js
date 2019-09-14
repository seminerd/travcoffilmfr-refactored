import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavBarApp extends Component {
    
  state = {};
  render() {
    return (
      <div>
        <Navbar style={{marginTop:"0px",marginBottom:"50px"}} className="navbar navbar-dark bg-transparent" fixed="top"  >
          <div align="left">
            <img src="logo.png" alt="logo" width="200px"></img>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarApp;
