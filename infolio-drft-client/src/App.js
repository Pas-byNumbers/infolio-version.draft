import React, { useState, useEffect } from "react";
import {
  logoutUser,
  getUserProfile
} from './actions/userActions'
import UserMenu from "./components/menus/UserMenu";
import "./App.css";
import { connect } from "react-redux";

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
    </div>
  );
}





export default connect(
  null, 
  { 
    logoutUser,
    getUserProfile 
  })(App)
