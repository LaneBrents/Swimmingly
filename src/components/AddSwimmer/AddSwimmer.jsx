import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";

export default function AddSwimmer({ handleAddSwimmer }) {

    // const navigate = useNavigate();

    const [state, setState] = useState({
        name: "",
        grade: "",
        gender: "",
        events: "",
    });

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {

        e.preventDefault();
        const requestData = state;
        handleAddSwimmer(requestData);
        setState({
            name: "",
            grade: "",
            gender: "",
            events: "",
        })
    }


        return (
            <Card>
                <Form onSubmit={handleSubmit}>
                    <h2>Add a New Swimmer:</h2>
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
                    <Form.Input
                        className="form-control"
                        name="events"
                        value={state.events}
                        placeholder="Events"
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" className="btn">Add Swimmer</Button>
                </Form>
            </Card>
        );
    }