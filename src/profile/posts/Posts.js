import React from 'react';
import "./posts.css";
import Post from './post/Post';


function My_posts(props) {
    return (
        <div className="profile__message-block">
            <div className="message-block__create-message">
                <h2 className="create-message__my-post-h2">My post</h2>
                <input type="text" className="create-message__input" />
                <button className="create-message__button">Add post</button>
            </div>
            {props.text_of_posts.map((element) => <Post like = {element.like} id = {element.id}  text = {element.text} />)}
        </div>
    )
}

export default My_posts;