import React, { useState } from 'react';

import PageHeader from "../../components/Header/Header";
import { Grid } from 'semantic-ui-react';

import MyTeam from '../MyTeam/MyTeam';
import AddTeamForm from '../../components/CreateTeam/CreateTeam';
import * as teamAPI from "../../utils/teamAPI";

export default function Dashboard({ loggedUser, handleLogout }) {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState([]);

    async function handleAddTeam(team) {
        try {
            setLoading(true);
            const response = await teamAPI.create(team); 
            console.log(response);
            getTeam();
            setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddTeam function: ", err);
        }
    }

    async function handleDeleteTeam(team) {
        try {
            const response = await teamAPI.deleteTeam(team);
            console.log(response);
            getTeam();
        } catch (err) {
            console.log("Error in the handleDeleteTeam function");
        }
    }

    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <div className="MyDashboard">
                <h2>Welcome to Swimmingly!</h2>
                <p>Swimmingly is an easy team manager that tracks your swim teams members as well as their times and events</p>
                <h3>Get started below by creating a team!</h3>
            </div>
            <Grid>
                <Grid.Row centered>
                    {/* I want this to be accordion and/or have dropdown but first I need to make sure the API calls work for it */}
                    <AddTeamForm handleAddTeam={handleAddTeam} />
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <MyTeam
                            team={team}
                            handleDeleteTeam={handleDeleteTeam}
                            itemsPerRow={3} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}
