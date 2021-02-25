import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogs.css';
import Dialog_item from './dialog__item/DialogItem';
import Message from './messages/Message';
let dialog_name = [{ name: "Иван Иванов", id: 1, }, { name: "Илон Маск", id: 2, }, { name: "Дональд Трамп", id: 3, },]

let messages_item = [{
    text: "Привет",
    id: 1,
}, {
    text: "Пока",
    id: 2,
}, {
    text: "Привет",
    id: 3
},]
function My_dialogs() {
    return (
        <div className="dialogs">

            <div className="dialog">
                {dialog_name.map((element) => <Dialog_item id={element.id} name={element.name} />)}
            </div>
            <div className="messages">
                {messages_item.map((element) => <Message id = {element.id} text = {element.text}/>)}
                <div className="code">
                    <input placeholder='сообщение' name='message' type="text" />
                    <button className='send'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default My_dialogs;