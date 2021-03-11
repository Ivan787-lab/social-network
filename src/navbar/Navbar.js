import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css";

function Create_navbar (props) {
    return (
        <div className = 'navbar'>
            <NavLink className = 'link' to = "/profile">Profile</NavLink>
            <NavLink className = 'link' to = "/dialogs">Messages</NavLink>
            <NavLink className = 'link' to = "/users">Users</NavLink>
            <NavLink className = "link" to = '/friends'>Friends</NavLink>

            <div className="navbar__friends">
                {props.friends.map((element) => 
                <div className = "friend__account"> 
                    <img className = 'friend__account__img' src = {element.ava} alt=""/>
                    <p className="friend__account__name">{element.friend_name}</p>
                </div> )}
            </div>

        </div>
    )
}

export default Create_navbar;