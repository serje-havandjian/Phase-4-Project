import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
//     const [ active, setActive ] = useState("");

//     function handleClick(e) {
//         setActive(e.target.value);
//     }

    return (
         <nav id="navBar">
            <NavLink to="/" exact>
                <button>Login/HomePage</button>
            </NavLink>
            <NavLink to="/myprofile">
                <button>My Profile</button>
            </NavLink>
            <NavLink to="/map">
                <button>Map of All States</button>
            </NavLink>
        </nav>
    )
}

export default NavBar;