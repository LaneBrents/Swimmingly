import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../Profile/Profile";

import userService from "../../utils/userService";

import HeatsheetPage from "../Heatsheet/Heatsheet";
import MyTeamPage from "../MyTeam/MyTeam";
import SwimmerPage from "../Swimmer/Swimmer";
import Dashboard from "../Dashboard/Dashboard";

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
console.log('this is the user', user);
  if (user) {
    return (
      <Routes>
        <Route path="/" element={<h1>This is Home Page!</h1>} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username"
          element={<ProfilePage loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/heatsheet"
          element={<HeatsheetPage loggedUser={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/myteam"
          element={<MyTeamPage loggedUser={user} handleLogout={handleLogout} />}
        />
        {/* <Route
          path="/swimmer"
          element={<SwimmerPage loggedUser={user} handleLogout={handleLogout} />}
        /> */}
        <Route
          path="/dashboard"
          element={<Dashboard loggedUser={user} handleLogout={handleLogout} />}
        />
      </Routes>

    );
  }

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
