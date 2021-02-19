import React from 'react'
import "./profile.css";
import img_person from '../img/img_avatar.png'
import My_posts from './posts/Posts';

function Create_profile() {
    return (
        <div className='profile'>
            <div className="profile__description">
                <img src={img_person} className="description__img-person" />
                <p className="description__person-name">Ivan Ulanovskiy</p>
            </div>
            <My_posts />
            
        </div>
    )
}

export default Create_profile;