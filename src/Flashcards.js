import React from "react";
import { Card, Container } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashCards }) => (
  <Container textAlign="center">
    {flashCards.map(flashcards => (
      <Card>
        <Flashcard key={flashcards.id} {...flashcards} />
      </Card>
    ))}
  </Container>
);
export default Flashcards;

// <Card.Content>
//   <Card.Header color="teal">{card.front} </Card.Header>
//   <Button basic color="red">
//     Delete
//   </Button>
// </Card.Content>
