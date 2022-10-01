import React from 'react';
import { Table, TableBody, TableHeader } from "semantic-ui-react";
import swimmer from '../../../models/swimmer';
// import NewSwimmerForm from '../NewSwimmer/NewSwimmer';

export default function SwimmerTable({ swimmers, handleAddSwimmer, handleDeleteSwimmer }) {
    return (
        <>
            <TableHeader
            Name
            Grade
            Gender
            Events
            />
            <TableBody 
            Name={swimmer.name}
            Grade={swimmer.grade}
            Gender={swimmer.gender}
            Events={swimmer.events}
            handleDeleteSwimmer={handleDeleteSwimmer}
            />
        </>
    )
}