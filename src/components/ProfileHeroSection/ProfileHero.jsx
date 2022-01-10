import Style from "./ProfileHero.module.css"

export default function ProfileHero() {
    return (
			<div className={Style.bg}>
				<div className={Style.bgColor}></div>
				<div className={Style.avatarContainer}>
					<img
						src="https://images.unsplash.com/photo-1637867164941-9a09ad07bc9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						alt=""
						className={Style.avatar}
					/>
					<span className={Style.name}>Chad Madden </span>
				</div>
			</div>
		);
}
