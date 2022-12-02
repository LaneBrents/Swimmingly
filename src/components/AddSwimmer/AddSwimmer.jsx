import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";
import './AddSwimmer.css'

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
        <Card className="card" style={{ width: '77%', background: 'rgb(22, 58, 105)', }}>
            <Form onSubmit={handleSubmit}>
            <h3>Add a Swimmer:</h3>
                <Form.Group style={{margin:'0 auto',}}>
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
                </Form.Group>
                <Button style={{margin: '5px'}} type="submit" color="blue" className="btn">Add Swimmer</Button>
            </Form>
        </Card>
    );
}