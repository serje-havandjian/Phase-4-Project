import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import MyProfile from "./MyProfile";
import NavBar from "./NavBar";
import Map from "./Map";
import Home from "./Home";
import SignUp from "./SignUp";


function App() {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

    return (
        <> 
            <NavBar user={user} setUser={setUser} />
            <main>
                {user ? (
                    <Switch>
                        <Route exact path="/">
                            <Home user={user}/>
                        </Route>
                        <Route exact path ="/map">
                            <Map />
                        </Route>
                        <Route exact path ="/myprofile">
                            <MyProfile />
                        </Route>
                    </Switch>
                ) : (
                <Switch>
                    <Route exact path="/signup">
                        <SignUp setUser={setUser} />
                    </Route>
                    <Route exact path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
                )}
            </main>
        </>
  );
}

export default App;
