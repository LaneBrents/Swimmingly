import React from 'react';
import PageHeader from '../../components/Header/Header';

import CreateTeam from "../CreateTeam/CreateTeam"
import Calendar from "../CalendarView/CalendarView"
import { GridColumn } from 'semantic-ui-react';
import Loader from "../Loader/Loader";

export default function Dashboard({
    TeamInfo,
    CreateTeam,
    Calendar,
}) {
    return (
        <h2>Team Info</h2>
        // <div class="TeamInfo-dashboard">
        //     <Grid>
        //         <Grid.Row centered>
        //             <Grid.Column>
        //                Team Info = {{ TeamInfo }}
        //             </Grid.Column>
        //         </Grid.Row>
        //         <Grid.Row centered>
        //             <GridColumn>
        //                 {{ CreateTeam }}
        //             </GridColumn>
        //         </Grid.Row>
        //         <Grid.Row centered>
        //             <Grid.Column>
        //                 {{ Calendar }}
        //             </Grid.Column>
        //         </Grid.Row>
        //     </Grid>
        // </div>
    );
}
{
    return (
        <CreateTeam
            CreateTeam={CreateTeam}
        />
    );
}

{
    return (
        <Calendar
            Calendar={Calendar}
        />
    );
}
