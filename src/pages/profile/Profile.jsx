import Style from "./Profile.module.css";
import Feed from "../../components/Feed/Feed";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHero from "../../components/ProfileHeroSection/ProfileHero";
import { useState } from "react/cjs/react.development";
import Sidebar from "../../components/Sidebar/Sidebar";

function Profile() {
	const [toggle, setToggle] = useState(1);

	const toggleTab = (index) => {
		setToggle(index);
		// console.log(index);
	};

	return (
		<>
			<Navbar />
			<div className={Style.container}>
				<ProfileHero />
				<div className={Style.tabPanel}>
					<button
						className={
							toggle === 1 ? `${Style.Posts} ${Style.active}` : `${Style.Posts}`
						}
						onClick={() => toggleTab(1)}
					>
						Posts
					</button>
					<button
						className={
							toggle === 2
								? `${Style.likedPosts} ${Style.active}`
								: `${Style.likedPosts}`
						}
						onClick={() => toggleTab(2)}
					>
						Liked Posts
					</button>
				</div>
				<main>
					<Feed hide />
					<Sidebar />
				</main>
			</div>
		</>
	);
}

export default Profile;
