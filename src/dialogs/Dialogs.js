import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogs.css';
import Dialog_item from './dialog__item/DialogItem';
import Message from './messages/Message';


function My_dialogs(props) {
    return (
        <div className="dialogs">

            <div className="dialog">
                {props.dialog_name.map((element) => <Dialog_item id={element.id} name={element.name} />)}
            </div>
            <div className="messages">
                {props.messages_item.map((element) => <Message id={element.id} text={element.text} />)}
                <div className="code">
                    <input placeholder='сообщение' name='message' type="text" />
                    <button className='send'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default My_dialogs;