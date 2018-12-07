import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

const Flashcard = ({ id, front, back, remove2 }) => (
  <Card.Content textAlign="center">
    <Card.Header style={{ marginBottom: "30px" }}>{front} </Card.Header>

    <Button.Group>
      <Button basic color="blue">
        <Icon name="edit" />   
      </Button>
      <Button.Or text="or" />
      <Button basic color="red" onClick={() => remove2(id)}>
        <Icon name="trash alternate" />
      </Button>
    </Button.Group>
  </Card.Content>
);

export default Flashcard;
