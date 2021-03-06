import React from 'react'
import "./profile.css";
import img_person from '../img/img_avatar.png'
import My_posts from './posts/Posts';
import ProfileInfo from './posts/profileInfo/ProfileInfo';


function Create_profile(props) {
    return (
        <div className='profile'>
            <ProfileInfo />
            <My_posts addPost = {props.addPost} onPostChange = {props.onPostChange} newPostText = {props.newPostText} text_of_posts = {props.text_of_posts} />
        </div>
    )
}

export default Create_profile;