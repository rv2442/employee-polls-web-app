import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Option = ({ option }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Text>{option}</Card.Text>
				<Button variant="primary">Click</Button>
			</Card.Body>
		</Card>
	);
};
export default Option;
