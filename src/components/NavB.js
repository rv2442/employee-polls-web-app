import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const NavB = (props) => {
	const { dispatch } = props;

	const handleLogout = () => {
		dispatch(setAuthedUser(""));
	};
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link to={"/"}>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to={"/leaderboard"}>Leaderboard</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to={"/add"}>New</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			<Navbar.Collapse id="justify-content-end">
				<Nav className="justify-content-end">
					<Nav.Link>{props.authedUser}</Nav.Link>
					<Nav.Link>
						<Link to="/login" onClick={() => handleLogout}>
							Logout
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
const mapStateToProps = ({ authedUser }) => {
	return {
		authedUser,
	};
};
export default connect(mapStateToProps)(NavB);
