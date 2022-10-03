import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../Profile/Profile";

import userService from "../../utils/userService";

import HeatsheetPage from "../Heatsheet/Heatsheet";
import MyTeamPage from "../MyTeam/MyTeam";
import Home from "../Home/Home";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home loggedInUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/:_id"
          element={<MyTeamPage loggedInUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        {/* <Route
          path="/:username"
          element={<ProfilePage loggedUser={user} handleLogout={handleLogout} />}
        /> */}
        {/* <Route
          path="/heatsheet"
          element={<HeatsheetPage loggedUser={user} handleLogout={handleLogout} />}
        /> */}
      </Routes>
    );
  }

// If user is not logged in, will only be able to do these
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
