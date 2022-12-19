import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Option = ({ textOption, option, handleOption }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Text>{textOption}</Card.Text>
				<Button
					style={{ width: "auto" }}
					variant="primary"
					onClick={handleOption}
					value={option}
				>
					Click
				</Button>
			</Card.Body>
		</Card>
	);
};
export default Option;
