import Question from "./Question";
import { connect } from "react-redux";
const QuestionsColumn = (props) => {
	console.log(props);
	return (
		<div>
			<h1>{props.title}</h1>
			<div style={{ display: "flex" }}>
				{props.questionsIds.map((id) => (
					<Question key={id} id={id} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = ({ questions }) => ({
	questionsIds: Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	),
});

export default connect(mapStateToProps)(QuestionsColumn);
