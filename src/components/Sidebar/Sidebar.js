import Style from "./Sidebar.module.css";
import React from "react";
import { Users } from "../../dummyData";
import FriendListElement from "../../components/FriendListElement/FriendListElement.jsx";

function Sidebar() {
	return (
		<div className={Style.container}>
			<div className={Style.sidebar}>
				<span className={Style.heading}>Friends</span>
				<ul className={Style.FriendList}>
					{Users.map((u) => (
						<FriendListElement key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
