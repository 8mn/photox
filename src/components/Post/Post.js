import React from "react";
import Style from "./Post.module.css";

function Post() {
	return (
		<div className={Style.post}>
			<div className={Style.postHead}>
				<div className={Style.profilePic}>
					<img src="" alt="" />
				</div>
				
				<div className={Style.info}>
					<div className={Style.userInfo}>Dan</div>
					<div className={Style.timePosted}>4 mins ago</div>
				</div>
			</div>
					<div className={Style.title}>First Post on photox!</div>
			<div className={Style.imageContainer}>
				<img
					src="https://images.unsplash.com/photo-1638898863117-9625f88614e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
					alt=""
				/>
			</div>
			<div className={Style.imageInfo}>
				<div className={Style.likes}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ai ai-Heart"
					>
						<path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
					</svg>
					<span className={Style.numOfLikes}>0</span>
				</div>
			</div>
		</div>
	);
}

export default Post;
