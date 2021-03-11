import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Data/state.js"
import { addPost } from "./Data/state";
import { addMessage } from "./Data/state";

export let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App addMessage={addMessage} addPost={addPost} state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
renderTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
