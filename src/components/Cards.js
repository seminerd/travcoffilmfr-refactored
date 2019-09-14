import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer
} from "mdbreact";

import Comment from "./Comments";
import CommentBox from "./CommentBoxAndButton";
class CardPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: props.photo
    };
    console.log("Constructing");
    console.log(props);
    console.log(this.state.photo);
  }

  componentDidMount() {
    let photo = this.props.photo;
    this.setState({ photo: photo });
    console.log("did mount");
  }

  render() {
    console.log("rendering");
    return (
      <React.Fragment>
        <div key={this.state.photo.id} style={{ marginBottom: "50px" }}>
          <center>
            <MDBCard
              className="shadow hoverable"
              style={{
                width: "42rem"
              }}
            >
              <MDBCardImage
                className="img-fluid"
                variant="top"
                key={this.state.photo.id}
                src={this.state.photo.source}
                alt={this.state.photo.id}
              />
              <MDBCardBody>
                <MDBContainer>
                  <MDBCardTitle align="left" style={{ font: "UTM Avo" }}>
                    {this.state.photo.title}
                  </MDBCardTitle>
                  {this.state.photo.comments.map(comment => (
                    <Comment content={comment.content} />
                  ))}
                  <CommentBox photo_id={this.state.photo.id} />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default CardPhoto;
