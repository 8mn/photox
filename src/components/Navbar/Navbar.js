import React, { useContext } from "react";
import Style from "./navbar.module.css";
import {Link} from "react-router-dom";
// import Home from "../../pages/Home/Home";

import {AuthContext} from "../../context/AuthContext"



function Navbar() {


	const {user} = useContext(AuthContext)


	return (
		<nav className={Style.navbar}>
			<ul className={Style.nav}>
				<Link to="/">
					<li className={Style.logo}>
						<svg
							width="121"
							height="26"
							viewBox="0 0 121 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.716 25V17.188H11.248C16.468 17.188 20.14 14.2 20.14 9.016C20.14 3.868 16.468 0.879999 11.248 0.879999H0.16V25H2.716ZM11.032 3.22C15.28 3.22 17.548 4.984 17.548 9.016C17.548 13.12 15.28 14.848 11.032 14.848H2.716V3.22H11.032ZM25.4621 25V16.648C25.4621 12.22 27.2981 9.196 32.0501 9.196C36.0461 9.196 37.9541 10.924 37.9541 14.992V25H40.5101V14.668C40.5101 10.168 38.0261 6.856 33.0581 6.856C28.5221 6.856 26.2181 9.664 25.6421 12.652H25.4621V0.879999H22.9061V25H25.4621ZM53.4501 25.36C59.2821 25.36 63.1341 21.508 63.1341 16.108C63.1341 10.708 59.2821 6.856 53.4501 6.856C47.6541 6.856 43.8021 10.708 43.8021 16.108C43.8021 21.508 47.6541 25.36 53.4501 25.36ZM53.4501 23.056C48.5541 23.056 46.3221 20.428 46.3221 16.108C46.3221 11.824 48.5541 9.16 53.4501 9.16C58.3461 9.16 60.6141 11.824 60.6141 16.108C60.6141 20.428 58.3461 23.056 53.4501 23.056ZM77.443 25V22.66H74.203C71.611 22.66 70.387 21.976 70.387 19.492V9.412H77.443V7.216H70.387V2.968H67.795V7.216H64.627V9.412H67.795V19.348C67.795 23.524 70.063 25 73.591 25H77.443ZM88.9579 25.36C94.7899 25.36 98.6419 21.508 98.6419 16.108C98.6419 10.708 94.7899 6.856 88.9579 6.856C83.1619 6.856 79.3099 10.708 79.3099 16.108C79.3099 21.508 83.1619 25.36 88.9579 25.36ZM88.9579 23.056C84.0619 23.056 81.8299 20.428 81.8299 16.108C81.8299 11.824 84.0619 9.16 88.9579 9.16C93.8539 9.16 96.1219 11.824 96.1219 16.108C96.1219 20.428 93.8539 23.056 88.9579 23.056ZM103.267 25L110.179 17.476H110.323L117.307 25H120.403L112.267 16.072V15.892L120.403 7.216H117.343L110.431 14.596H110.251L103.303 7.216H100.207L108.307 15.964V16.144L100.207 25H103.267Z"
								fill="black"
							/>
						</svg>
					</li>
				</Link>
				<ul className={Style.sidebar}>
					<div className={Style.actions}>
						<li>
							<div className={`${Style.icon} ${Style.home}`}>
								<svg
									aria-label="Home"
									color="#262626"
									fill="#262626"
									height="24"
									role="img"
									viewBox="0 0 24 24"
									width="24"
								>
									<path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
								</svg>
							</div>
						</li>
						<li>
							<div className={`${Style.icon} ${Style.people}`}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="7" r="5" />
									<path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
								</svg>
								<span className={Style.badge}>2</span>
							</div>
						</li>
						<li>
							<div className={`${Style.icon} ${Style.notif}`}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998z" />
									<path d="M15 19a3 3 0 1 1-6 0" />
									<path d="M12 2a2 2 0 0 1 2 2v1h-4V4a2 2 0 0 1 2-2z" />
								</svg>
								<span className={Style.badge}>1</span>
							</div>
						</li>
					</div>
					<div className={Style.navRight}>
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
						{/* <button className={Style.Logout}> Logout</button> */}
					</div>
				</ul>
			</ul>
		</nav>
	);
}

export default Navbar;
