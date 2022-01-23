import { AuthContext } from "../../context/AuthContext";
import Style from "./ProfileHero.module.css";

import { useContext, useState } from "react";
import axios from "axios";


export default function ProfileHero({ username, profilePic, user }) {
	const { user : currentUser, dispatch } = useContext(AuthContext);
	  const [followed, setFollowed] = useState(
			currentUser.followings.includes(user?.id)
		);

	  const handleClick = async () => {
			try {
				if (followed) {
					await axios.put(`/users/${user._id}/unfollow`, {
						userId: currentUser._id,
					});
					dispatch({ type: "UNFOLLOW", payload: user._id });
				} else {
					await axios.put(`/users/${user._id}/follow`, {
						userId: currentUser._id,
					});
					dispatch({ type: "FOLLOW", payload: user._id });
				}
				setFollowed(!followed);
			} catch (err) {}
		};



	return (
		<div className={Style.bg}>
			<div className={Style.bgColor}></div>
			<div className={Style.avatarContainer}>
				{/* {console.log(user)}
				{console.log(currentUser)} */}
				<img
					src={
						profilePic ||
						"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					}
					alt=""
					className={Style.avatar}
				/>
				<span className={Style.name}>{username} </span>
				{user.username !== currentUser.username && (
					<button className={Style.Button} onClick={handleClick}>
						{followed ? "Unfollow" : "Follow"}
					</button>
				)}
			</div>
		</div>
	);
}
