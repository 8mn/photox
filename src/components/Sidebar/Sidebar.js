import Style from "./Sidebar.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FriendListElement from "../../components/FriendListElement/FriendListElement.jsx";
import { Link } from "react-router-dom";

function Sidebar({ user }) {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const getFriends = async () => {
			try {
				const friendList = await axios.get(`/users/friends/${user._id}`);
				setFriends(friendList.data);
				console.log(user._id);
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, [user]);

	return (
		<div className={Style.container}>
			
			<div className={Style.sidebar}>
				<span className={Style.heading}>Friends</span>
				{friends.length !== 0 ? (
					<ul className={Style.FriendList}>
						{friends.map((u) => (
							<Link to={`/profile/${u.username}`}>
								<FriendListElement key={u._id} user={u} />
							</Link>
						))}
					</ul>
				) : (
					<span className={Style.nofriends}>No Friends</span>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
