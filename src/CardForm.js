import React from "react";
import { Form } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { front: "", back: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ front: "", back: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ marginTop: "20px" }}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Front of Card"
            placeholder="Enter Question"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Back of Card"
            placeholder="Enter Answer"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color="green">Submit</Form.Button>
        <hr/>
      </Form>
    );
  }
}

export default CardForm;
