import React from 'react';

import PageHeader from "../../components/Header/Header";
// import CreateTeam from "../CreateTeam/CreateTeam"
import NewSwimmer from '../../components/NewSwimmer/NewSwimmer';
import { GridColumn } from 'semantic-ui-react';
import AddTeamForm from '../../components/CreateTeam/CreateTeam';
// import Loader from "../Loader/Loader";

export default function Dashboard({ loggedUser, handleLogout }) {
    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <div className="MyDashboard">
                <h2>Welcome to Swimmingly!</h2>
                <p>Swimmingly is an easy team manager that tracks your swim teams members as well as their times and events</p>
                <h3>Get started below by creating a team!</h3>
            </div>

            <AddTeamForm />
        </>
    );
}
