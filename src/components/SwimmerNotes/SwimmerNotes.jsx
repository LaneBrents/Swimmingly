import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function AddPostForm(props) {
  // create the state, pay attention to how the inputs are setup!
  const [state, setState] = useState({
    caption: "",
  });
  // The function that handles the changes on the input, Look at the inputs for the name of it
  const [selectedFile, setSelectedFile] = useState("");

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      caption: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", state.caption);
    props.handleAddPost(formData); // formData is the data we want to send to the server!
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="note"
          value={state.caption}
          placeholder="Add a Note"
          onChange={handleChange}
          required
        />
        <Button type="submit" className="btn">
          ADD NOTE
        </Button>
      </Form>
    </Segment>
  );
}