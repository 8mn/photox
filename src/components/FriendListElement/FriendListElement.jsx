import React from 'react'
import Style from "./FriendListElement.module.css"



export default function FriendListElement({user}) {
    return (
			<li className={Style.Friend}>
				<div className={Style.ProfileImgContainer}>
					<img
						className={Style.ProfileImg}
						src={
							user.profilePicture ||
							"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						}
						alt=""
					/>
				</div>
				<span className={Style.Username}>{user.username}</span>
			</li>
		);
}
