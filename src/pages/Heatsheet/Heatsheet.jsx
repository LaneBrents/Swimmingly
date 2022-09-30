import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from "../../components/Header/Header";
import AddHeatsheetForm from '../../components/HeatsheetInput/HeatsheetInput';
import * as heatsheetAPI from "../../utils/heatsheetAPI";

export default function HeatsheetPage({ loggedUser, handleLogout }) {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [heatsheet, setHeatsheet] = useState([]);

    const [heatsheets, setHeatsheets] = useState([]);

    async function getAllHeatsheets() {
        try {
            const response = await heatsheetAPI.getHeatsheet();
            setHeatsheets([...response.data]);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    useEffect(() => {

        getAllHeatsheets();
    }, []);


    async function getHeatsheet() {
        try {
            const response = await heatsheetAPI.getHeatsheet();
            setHeatsheet([...response.data]);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    useEffect(() => {

        getHeatsheet();
    }, []);


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

    async function handleDeleteHeatsheet(heatsheetId) {
        try {
            const response = await heatsheetAPI.deleteHeatsheet(heatsheetId);
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
                {heatsheets.map((heatsheet) =>
                        <>
                            <tr>
                                <td>{heatsheet.image}</td>
                            </tr>
                        </>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}