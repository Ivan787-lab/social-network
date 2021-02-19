import React from 'react'
import "./header.css";
import logo from '../img/logo.png'

function Create_header () {
    return (
        <div className = 'header'>
            <img className = 'img-logo' src = {logo} />
        </div>
    )
}

export default Create_header;