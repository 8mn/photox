import React from "react";
import Style from "./Post.module.css";
import { Users } from "../../dummyData";

function Post({ title, photoSrc, date, likes, userId }) {
	return (
		<div className={Style.post}>
			<div className={Style.postHead}>
				<img
					className={Style.profilePic}
					src={Users.filter((u) => u.id === userId)[0].profilePicture}
					alt=""
				/>

				<div className={Style.info}>
					<div className={Style.userInfo}>
						{Users.filter((u) => u.id === userId)[0].username}
					</div>
					<div className={Style.infoRight}>
						<span className={Style.timePosted}>{date}</span>

						<svg
							className={Style.more}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#5c5c5c"
							stroke-width="2"
							class="ai ai-MoreVerticalFill"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<img src={photoSrc} alt="" />

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
					<span className={Style.numOfLikes}>Liked by {likes} people</span>
				</div>
			</div>
			<div className={Style.title}>{title ? title : ""}</div>
		</div>
	);
}

export default Post;
