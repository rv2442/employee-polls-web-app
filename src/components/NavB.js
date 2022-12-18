import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavB = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to={"/"}>
							<Nav.Link>Home</Nav.Link>
						</Link>
						<Link to={"/leaderboard"}>
							<Nav.Link>Leaderboard</Nav.Link>
						</Link>
						{/* <Nav.Link href="#link">Leaderboard</Nav.Link> */}
						<Nav.Link href="#link">New</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>

			{/* <Container> */}
			<Navbar.Collapse id="justify-content-end">
				<Nav className="justify-content-end">
					<Nav.Link href="#home">User</Nav.Link>
					<Nav.Link href="#home">Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			{/* </Container> */}
		</Navbar>
	);
};

export default NavB;
