import React, { Component } from "react";
import Comment from "./components/Comment";
import styled from "styled-components";

/**
 * 1) fetch comments data from
 * https://jsonplaceholder.typicode.com/comments
 * 2) render the data as:
 * name  : <comment-owner-name>
 * email : <comment-owner-email>
 * body  : <comment-owner-body>
 * you can skip the : but make sure that the values are aligned
 * 3) the list is going to pull 500 entries and might take a bit time. Let's
 * render 4 states on the screen
 *    a. empty state (shows not comments in the list)
 *    b. loading state (shows a loader while the api call is done)
 *    c. final state wich is mentiond in (2)
 *    d. (optional) error state (server error response)
 */

const List = styled.ul``;

const Background = styled.div`
  background-color: lightgrey;
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 15px;
`;

const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  heigth: 30px;
  background-color: lightgrey;
  border-radius: 15px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: [],
      offset: 0,
      perPage: 4,
      currentPage: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(
        (result) => {
          const slice = result.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          );

          this.setState({
            isLoaded: true,
            comments: slice,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  previos = () => {
    this.setState({ offset: this.state.offset - 4 });
    console.log(this.state.offset);
  };

  next = () => {
    this.setState({ offset: this.state.offset + 4 });
  };

  render() {
    const { error, isLoaded, comments } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Background>
          <List>
            {comments.map((comment) => (
              <Comment
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </List>
          <ButtonRow>
            <MyButton onClick={this.previos}>
              <p>Previous</p>
            </MyButton>

            <MyButton onClick={this.next}>
              <p>Next</p>
            </MyButton>
          </ButtonRow>
        </Background>
      );
    }
  }
}

export default App;
