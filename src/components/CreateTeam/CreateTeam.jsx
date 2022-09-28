import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function AddTeamForm(props) {
    const [state, setState] = useState({
        name: "",
    });

  function handleChange(e) {
    setState({
      caption: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", state.name);
    props.handleAddTeam(formData);
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="name"
          value={state.name}
          placeholder="What's Your Team Name?"
          onChange={handleChange}
          required
        />
        <Button type="submit" className="btn">
          Create Team
        </Button>
      </Form>
    </Segment>
  );
}