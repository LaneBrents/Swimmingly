import React, { useState } from 'react';
import { Table, TableBody, TableHeader, Button } from "semantic-ui-react";

export default function SwimmerComponent({ swimmer, handleDeleteSwimmer }) {

    const [state, setState] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        const request = swimmer._id;
        console.log(request, "<- the deleteSwimmer request")
        handleDeleteSwimmer(request);
        setState(false)
    }


    return (
        <Table >
            <TableHeader>
                Name
            </TableHeader>
            <TableBody>
                name={swimmer.name}
            </TableBody>
            <TableHeader>
                Grade
            </TableHeader>
            <TableBody>
                grade={swimmer.grade}
            </TableBody>
            <TableHeader>
                Gender
            </TableHeader>
            <TableBody>
                gender={swimmer.gender}
            </TableBody>
            <TableHeader>
                Events
            </TableHeader>
            <TableBody>
                events={swimmer.events}
            </TableBody>
            <TableHeader>
                Delete
            </TableHeader>
            <TableBody>
                    <Button onSubmit={handleSubmit} type="submit" color="red">Delete Game</Button>
            </TableBody>
        </Table>
    )
}