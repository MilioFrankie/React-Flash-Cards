import React from "react";
import { Card } from "semantic-ui-react";

const Cards = ({ cards }) =>
  cards.map(card => <Card header={card.front} color="teal" />);

export default Cards;
