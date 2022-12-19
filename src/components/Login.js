import { useState } from "react";
import { connect } from "react-redux";
import { existsUser } from "../utils/helpers";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	const { dispatch, users } = props;
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const loginUser = () => {
		if (existsUser(user, users)) {
			if (users[user].password === password) {
				dispatch(setAuthedUser(user));
				navigate("/");
			} else {
				alert("Wrong password.");
			}
		} else {
			alert("User not exists.");
		}
		// if (credentials.user === "brayan" && credentials.password === "brayan") {
		// 	return "tokenValid";
		// }
		// return;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser();
	};

	return (
		<div className="login-wrapper">
			<h1>Employee Polls</h1>
			<br />
			<h1>Log In</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<p>User</p>
					<input type="text" onChange={(e) => setUser(e.target.value)} />
				</label>
				<label>
					<p>Password</p>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<div>
					<br />
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};
const mapStateToProps = ({ users }) => {
	return {
		users,
	};
};
export default connect(mapStateToProps)(Login);
