import React from 'react'
import Style from "./FriendListElement.module.css"



export default function FriendListElement({user}) {
    return (
			<li className={Style.Friend}>
				<div className={Style.ProfileImgContainer}>
					<img
						className={Style.ProfileImg}
						src={user.profilePicture}
						alt=""
					/>
				</div>
				<span className={Style.Username}>{user.username}</span>
			</li>
		);
}
