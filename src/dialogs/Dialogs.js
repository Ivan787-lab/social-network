import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogs.css';
import Dialog_item from './dialog__item/DialogItem';
import Message from './messages/Message';
let dialog_name = [{
    name: "Иван Иванов",
    id: 1,
}, {
    name: "Илон Маск",
    id: 2,
}, {
    name: "Дональд Трамп",
    id: 3,
}]
let messages_item = [{
    text: "Привет",
    id: 1,
}, {
    text: "Пока",
    id: 2,
}, {
    text: "Привет",
    id: 3
}]
function My_dialogs() {
    return (
        <div className="dialogs">
            {["11","22","33"]}
{/*             <div className="dialog">
                <Dialog_item id={dialog_name[0].id} name={dialog_name[0].name} />
                <Dialog_item id={dialog_name[1].id} name={dialog_name[1].name} />
                <Dialog_item id={dialog_name[2].id} name={dialog_name[2].name} />
            </div>
            <div className="messages">

                <Message id = {messages_item[0].id} text={messages_item[0].text} />
                <Message id = {messages_item[1].id} text={messages_item[1].text} />
                <Message id = {messages_item[2].id} text={messages_item[2].text} />


                <div className="code">
                    <input placeholder='сообщение' name='message' type="text" />
                    <button className='send'>Отправить</button>
                </div>
            </div>
 */}        </div>
    )
}

export default My_dialogs;