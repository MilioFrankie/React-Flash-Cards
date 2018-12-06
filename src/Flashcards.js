import React from "react";
import { Card, Container } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashCards, remove }) => (
  <Container textAlign="center">
    {flashCards.map(flashcard => (
      <Card>
        <Flashcard key={flashcard.id} {...flashcard} remove2={remove} />
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
