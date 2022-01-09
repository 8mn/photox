import React from "react";
import CreatePost from "../createPost/CreatePost";
import Post from "../Post/Post.jsx";
import styles from "./Feed.module.css";

function Feed() {
	return (
		<div className={styles.container}>
			<CreatePost />
			<Post />
			<Post />
			<Post />
			<Post />
			
		</div>
	);
}

export default Feed;
