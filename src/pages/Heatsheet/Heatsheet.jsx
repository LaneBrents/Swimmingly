import React from 'react';
import PageHeader from "../../components/Header/Header";
import AddHeatsheetForm from '../../components/HeatsheetInput/HeatsheetInput';

export default function HeatsheetPage({ loggedUser, handleLogout }) {
    return (
      <>
      <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
      <div className="MyTeam">
        <h2>Heatsheets:</h2>
      </div>
      <AddHeatsheetForm />
      </>
    );
  }