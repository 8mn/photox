import React from "react";
import CreatePost from "../createPost/CreatePost";
import Post from "../Post/Post.jsx";
import styles from "./Feed.module.css";
import {Posts} from "../../dummyData"



function Feed({hide}) {
	return (
		<div className={styles.container} style={ {marginTop:!hide? "3rem" : 0}}>
			{hide ? " " : <CreatePost />}

			{Posts.map((p) => (
				<Post
					key={p.id}
					title={p.desc}
					photoSrc={p.photo}
					date={p.date}
					likes={p.like}
					comment={p.comment}
					userId={p.userId}
				/>
			))}
		</div>
	);
}

export default Feed;
