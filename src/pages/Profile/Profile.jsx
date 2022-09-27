import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";

import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";

import { useParams } from "react-router-dom";

export default function ProfilePage({ loggedUser, handleLogout }) {
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { username } = useParams(); // username is defined in the App folder in the Router path="/:username"


  const getProfile = useCallback(async () => {
    try {
      const response = await userService.getProfile(username); // this line evaluates to what the server responds to the request with
      // after we get the response to the server
      // so lets flip the loading state
      setLoading(false);
      setProfileUser(response.data.user);

      console.log(response);
    } catch (err) {
      console.log(err.message);
      setError("Profile does not exist! You are in the wrong in place"); // < this is message we leave the user
      // to see
    }
  }, [username]);

  useEffect(() => {
    console.log("firing!");
    // When the page loads, lets send a get request to the server
    // to get whoever's profile page I'm on. (example, localhost:3000/jim) <-- jim's profile info I want to get

    getProfile();
  }, [username, getProfile]);

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
        <Loading />
      </>
    );
  }

  return (
    <Grid>
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