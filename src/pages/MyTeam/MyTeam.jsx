import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import NewSwimmerForm from '../../components/NewSwimmer/NewSwimmer';
import * as swimmerAPI from "../../utils/swimmerAPI"; 

export default function MyTeam({ loggedUser, handleLogout }) {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [swimmer, setSwimmer] = useState([]);

    async function handleAddSwimmer(swimmer) {
        try {
            setLoading(true);
            const response = await swimmerAPI.create(swimmer);
            console.log(response);
            getSwimmer();
            setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddSwimmer function: ", err);
        }
    }

    async function handleDeleteSwimmer(swimmer) {
        try {
            const response = await teamAPI.deleteSwimmer(swimmer);
            console.log(response);
            getSwimmer();
        } catch (err) {
            console.log("Error in the handleDeleteSwimmer function");
        }
    }




    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <NewSwimmerForm handleAddSwimmer={handleAddSwimmer} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <MyTeam
                        swimmer={swimmer}
                        // name={Name}
                        // grade={Grade}
                        // gender={Gender}
                        // events={Events}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

