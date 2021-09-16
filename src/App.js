import styles from "./App.module.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div>
			<Navbar />
			<div className={styles.container}>
				<Feed />
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
