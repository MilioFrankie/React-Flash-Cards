import React from "react";
import { Card, Container } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashCards, remove }) => (
  <Card.Group itemsPerRow={3}>
    {flashCards.map(flashcard => (
      <Card
        raised
        style={{
          marginTop: "50px",
          paddingTop: "30px",
          paddingBottom: "10px",
          backgroundColor: "#fdd835"
        }}
      >
        <Flashcard key={flashcard.id} {...flashcard} remove2={remove} />
      </Card>
    ))}
  </Card.Group>
);
export default Flashcards;

// <Card.Content>
//   <Card.Header color="teal">{card.front} </Card.Header>
//   <Button basic color="red">
//     Delete
//   </Button>
// </Card.Content>
