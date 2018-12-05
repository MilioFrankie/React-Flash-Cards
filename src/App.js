import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import Cards from "./Cards";

class App extends Component {
  state = {
    cards: [
      { id: 1, front: "Does this work?", back: "Yes it does!" },
      { id: 2, front: "How is life?", back: "Is good!" },
      { id: 3, front: "Do you understand react?", back: "Yeah I do!" }
    ]
  };

  render() {
    return (
      <Container>
        <Header as="h1">REACT FLASH CARDS</Header>
        <Cards cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;
