import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css";

function Create_navbar () {
    return (
        <div className = 'navbar'>
            <NavLink className = 'link' to = "/profile">Profile</NavLink>
            <NavLink className = 'link' to = "/dialogs">Messages</NavLink>
            <NavLink className = 'link' to = "/users">Users</NavLink>
        </div>
    )
}

export default Create_navbar;