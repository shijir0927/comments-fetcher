import React from "react";
import styled from "styled-components";

const CommentItem = styled.div`
  width: 800px;
  background-color: white;
  border-radius: 25px;
  margin-bottom: 25px;
  padding: 15px;
`;
const Row = styled.div`
  display: flex;

  align-items: center;
`;

const BoldText = styled.h3`
  margin-right: 2em;
`;
class Comment extends React.Component {
  render() {
    return (
      <CommentItem>
        <Row>
          <BoldText>Name</BoldText>
          <p>{this.props.name}</p>
        </Row>
        <Row>
          <BoldText>Email</BoldText>
          <p>{this.props.email}</p>
        </Row>
        <Row>
          <BoldText>Body</BoldText>
          <p>{this.props.body}</p>
        </Row>
      </CommentItem>
    );
  }
}

export default Comment;
