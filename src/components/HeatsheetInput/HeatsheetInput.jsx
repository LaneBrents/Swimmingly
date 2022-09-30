import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function AddHeatsheetForm(props) {
  // create the state, pay attention to how the inputs are setup!
  const [state, setState] = useState({
    meet: "",
  });
  // The function that handles the changes on the input, Look at the inputs for the name of it
  const [selectedFile, setSelectedFile] = useState("");

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      meet: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("meet", state.meet);
    props.handleAddHeatsheet(formData); 
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <h2>Add a Heatsheet:</h2>
        <Form.Input
          className="form-control"
          name="meet"
          value={state.meet}
          placeholder="What Swim Meet is this?"
          onChange={handleChange}
          required
        />
        <Form.Field>
          <Form.Input
            type="file"
            name="photo"
            placeholder="Upload Heatsheet"
            onChange={handleFileInput}
          />
        </Form.Field>
        <Button type="submit" className="btn">
          Add Heatsheet
        </Button>
      </Form>
    </Segment>
  );
}