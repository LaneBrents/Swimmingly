import React from 'react';
import PageHeader from "../../components/Header/Header";
import AddHeatsheetForm from '../../components/HeatsheetInput/HeatsheetInput';

export default function HeatsheetPage({ loggedUser, handleLogout }) {
    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <h1>Heatsheet Form:</h1>
            {/* <Heatsheet heatsheet={heatsheet} /> */}
        </>
    );
}