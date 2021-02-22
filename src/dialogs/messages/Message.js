import React from 'react';
import { NavLink } from 'react-router-dom';
import '../dialogs.css';

const Message = (props) => {
    return (
        <div className="message">
            <p id = {props.id} className='message__p'>{props.text}</p>
        </div>
    )
}

export default Message;