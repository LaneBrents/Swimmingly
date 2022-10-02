import React, { useState, useEffect } from 'react';
import PageHeader from "../../components/Header/Header";
import { Grid, Container } from 'semantic-ui-react';

import "./Home.css";
import AddSwimmer from '../../components/AddSwimmer/AddSwimmer';
import SwimmerGallery from '../../components/SwimmerGallery/SwimmerGallery';
import * as swimmerAPI from "../../utils/swimmerAPI"

export default function Home({ handleLogout }) {

    const [swimmers, setSwimmers] = useState([]);

    async function getSwimmers() {
        try {
            const response = await swimmerAPI.getSwimmers();
            setSwimmers([...response.data]);
        } catch (err) {
            console.log(err, '<-erroe in getSwimmers');
        }
    }

    useEffect(() => {

        getSwimmers();
    }, []);

    async function handleAddSwimmer(swimmer) {
        try {
            const response = await swimmerAPI.create(swimmer);
            console.log(response);
            getSwimmers();
            // setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddSwimmer function: ", err);
        }
    }

    async function handleDeleteSwimmer(swimmer) {
        try {
            const response = await swimmerAPI.deleteSwimmer(swimmer);
            console.log(response);
            getSwimmers();
        } catch (err) {
            console.log("Error in the handleDeleteSwimmer function");
        }
    }

    return (
        <Container>
            <img className='backgroundImg' src={'https://i.imgur.com/UeA0BjR.jpg'} >
            </img>
            <PageHeader className="home-header" handleLogout={handleLogout} />
            <div className="WelcomeText">
                <h1>Welcome to Swimmingly!</h1>
                <h3>Swimmingly is an easy team manager that tracks your swim teams members as well as their times and events</h3>
            </div>
            <Grid>
                <Grid.Row centered>
                    <AddSwimmer className="AddSwimmer" handleAddSwimmer={handleAddSwimmer} />
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <SwimmerGallery
                            swimmers={swimmers}
                            handleDeleteSwimmer={handleDeleteSwimmer}
                            itemsPerRow={5}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}
