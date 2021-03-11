import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogs.css';
import Dialog_item from './dialog__item/DialogItem';
import Message from './messages/Message';

let messageText = React.createRef()

function My_dialogs(props) {
    let addMessage = () => {
        props.addMessage(messageText.current.value);
        messageText.current.value = "";
    }
    return (
        <div className="dialogs">

            <div className="dialog">
                {props.dialog_name.map((element) => <Dialog_item id={element.id} name={element.name} />)}
            </div>
            <div className="messages">
                {props.messages_item.map((element) => <Message id={element.id} text={element.text} />)}
                <div className="code">
                    <input ref = {messageText} placeholder='сообщение' name='message' type="text" />
                    <button onClick = {addMessage} className='send'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default My_dialogs;