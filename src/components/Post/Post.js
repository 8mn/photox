import React from 'react'
import styles from "./Post.module.css"


function Post() {
    return (
			<div className={styles.post}>
				<div className={styles.imageContainer}></div>
				<div className={styles.imageInfo}>
					<div className={styles.likes}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.605 5.78199L11.835 3.41299C11.926 2.46099 12.815 1.81499 13.713 2.04699C15.064 2.39699 16.013 3.65199 16.013 5.09099V8.12599C16.013 8.80099 16.013 9.13899 16.159 9.38599C16.242 9.52699 16.356 9.64599 16.492 9.73099C16.732 9.88199 17.059 9.88199 17.712 9.88199H18.108C19.811 9.88199 20.662 9.88199 21.186 10.272C21.579 10.565 21.856 10.994 21.966 11.48C22.112 12.13 21.785 12.943 21.13 14.567L20.804 15.377C20.6149 15.8461 20.5375 16.3528 20.578 16.857C20.81 19.731 18.531 22.152 15.745 21.993L5.321 21.394C4.182 21.329 3.613 21.296 3.099 20.841C2.584 20.386 2.487 19.917 2.294 18.98C1.88323 16.9866 1.90198 14.9286 2.349 12.943C2.632 11.695 3.824 11.023 5.055 11.183C8.319 11.603 11.278 9.16399 11.605 5.78299V5.78199Z"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M7 11.5L6.863 11.957C5.9761 14.9135 6.02395 18.0717 7 21"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className={styles.caption}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
						architecto error repudiandae inventore mollitia quia atque, pariatur
						aut blanditiis, accusamus esse, quasi perferendis ducimus harum! Cum
						tempore numquam quaerat cumque.
					</div>
				</div>
			</div>
		);
}

export default Post
