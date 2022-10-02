import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import SwimmerComponent from '../../components/Swimmer/Swimmer';


export default function MyTeam({ swimmer }) {
    return (
        <>
            <PageHeader />
            <h1>Swimmer Details</h1>
            <SwimmerComponent swimmer={swimmer} />
        </>
    )
}

    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);
    // const [swimmer, setSwimmer] = useState({});

    // const [swimmers, setSwimmers] = useState([]);

    // async function getAllSwimmers() {
    //     try {
    //         const response = await swimmerAPI.getSwimmer();
    //         setSwimmers([...response.data]);
    //         setLoading(false);
    //     } catch (err) {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {

    //     getAllSwimmers();
    // }, []);


    // async function handleAddSwimmer(swimmer) {
    //     try {
    //         setLoading(true);
    //         const response = await swimmerAPI.create(swimmer);
    //         console.log(response);
    //         getAllSwimmers();
    //         setLoading(false);
    //     } catch (err) {
    //         console.log("Error in the handleAddSwimmer function: ", err);
    //     }
    // }

    // async function handleDeleteSwimmer(swimmerId) {
    //     try {
    //         const response = await swimmerAPI.deleteSwimmer(swimmerId);
    //         console.log(response);
    //         getAllSwimmers();
    //     } catch (err) {
    //         console.log("Error in the handleDeleteSwimmer function");
    //     }
    // }



// ======================Alt return========================


//         <Grid centered>
//             <Grid.Row>
//                 <Grid.Column>
//                     <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
//                     {/* <AddTeamForm value={team.name} /> */}
//                 </Grid.Column>
//             </Grid.Row>
//             <Grid.Row>
//                 <Grid.Column style={{ maxWidth: 450 }}>
//                     <NewSwimmerForm handleAddSwimmer={handleAddSwimmer} />
//                     {/* <SwimmerGallery
//                     // swimmer={swimmer}
//                     handleDeleteSwimmer={handleDeleteSwimmer}
//                     /> */}
//                 </Grid.Column>
//             </Grid.Row>
//             <Grid.Row>
//                 <tr>
//                     <th>Name</th>
//                     <th>Grade</th>
//                     <th>Gender</th>
//                     <th>Events</th>
//                     <th>Delete</th>
//                 </tr>
//             </Grid.Row>
//             <Grid.Row>
//                 <Grid.Column style={{ maxWidth: 450 }}>
//                     {swimmers.map((swimmer) =>
//                         <>
//                             <tr>
//                                 <td>{swimmer.name}</td>
//                                 <td>{swimmer.grade}</td>
//                                 <td>{swimmer.gender}</td>
//                                 <td>{swimmer.events}</td>
//                                 <td><button handleDeleteSwimmer={handleDeleteSwimmer}>Delete</button></td>
//                             </tr>
//                         </>
//                     )}
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid>
//     );
// }

