import "./App.module.css";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";





function App() {
	const { user } = useContext(AuthContext);


	return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Register />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
