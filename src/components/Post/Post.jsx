import React, { useContext, useEffect, useState } from "react";
import Style from "./Post.module.css";
import axios from "axios";

import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ title, photoSrc, date, likes, userId, postId }) {
	const [likeCount, setLikeCount] = useState(likes.length);
	const [isliked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});


	const {user:currentUser} = useContext(AuthContext)

	useEffect(() => {
		setIsLiked(likes.includes(currentUser._id))
	},[currentUser._id, likes])

	const handleClick = () => {
		try {
			axios.put(`/posts/${postId}/like`, {userId: currentUser._id});
		} catch (error) {}

		setLikeCount(isliked ? likeCount - 1 : likeCount + 1);
		setIsLiked(!isliked);
	};

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?userId=${userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [userId]);

	return (
		<div className={Style.post}>
			<div className={Style.postHead}>
				<Link to={`/profile/${user.username}`}>
					<img
						className={Style.profilePic}
						src={
							user.profilePicture ||
							"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						}
						alt=""
					/>
				</Link>
				<div className={Style.info}>
					<Link to={`/profile/${user.username}`}>
						<div className={Style.userInfo}>{user.username}</div>
					</Link>
					<div className={Style.infoRight}>
						<span className={Style.timePosted}>{format(date)}</span>

						<svg
							className={Style.more}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#999999"
							strokeWidth="2"
							className="ai ai-MoreVerticalFill"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<img src={photoSrc} alt="" />

			<div className={Style.imageInfo}>
				<div className={Style.likes} onClick={handleClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill={isliked ? "crimson" : "none"}
						stroke={isliked ? "none" : "currentColor"}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="ai ai-Heart"
					>
						<path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
					</svg>
					<span className={Style.numOfLikes}>
						{console.log(likes)}
						{likeCount === 0
							? "Be the first to like this"
							: `Liked by ${likeCount} people`}
						{/* {isliked
							? `Liked by you & ${likeCount} people`
							: `Liked by ${likeCount} people`} */}
					</span>
				</div>
			</div>
			<div className={Style.title}>{title ? title : ""}</div>
		</div>
	);
}

export default Post;
