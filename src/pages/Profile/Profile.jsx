import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";

import PageHeader from "../../components/NavBar/NavBar";
import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";

import { useParams } from "react-router-dom";

export default function ProfilePage({ loggedUser, handleLogout }) {
  const [error, setError] = useState("");
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { username } = useParams(); // username is defined in the App folder in the Router path="/:username"

//------------------Get Profile---------------------------
  const getProfile = useCallback(async () => {
    try {
      const response = await userService.getProfile(username);
      setLoading(false);
      setProfileUser(response.data.user);

      console.log(response);
    } catch (err) {
      console.log(err.message);
      setError("Profile does not exist! You are in the wrong in place");
    }
  }, [username]);

  useEffect(() => {
    getProfile();
  }, [username, getProfile]);
//---------error msg----------------
  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
      </>
    );
  }
//------------loading msg-------------
  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <Loading />
      </>
    );
  }
//--------------return----------------
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>

      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}