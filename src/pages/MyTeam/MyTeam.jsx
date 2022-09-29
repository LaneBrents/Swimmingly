import React from 'react';
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import NewSwimmerForm from '../../components/NewSwimmer/NewSwimmer';

export default function MyTeam({ loggedUser, handleLogout }) {
    return (
        <>
            <div>
                <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            </div>

            <div className="MyTeam">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Gender</th>
                        <th>Events</th>
                    </tr>
                    <tr>
                        <td> Name </td>
                        <td> Grade </td>
                        <td> Gender </td>
                        <td> Events </td>
                    </tr>
                </table>
            </div>
            <NewSwimmerForm />
        </>
    );
}
