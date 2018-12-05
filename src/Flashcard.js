import React from "react";
import { Card, Button } from "semantic-ui-react";

const Flashcard = ({ front, back }) => (
  <Card.Content>
    <Card.Header color="teal">{front} </Card.Header>
    <Button basic color="red">
      Delete
    </Button>
  </Card.Content>
);

export default Flashcard;
