import React from 'react';
import { Table } from "semantic-ui-react";
import SwimmerComponent from '../Swimmer/Swimmer';

export default function SwimmerGallery({ swimmers, handleDeleteSwimmer }) {

    return (
        <>
            <Table stackable>
                {swimmers.map((swimmer) => {
                    return (
                        <SwimmerComponent
                        swimmer={swimmer}
                        key={swimmer._id}
                        handleDeleteSwimmer={handleDeleteSwimmer}
                        />
                    )
                })}
            </Table>
        </>
    )


}