import React from 'react';
import Navbar from "../../components/Navbar/Navbar" 
import Feed from "../../components/Feed/Feed"
import Sidebar from "../../components/Sidebar/Sidebar"
import Style from "./Home.module.css";

function Home() {
    return (
			<div>
				<Navbar />
				<div className={Style.container}>
					<Feed />
					<Sidebar />
				</div>
			</div>
		);
}

export default Home
