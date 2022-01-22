import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../createPost/CreatePost";
import Post from "../Post/Post.jsx";
import styles from "./Feed.module.css";
// import {Posts} from "../../dummyData"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"

function Feed({hide, username}) {

	const[posts, setPosts] = useState([])
	// posts/profile/username

	const { user } = useContext(AuthContext)


	useEffect(() => {

		const fetchPosts = async () => {
			const res = username
				? await axios.get(`/posts/profile/${username}`)
				: await axios.get(`posts/timeline/${user._id}`);
			setPosts(res.data.sort((p1,p2) => {
				return new Date(p2.createdAt) - new Date(p1.createdAt)
			}))
		}
		fetchPosts();
	},[username, user.user_id])

	

	return (
		<div className={styles.container} style={{ marginTop: !hide ? "3rem" : 0 }}>
			{hide ? " " : <CreatePost username={username}/>}

			{posts.map((p) => (
				<Post
					key={p._id}
					postId={p._id}
					title={p.desc}
					photoSrc={p.img}
					date={p.createdAt}
					likes={p.likes}
					comment={p.comment}
					userId={p.userId}
				/>
			))}
		</div>
	);
}

export default Feed;
