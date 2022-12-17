import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "moment";

const Question = ({ id, author, timestamp }) => {
	const date = new Date(timestamp);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{author}</Card.Title>
				<Card.Text>{Moment(date).format("hh:mm A | MM/DD/YYYY")}</Card.Text>
				<Button variant="primary">Show</Button>
			</Card.Body>
		</Card>
	);
};
export default Question;
