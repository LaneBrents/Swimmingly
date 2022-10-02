import React from 'react';
import { Card } from "semantic-ui-react";
import SwimmerComponent from '../Swimmer/Swimmer';

export default function SwimmerGallery({ swimmers, itemsPerRow, handleDeleteSwimmer }) {

    return (
        <>
            <Card.Group itemsPerRow={itemsPerRow} stackable>
                {swimmers.map((swimmer) => {
                    return (
                        <SwimmerComponent
                            swimmer={swimmer}
                            key={swimmer._id}
                            handleDeleteSwimmer={handleDeleteSwimmer}
                        />
                    )
                })}
            </Card.Group>
        </>
    )
}