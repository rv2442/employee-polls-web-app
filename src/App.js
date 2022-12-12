import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { useState, useEffect } from "react";
import { getInitialData } from "./utils/api";

function App() {
	const [token, setToken] = useState();
	const [questions, setQuestions] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		let unmounted = false;
		if (!unmounted) {
			getInitialData().then(({ users, questions }) => {
				setUsers(users);
				setQuestions(questions);
			});
		}
		return () => {
			unmounted = true;
		};
	}, []);

	if (token) {
		return <Login setToken={setToken} />;
	}
	return (
		<div className="wrapper">
			<h1>New question</h1>
			<Routes>
				<Route
					path="/dashboard"
					element={<Dashboard questions={questions} />}
				/>
				<Route path="/preferences" element={<Preferences />} />
			</Routes>
		</div>
	);
}

export default App;
