import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.nav}>
				<li className={styles.logo}>Photox</li>
				<ul className={styles.sidebar}>
					<div className={styles.actions}>
						<li>Dan</li>
						<li>Signout</li>
					</div>
				</ul>
			</ul>
		</nav>
	);
}

export default Navbar;
