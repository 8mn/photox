import Style from "./ProfileHero.module.css"

export default function ProfileHero({username, profilePic}) {
    return (
			<div className={Style.bg}>
				<div className={Style.bgColor}></div>
				<div className={Style.avatarContainer}>
					<img
						src={
							profilePic ||
							"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						}
						alt=""
						className={Style.avatar}
					/>
					<span className={Style.name}>{username} </span>
				</div>
			</div>
		);
}
