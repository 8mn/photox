import Style from "./Profile.module.css";
import Feed from "../../components/Feed/Feed";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHero from "../../components/ProfileHeroSection/ProfileHero";
import { useState, useEffect } from "react/cjs/react.development";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import {useParams} from "react-router"


function Profile() {
	const [toggle, setToggle] = useState(1);


	const [user, setUser] = useState({});

	const username = useParams().username

	const toggleTab = (index) => {
		setToggle(index);
		// console.log(index);
	};


		useEffect(() => {
			const fetchUser = async () => {
				const res = await axios.get(`/users?username=${username}`);
				setUser(res.data);
			};
			fetchUser();
		}, [username]);


	return (
		<>
			<Navbar />
			<div className={Style.container}>
				<ProfileHero
					username={user.username}
					profilePic={user.profilePicture}
				/>
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
					<Feed hide username={username} />
					<Sidebar user={user}/>
				</main>
			</div>
		</>
	);
}

export default Profile;
