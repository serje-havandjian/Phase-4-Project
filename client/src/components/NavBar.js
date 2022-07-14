import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Map from "./Map";
import { Button } from 'semantic-ui-react';

function NavBar({ user, setUser }) {

  const history = useHistory()

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          history.push("/login")
        }
      });
    }
  
    return (
      <header>
        <div>
          {user ? (
            <> 
            <NavLink to="/">
              <Button color="pink">Home</Button>
            </NavLink>
            <NavLink to ="/map">
              <Button color="blue">Mediocre Places</Button>
            </NavLink>
              <Button color="purple" onClick={handleLogoutClick}>Bon Voyage {user.username}!</Button>
            </>
          ) : (
            null
            // <>
            //   <NavLink to="/signup"> <Button color="twitter">Signup</Button></NavLink>
            //   <NavLink to="/login"><Button color="twitter">Login</Button></NavLink>
            // </>
          )}
        </div>
      </header>
    );
  }

export default NavBar;