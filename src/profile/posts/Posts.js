import React from 'react';
import "./posts.css";
import Post from './post/Post';


function My_posts() {
    return (
        <div className="profile__message-block">
            <div className="message-block__create-message">
                <h2 className="create-message__my-post-h2">My post</h2>
                <input type="text" className="create-message__input" />
                <button className="create-message__button">Add post</button>
            </div>
            <Post text = "78"/>
            <Post text = "78"/>
            <Post text = "78"/>
            <Post text = "78"/>
            <Post text = "78"/>
        </div>
    )
}

export default My_posts;