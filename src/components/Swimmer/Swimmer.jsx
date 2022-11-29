import React, { useState } from 'react';
import { Card, Form, Button, Segment } from "semantic-ui-react";

export default function SwimmerComponent({ swimmer, handleDeleteSwimmer }) {

    const [setState] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        const request = swimmer._id;
        console.log(request, "<- the deleteSwimmer request")
        handleDeleteSwimmer(request);
        setState(false)
    }


    return (
        <Card key={swimmer._id} raised>
            <Segment textAlign='center'>
                <p>Name: {swimmer.name}</p>
                <p>Grade: {swimmer.grade}</p>
                <p>Gender: {swimmer.gender}</p>
                <p>Events: {swimmer.events}</p>
            </Segment>
            <Form onSubmit={handleSubmit} >
                <Button type="submit" color="red">Delete Swimmer</Button>
            </Form>
        </Card>
    )
}




        // <Table >
        //     <TableHeader>
        //         Name
        //     </TableHeader>
        //     <TableBody>
        //         name={swimmer.name}
        //     </TableBody>
        //     <TableHeader>
        //         Grade
        //     </TableHeader>
        //     <TableBody>
        //         grade={swimmer.grade}
        //     </TableBody>
        //     <TableHeader>
        //         Gender
        //     </TableHeader>
        //     <TableBody>
        //         gender={swimmer.gender}
        //     </TableBody>
        //     <TableHeader>
        //         Events
        //     </TableHeader>
        //     <TableBody>
        //         events={swimmer.events}
        //     </TableBody>
        //     <TableHeader>
        //         Delete
        //     </TableHeader>
        //     <TableBody>
        //             <Button onSubmit={handleSubmit} type="submit" color="red">Delete Game</Button>
        //     </TableBody>
        // </Table>
  