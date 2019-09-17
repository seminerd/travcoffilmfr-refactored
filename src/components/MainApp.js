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
      photos: props.photoset,
      insideStyles: {
        padding: 20,
        position: "relative",
        // top: "50%",
        // left: "50%",
        // transform: "translate(0%,0%)"
      },
      width: null,
      height: null,
      bg: "bg.jpg",
      bgStyle:{
        position:"absolute",
        width:window.screen.availWidth*1.2,
        height: window.screen.availHeight*1.2,
        repeat:"repeat-y"

      }
    
    };
  }

  componentDidMount() {
    this.setState({bgStyle:{
      position:"absolute",
        width:window.screen.availWidth*1.2,
        height: window.screen.availWidth*12,
        repeat:"repeat-y"
    }})
    this.setState({ width: window.screen.availWidth });
    this.setState({
      insideStyles: {
        padding: 20,
        position: "relative",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%,-50%)"
        width: window.screen.availWidth
        
      }
    });

    this.setState({ height: window.screen.availHeight });
  }
  render() {
    console.log(this.props);
    return (
      <Parallax bgImage={this.state.bg} bgStyle={{backgroundRepeat:"repeat"}}bgImageStyle={this.state.bgStyle} strength={this.state.width * 6}>
        <div style={this.state.insideStyles}>
          <div>
            <NavBarApp id="navbar" />
          </div>
          <div>
            <Header id="header" />
          </div>
          {this.props &&
            this.props.photoset.map(photo => (
              <CardPhoto photo_id={photo.id} key={photo.id} photo={photo} />
            ))}
          <div>
            <Footer />
          </div>
        </div>
      </Parallax>
    );
  }
}

export default MainApp;
