import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login"
import MyProfile from "./MyProfile";
import NavBar from "./NavBar";
import Map from "./Map";

function App() {
  return (

    <> 
      <NavBar />
        <Switch>
          <Route exact path = "/">
              <Login />
          </Route>
          <Route exact path = "/myprofile">
              <MyProfile />
          </Route>
          <Route exact path = "/map">
              <Map />
          </Route>
        </Switch>
    </>


    // <div className="App">
    //   <header className="App-header">
    //     <h1>TEST</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
