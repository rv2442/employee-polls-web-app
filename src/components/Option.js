import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Option = ({
	textOption,
	option,
	handleOption,
	answeredOption,
	percentageOption,
	numberOfVotesOption,
}) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Text>{textOption}</Card.Text>
				<Button
					style={{ width: "auto" }}
					variant="primary"
					onClick={handleOption}
					value={option}
					disabled={answeredOption !== "NOT_ANSWERED"}
				>
					Click
				</Button>
				{answeredOption === option ? (
					<Card.Text style={{ color: "green" }}> ✔️ Option selected.</Card.Text>
				) : null}
				{answeredOption !== "NOT_ANSWERED" ? (
					<Card.Text style={{ color: "blue" }}>
						{" "}
						People voted: {numberOfVotesOption}
					</Card.Text>
				) : null}
				{answeredOption !== "NOT_ANSWERED" ? (
					<Card.Text style={{ color: "blue" }}>
						{" "}
						Percentage voted: {percentageOption} %
					</Card.Text>
				) : null}
			</Card.Body>
		</Card>
	);
};
export default Option;
