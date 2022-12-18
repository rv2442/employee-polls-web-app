import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
	const showPoll = (e, id) => {
		e.preventDefault();
		alert("Mi id: " + id);
	};

	const date = new Date(props.question.timestamp);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.question.author}</Card.Title>
				<Card.Text>{Moment(date).format("hh:mm A | MM/DD/YYYY")}</Card.Text>
				<Link to={`/questions/${props.id}`}>
					<Button variant="primary">Show</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
	const question = questions[id];

	return {
		authedUser,
		question,
		users,
	};
};
export default connect(mapStateToProps)(Question);
