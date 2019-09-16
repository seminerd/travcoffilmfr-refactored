import React, { Component } from "react";
import CardPhoto from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import NavBarApp from "./NavBar";
import { Parallax } from "react-parallax";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      insideStyles: {
        padding: 20,
        position: "relative",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%,-50%)"
        width:null
      },
      width: null,
      height: null,
      bg: "bg.jpg"
    };
  }

  componentDidMount() {
    this.setState({ width: window.screen.availWidth });
    this.setState({ insideStyles:{
      padding: 20,
      position: "relative",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%,-50%)"
      width:window.screen.availWidth
    } });

    this.setState({ height: window.screen.availHeight });
    let photos = this.props.photoset;
    this.setState({ photos: photos });
  }
  render() {
    console.log(this.props);
    return (
      <Parallax
        bgImage={this.state.bg}
        
        
        
        strength={this.state.width*2}
      >
        <div style={this.state.insideStyles}>
          <div><NavBarApp id="navbar"/></div>
          <div><Header id="header"/></div>
          {this.props && this.props.photoset.map((photo) => (
            <CardPhoto photo_id={photo.id} key={photo.id} photo={photo} />
          ))}
          <div><Footer/></div>
        </div>
      </Parallax>
    );
  }
}

export default MainApp;
