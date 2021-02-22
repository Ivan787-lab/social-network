import React from 'react';
import { NavLink } from 'react-router-dom';
import '../dialogs.css';

const Dialog_item = (props) => {
    return (
        <div className="dialog__user">
            <NavLink to={`/dialogs/${props.id}`} className='dialog__name'>{props.name}</NavLink>
        </div>
    )
}

export default Dialog_item;