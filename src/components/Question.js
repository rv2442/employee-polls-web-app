import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "moment";
import { connect } from "react-redux";

const Question = (props) => {
	const date = new Date(props.question.timestamp);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.question.author}</Card.Title>
				<Card.Text>{Moment(date).format("hh:mm A | MM/DD/YYYY")}</Card.Text>
				<Button variant="primary">Show</Button>
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
