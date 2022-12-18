import Question from "./Question";
import { connect } from "react-redux";
const QuestionsColumn = (props) => {
	console.log(props);
	return (
		<div>
			<h1>{props.title}</h1>
			<div style={{ display: "flex" }}>
				{props.questions.map((questionID) => (
					<Question key={questionID} id={questionID} />
				))}
			</div>
		</div>
	);
};

// const mapStateToProps = ({ questions, authedUser }, { title }) => ({
// 	questionsIds: Object.keys(questions).sort(
// 		(a, b) => questions[b].timestamp - questions[a].timestamp
// 	),
// 	title,
// 	authedUser,
// });
export default QuestionsColumn;

// export default connect(mapStateToProps)(QuestionsColumn);
