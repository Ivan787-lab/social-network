import React from 'react'
import "./profile.css";
import img_person from '../img/img_avatar.png'
import My_posts from './posts/Posts';
import ProfileInfo from './posts/profileInfo/ProfileInfo';

function Create_profile() {
    return (
        <div className='profile'>
            <ProfileInfo />
            <My_posts />
            
        </div>
    )
}

export default Create_profile;