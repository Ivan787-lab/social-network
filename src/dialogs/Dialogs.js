import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogs.css';

function My_dialogs () {
    return  (
        <div className="dialogs">
            <div className="dialog">
                <NavLink to = "/dialogs/1" className = 'dialog__name'>Иван Иванов</NavLink>
                <NavLink to = "/dialogs/2" className = 'dialog__name'>Дональд Трамп</NavLink>
                <NavLink to = "/dialogs/3" className = 'dialog__name'>Билл Гейтс</NavLink>
            </div>
            <div className="message">
                <p className = 'message__p'>текст 1</p>
                <p className = 'message__p'>текст 2</p>
                <p className = 'message__p'>текст 3</p>

                <div className="code">
                    <input placeholder = 'сообщение' name = 'message' type="text"/>
                    <button className = 'send'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default My_dialogs;