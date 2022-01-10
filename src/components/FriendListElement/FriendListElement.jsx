import React from 'react'
import Style from "./FriendListElement.module.css"



export default function FriendListElement({user}) {
    return (
			<li className={Style.rightbarFriend}>
				<div className={Style.rightbarProfileImgContainer}>
					<img
						className={Style.rightbarProfileImg}
						src={user.profilePicture}
						alt=""
					/>
					{/* <span className={Style.rightbarOnline}></span> */}
				</div>
				<span className={Style.rightbarUsername}>{user.username}</span>
			</li>
		);
}
