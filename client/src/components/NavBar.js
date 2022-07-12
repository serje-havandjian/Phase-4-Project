import React from "react";
import { NavLink } from "react-router-dom";
import Map from "./Map";
import MyProfile from "./MyProfile";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
      <header>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          {user ? (
            <> 
            <NavLink to ="/map">
              <Map />
            </NavLink>
            <NavLink to ="/myprofile">
              <MyProfile />
            </NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </header>
    );
  }

export default NavBar;