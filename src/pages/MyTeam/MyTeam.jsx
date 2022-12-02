import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Grid, Container } from 'semantic-ui-react';

import "./MyTeam.css";
import AddSwimmer from '../../components/AddSwimmer/AddSwimmer';
import SwimmerGallery from '../../components/SwimmerGallery/SwimmerGallery';
import * as swimmerAPI from "../../utils/swimmerAPI"

export default function Home({ handleLogout }) {

    const [swimmers, setSwimmers] = useState([]);

    async function getSwimmers() {
        try {
            const response = await swimmerAPI.getSwimmers();
            setSwimmers([...response.data]);
        } catch (err) {
            console.log(err, '<-erroe in getSwimmers');
        }
    }

    useEffect(() => {

        getSwimmers();
    }, []);

    async function handleAddSwimmer(swimmer) {
        try {
            const response = await swimmerAPI.create(swimmer);
            console.log(response);
            getSwimmers();
            // setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddSwimmer function: ", err);
        }
    }

    async function handleDeleteSwimmer(swimmer) {
        try {
            const response = await swimmerAPI.deleteSwimmer(swimmer);
            console.log(response);
            getSwimmers();
        } catch (err) {
            console.log("Error in the handleDeleteSwimmer function");
        }
    }

    return (
        <>
        <Container className='backgroundImg'>
            <img className='backgroundImg' src={'https://i.imgur.com/UeA0BjR.jpg'} alt="img" >
            </img>
            <br />
            <div className="WelcomeText">
                <h1>Swimmers</h1>
            </div>
            <Grid>
                <Grid.Row centered>
                    <AddSwimmer className="AddSwimmer" handleAddSwimmer={handleAddSwimmer} />
                </Grid.Row>
                <Grid.Row className='cards' centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <SwimmerGallery
                            swimmers={swimmers}
                            handleDeleteSwimmer={handleDeleteSwimmer}
                            itemsPerRow={6}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </>
    );
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

