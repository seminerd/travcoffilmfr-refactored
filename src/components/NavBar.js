import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";

class NavBarApp extends Component {

    state = {};

    render() {
        return (
            <div>
                <Navbar style={{marginTop: "0px", marginBottom: "50px"}} className="navbar navbar-dark bg-transparent"
                        fixed="top">
                    <div align="left">
                        <img src="logo.png" alt="logo" width="200px"></img>
                        <Nav.Link
                            href="https://drive.google.com/file/d/1v2K3Z9dp2FV-4wj9p9EFbSLGziM1v7Fk/view?usp=sharing" target="_blank"><img
                            src="cv.png" width="45" height="45" alt=""></img></Nav.Link>
                        <Nav.Link href="https://www.facebook.com/poor.clicker" target="_blank" ><img src="fb.png" width="45" height="45"
                                                                                    alt=""></img></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/emo.solvent/" target="_blank" ><img src="ig.png" width="45" height="45"
                                                                                     alt=""></img></Nav.Link>
                        <Nav.Link href="https://github.com/seminerd" target="_blank" ><img src="gh.png" width="45" height="45"
                                                                          alt=""></img></Nav.Link>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default NavBarApp;
