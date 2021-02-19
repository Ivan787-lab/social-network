import React from 'react'
import "./post.css";
import img_person from '../../../img/img_avatar.png'

function My_post(props) {
    return (
        <div className="profile__post-block">
            <div className="post-block__description-post">
                <img src={img_person} alt="" className="description-post__img" />
                <p className="description-post__p">Ivan Ulanovskiy</p>
            </div>
            <p className="description-post__post-p">{props.text}</p>
        </div>
    )
}

export default My_post;