import React from 'react';
import "./posts.css";
import Post from './post/Post';
import {addPost} from '../../Data/state';

let postText = React.createRef()


function My_posts(props) {
    console.log(props);
    let addPost = () => {
        
        props.addPost(postText.current.value)
    }
    let onPostChange = () => {
        props.onPostChange(postText.current.value)
    }
    return (
        <div className="message-block__create-message">
            <h2 className="create-message__my-post-h2">My post</h2>
            <input ref={postText}
                type="text"
                value = {props.newPostText}
                className="create-message__input"
                onChange = {onPostChange}
                />
            <button onClick={addPost}
                className="create-message__button">Add post</button>
                {props.text_of_posts.map((element) => <Post like={element.like}id={element.id}text={element.text}/>)}
        </div>
    )
}


export default My_posts;
