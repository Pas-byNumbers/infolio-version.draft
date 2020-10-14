import React, { useState, useEffect } from "react";
import {
  logoutUser,
  getUserProfile
} from './actions/userActions'
import UserMenu from "./components/menus/UserMenu";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route} from "react-router-dom";
import NotesContainer from "./containers/NotesContainer";

function App(
  {
    logoutUser,
    getUserProfile
  }
) {

  useEffect(() => {
    getUserProfile()
  });



  return (
    
    <div className="App">
      <header className="App-header">
        <UserMenu 
          handleLogout={logoutUser}
        />
      </header>
      <body>
        <Switch>
        <Route path="/notes">
          <NotesContainer />
        </Route>

        <Route exact path="/" />
      </Switch>
      </body>
      
    </div>
  );
}





export default connect(
  null, 
  { 
    logoutUser,
    getUserProfile 
  })(App)
