import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";
import AddHeatsheetForm from '../../components/HeatsheetInput/HeatsheetInput';
import * as heatsheetAPI from "../../utils/heatsheetAPI";

export default function HeatsheetPage({ loggedUser, handleLogout }) {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [heatsheet, setHeatsheet] = useState([]);

    async function handleAddHeatsheet(heatsheet) {
        try {
            setLoading(true);
            const response = await heatsheetAPI.create(heatsheet); 
            console.log(response);
            getHeatsheet();
            setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddHeatsheet function: ", err);
        }
    }

    async function handleDeleteHeatsheet(heatsheet) {
        try {
            const response = await heatsheetAPI.deleteHeatsheet(heatsheet);
            console.log(response);
            getHeatsheet();
        } catch (err) {
            console.log("Error in the handleDeleteHeatsheet function");
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
          <AddHeatsheetForm handleAddHeatsheet={handleAddHeatsheet} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Heatsheet
            heatsheet={heatsheet}
            numPhotosCol={1}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}