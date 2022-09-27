import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function NewSwimmerForm(props) {

    const navigate = useNavigate();

    const [state, setState] = useState({
        name: "",
        grade: "",
        gender: "",
    });


    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {
            await props.handleAddSwimmer(state);
            navigate("/MyTeamView");
        } catch (err) {
            console.log(err, "<- in AddSwimmer")
        }
    }


    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    className="form-control"
                    name="name"
                    value={state.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                 <Form.Input
                    className="form-control"
                    name="grade"
                    value={state.grade}
                    placeholder="Grade"
                    onChange={handleChange}
                    required
                />
                 <Form.Input
                    className="form-control"
                    name="gender"
                    value={state.gender}
                    placeholder="Gender"
                    onChange={handleChange}
                    required
                />
                <Button type="submit" className="btn">
                    Add Swimmer
                </Button>
            </Form>
        </Segment>
    );
}