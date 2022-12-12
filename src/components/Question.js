import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Question = ({ id, author, timestamp }) => {
	var dateFormat = new Date(timestamp);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{author}</Card.Title>
				<Card.Text>{dateFormat.getDate()}</Card.Text>
				<Button variant="primary">Show</Button>
			</Card.Body>
		</Card>
	);
};
export default Question;
