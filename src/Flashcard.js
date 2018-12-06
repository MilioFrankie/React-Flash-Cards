import React from "react";
import { Card, Button } from "semantic-ui-react";

const Flashcard = ({ id, front, back, remove2 }) => (
  <Card.Content>
    <Card.Header color="teal">{front} </Card.Header>
    <Button basic color="red" onClick={() => remove2(id)}>
      Delete
    </Button>
  </Card.Content>
);

export default Flashcard;
