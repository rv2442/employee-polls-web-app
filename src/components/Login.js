import { useState } from "react";

const loginUser = (credentials) => {
	if (credentials.user === "brayan" && credentials.password === "brayan") {
		return "tokenValid";
	}
	return;
};

const Login = ({ setToken }) => {
	const [user, setUser] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		const token = loginUser({
			user,
			password,
		});
		setToken(token);
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
export default Login;
