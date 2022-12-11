import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { useState } from "react";

function App() {
	const [token, setToken] = useState();

	if (!token) {
		return <Login setToken={setToken} />;
	}
	return (
		<div className="wrapper">
			<h1>New question</h1>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/preferences" element={<Preferences />} />
			</Routes>
		</div>
	);
}

export default App;
