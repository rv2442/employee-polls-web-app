import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { useState, useEffect } from "react";
import { getInitialData } from "./utils/api";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App(props) {
	const [token, setToken] = useState();
	const [questions, setQuestions] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// let unmounted = false;
		// if (!unmounted) {
		// 	getInitialData().then(({ users, questions }) => {
		// 		setUsers(users);
		// 		setQuestions(questions);
		// 	});
		// }
		// return () => {
		// 	// unmounted = true;
		// };
		props.dispatch(handleInitialData());
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

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
