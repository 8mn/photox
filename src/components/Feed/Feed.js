import React from "react";
import Post from "../Post/Post";
import styles from "./Feed.module.css";

function Feed() {
	return (
		<div className={styles.container}>
			<Post />
			<Post />
			<Post />
			<Post />
			
		</div>
	);
}

export default Feed;
