import React from 'react';
import { Table, TableBody, TableHeader } from "semantic-ui-react";
import NewSwimmerForm from '../NewSwimmer/NewSwimmer';

export default function SwimmerTable({ swimmer, handleDeleteSwimmer }) {
    return (
        <>
            <TableHeader
                Name
                Grade
                Gender
                Events
            />
            {swimmer.map((swimmer) => {
            <TableBody
                Name={swimmer.name}
                Grade={swimmer.grade}
                Gender={swimmer.gender}
                Events={swimmer.events}
                handleDeleteSwimmer={handleDeleteSwimmer}
            />
            })};
        </>
    )
}