import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { useState, useEffect, Fragment } from "react";
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
		props.dispatch(handleInitialData());
	}, []);

	if (props.authedUser === "") {
		return <Login />;
	} else {
		return (
			<Fragment>
				<LoadingBar />
				<div className="wrapper">
					<NavB />
					<br />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/questions/:id" element={<Poll />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/preferences" element={<Preferences />} />
						<Route path="/add" element={<NewQuestion />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
