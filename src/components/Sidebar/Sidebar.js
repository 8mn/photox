import Style from "./Sidebar.module.css";
import React from "react";

function Sidebar() {
	return (
		<div className={Style.container}>
			<div className={Style.sidebar}>
				<div className={Style.profile}></div>
			</div>
		</div>
	);
}

export default Sidebar;
