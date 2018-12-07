import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import Flashcards from "./Flashcards";
import CardForm from "./CardForm";
import { App } from "./App.scss";

class Main extends Component {
  state = {
    flashCrds: [
      { id: 1, front: "Does this work?", back: "Yes it does!" },
      { id: 2, front: "How is life?", back: "Is good!" },
      { id: 3, front: "Do you understand react?", back: "Yeah I do!" }
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = cardData => {
    let fcard = { id: this.getId(), ...cardData };
    this.setState({ flashCrds: [fcard, ...this.state.flashCrds] });
  };

  removeCard = id => {
    const fCards = this.state.flashCrds.filter(fcard => {
      if (fcard.id !== id) return fcard;
    });
    this.setState({ flashCrds: [...fCards] });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#b0bec5",
          paddingBottom: "800px",
          paddingTop: "100px"
        }}
      >
        <Container style={{ marginTop: "45px" }}>
          <Header textAlign="center" as="h1">
            REACT FLASH CARDS
          </Header>
          <br />
          <CardForm add={this.addCard} />
          <Flashcards
            flashCards={this.state.flashCrds}
            remove={this.removeCard}
          />
        </Container>
      </div>
    );
  }
}

export default Main;
