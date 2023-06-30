import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://meyerland.net/wp-content/uploads/2019/04/abandoned-forest-hd-wallpaper-34950.jpg' alt="image1" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;