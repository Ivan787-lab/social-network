import React from 'react'
import "./post.css";
import img_person from '../../../img/img_avatar.png'

function Post(props) {
    return (
        <div id = {props.id} className="profile__post-block">
            <div className="post-block__description-post">
                <img src={img_person} alt="" className="description-post__img" />
                <p className="description-post__p">Ivan Ulanovskiy</p>
            </div>
            <p className="description-post__post-p">{props.text}</p>
            <p className = 'quantity-like'><i class="far fa-thumbs-up"></i> : {props.like}</p>
        </div>
    )
}

export default Post;