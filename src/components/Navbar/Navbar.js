import React from "react";
import Style from "./navbar.module.css";

function Navbar() {
	return (
		<nav className={Style.navbar}>
			<ul className={Style.nav}>
				<li className={Style.logo}>Photox</li>
				<ul className={Style.sidebar}>
					<div className={Style.actions}>
						<li>
							<div className={`${Style.icon} ${Style.home}`}>
								<svg
									aria-label="Home"
									class="_8-yf5 "
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
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="ai ai-Person"
								>
									<circle cx="12" cy="7" r="5" />
									<path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" />
								</svg>
								<span className={Style.badge}>0</span>
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
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="ai ai-Bell"
								>
									<path d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998z" />
									<path d="M15 19a3 3 0 1 1-6 0" />
									<path d="M12 2a2 2 0 0 1 2 2v1h-4V4a2 2 0 0 1 2-2z" />
								</svg>
								<span className={Style.badge}>0</span>
							</div>
						</li>
					</div>
					<div className={Style.navRight}>
						<div className={Style.profilePic}></div>
						<button className={Style.Logout}> Logout</button>
					</div>
				</ul>
			</ul>
		</nav>
	);
}

export default Navbar;
