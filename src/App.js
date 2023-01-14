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
						<Route path="/employee-polls-web-app/" element={<Dashboard />} />
						<Route path="/employee-polls-web-app/questions/:id" element={<Poll />} />
						<Route path="/employee-polls-web-app/leaderboard" element={<Leaderboard />} />
						<Route path="/employee-polls-web-app/preferences" element={<Preferences />} />
						<Route path="/employee-polls-web-app/add" element={<NewQuestion />} />
						<Route path="/employee-polls-web-app/login" element={<Login />} />
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
