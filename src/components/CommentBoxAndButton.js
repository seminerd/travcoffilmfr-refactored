import React, { Component } from "react";
import { MDBCardText, MDBBtn } from "mdbreact";
import { Form } from "react-bootstrap";
import axios from "axios";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: props.photo_id,
      content: ""
    };
  }

  handleChange(event) {
      this.setState({photo_id:this.props.photo_id})
    this.setState({ content: event.target.value });
    console.log(event.target.value);
  }
  postComment() {
    axios({
        method: "post",
        url: "https://salty-springs-26389.herokuapp.com/comment?content="+this.state.content+"&photo_id="+this.state.photo_id
      });
      console.log("posted");
      alert("Comment sent, you'll see it after reload");
      return ( <React.Fragment><MDBCardText align="left" className="card-text">{this.state.content}</MDBCardText></React.Fragment> );

  }
  render() {
    return (
      <React.Fragment>
        <form align="right">
          <Form.Group
            id="cmt"
            align="left"
            width="100px"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="Comment here"
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
          <MDBBtn onClick={this.postComment.bind(this)} type="button" className="btn btn-light-blue">
            comment~
          </MDBBtn>
        </form>
      </React.Fragment>
    );
  }
}

export default CommentBox;
