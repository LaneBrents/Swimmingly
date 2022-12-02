import React, { useState, useEffect } from 'react';
import { Container, Button } from 'semantic-ui-react';

import "./Home.css"

export default function Home({ handleLogout }) {

    return (
        <Container className='backgroundImg'>
            <img className='backgroundImg' src={'https://i.imgur.com/UeA0BjR.jpg'} alt="img" >
            </img>
            <br />
            <div className="WelcomeText">
                <h1>Welcome to Swimmingly</h1>
                <h2>An easy-to-use team manager that</h2>
                <h1>Takes the Stress out of Running your Swim Team</h1>
            </div>
            <div className='GetStarted'>
                <h2>Get started!</h2>
                <a href="/MyTeam" className='button'>
                <Button basic color="yellow"> My Team </Button>
                </a>
            </div>
        </Container>
    );
}
