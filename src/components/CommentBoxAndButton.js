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
  handleSubmit(event){
    event.preventDefault();

  }
  postComment() {
    if(!(this.state.content==='')) {
      axios({
        method: "post",
        url: "https://salty-springs-26389.herokuapp.com/comment?content="+this.state.content+"&photo_id="+this.state.photo_id
      });
      console.log("posted");
      alert("Comment gửi rồi đó ! Reload sẽ thấy nha ^^ ");
      document.getElementById("content"+this.state.photo_id).value='';
    } else 
    alert("Không gửi được comment rỗng đâu nha ! :\"> ");
      

  }
  render() {
    return (
      <React.Fragment>
        <Form align="right" onSubmit={this.handleSubmit} >
          <Form.Group
            id="cmt"
            align="left"
            width="100px"
            controlId="formBasicEmail"
            onSubmit={() => {return false;}}
          >
            <Form.Control
            id = {"content" +this.state.photo_id}
              type="text"
              placeholder="Comment here"
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
          <MDBBtn onClick={this.postComment.bind(this)} type="submit" className="btn btn-light-blue">
            comment~
          </MDBBtn>
        </Form>
      </React.Fragment>
    );
  }
}

export default CommentBox;
