import React from 'react'
import img_person from '../../../img/img_avatar.png'
import "./profile_info.css"
function ProfileInfo() {
    return (
        <div className="profile__description">
            <img src={img_person} className="description__img-person" />
            <p className="description__person-name">Ivan Ulanovskiy</p>
        </div>
    )
}

export default ProfileInfo;