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
import { LoadingBar } from "react-redux-loading-bar";
import Poll from "./components/Poll";
import NavB from "./components/NavB";
import Leaderboard from "./components/Leaderboard";
import NewQuestion from "./components/NewQuestion";

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
			<LoadingBar />
			<NavB />
			<br />
			<Routes>
				<Route path="/" element={<Dashboard questions={questions} />} />
				<Route path="/questions/:id" element={<Poll />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/preferences" element={<Preferences />} />
				<Route path="/add" element={<NewQuestion />} />
			</Routes>
		</div>
	);
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
