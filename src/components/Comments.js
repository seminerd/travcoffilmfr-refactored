import React, { Component } from 'react';
import {MDBCardText} from "mdbreact";
class Comment extends Component {
    state = { comment:null }
    
    render() { 
        return ( <React.Fragment><MDBCardText align="left" style = {{fontfamily:"UTM Avo"}} className="card-text">" {this.props.content} "</MDBCardText></React.Fragment> );
    }
}
 
export default Comment;