const Login = () => {
	return (
		<div className="login-wrapper">
			<h1>Employee Polls</h1>
			<br />
			<h1>Log In</h1>
			<form>
				<label>
					<p>User</p>
					<input type="text" />
				</label>
				<label>
					<p>Password</p>
					<input type="password" />
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
