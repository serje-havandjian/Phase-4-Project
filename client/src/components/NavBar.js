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
          <NavLink to="/">
              <button>Home</button>
            </NavLink>
        </div>
        <div>
          {user ? (
            <> 
            <NavLink to ="/map">
              <button>Map</button>
            </NavLink>
            <NavLink to ="/myprofile">
              <button> My Profile </button>
            </NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/signup"> <button> Signup </button></NavLink>
              <NavLink to="/login"><button> Login </button></NavLink>
            </>
          )}
        </div>
      </header>
    );
  }

export default NavBar;