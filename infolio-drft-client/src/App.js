import React, { useState, useEffect } from "react";
import { logoutUser, getUserProfile } from "./actions/userActions";
import UserMenu from "./components/menus/UserMenu";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotesContainer from "./containers/NotesContainer";

function App({
  // currentUserData,
  logoutUser,
  getUserProfile,
}) {
  // const [ currentUser, setCurrentUser ] = React.useState(currentUserData)

  useEffect(() => {
    getUserProfile();
  });

  return (
    <div className="App">
      <header className="App-header">
        <UserMenu handleLogout={logoutUser} />
      </header>
      <body>
        <BrowserRouter>
          <Switch>
            <Route path="/notes">
              <NotesContainer />
            </Route>

            <Route exact path="/" />
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default connect(
  // state => ({
  //   currentUserData: state.user.currentUser
  // }),
  null,
  {
    logoutUser,
    getUserProfile,
  }
)(App);
