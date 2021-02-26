import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let text_of_posts = [
  { text: "Привет" , id : 1 , like : 2},
  {text : "Пока" , id : 2, like : 5,} ,
]

let dialog_name = [{ name: "Иван Иванов", id: 1, }, { name: "Илон Маск", id: 2, }, { name: "Дональд Трамп", id: 3, },]
let messages_item = [{ text: "Привет", id: 1, }, { text: "Пока", id: 2, }, { text: "Привет", id: 3 },]


ReactDOM.render(
  <React.StrictMode>
    <App text_of_posts = {text_of_posts} messages_item = {messages_item} dialog_name = {dialog_name}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
