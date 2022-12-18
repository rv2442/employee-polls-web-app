import Question from "./Question";
import QuestionsColumn from "./QuestionsColumn";
import { connect } from "react-redux";

const Dashboard = (props) => {
	const columns = ["New Questions", "Done"];

	return (
		<div>
			<QuestionsColumn title={columns[0]} questions={props.newQuestions} />
			<QuestionsColumn title={columns[1]} questions={props.doneQuestions} />
		</div>
	);
};
const mapStateToProps = ({ questions, authedUser }, { title }) => {
	const questionsIds = Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	);
	const newQuestions = questionsIds.filter(
		(id) =>
			!questions[id].optionOne.votes.includes(authedUser) &&
			!questions[id].optionTwo.votes.includes(authedUser)
	);
	const doneQuestions = questionsIds.filter(
		(id) =>
			questions[id].optionOne.votes.includes(authedUser) ||
			questions[id].optionTwo.votes.includes(authedUser)
	);
	return {
		questionsIds,
		title,
		authedUser,
		newQuestions,
		doneQuestions,
	};
};

export default connect(mapStateToProps)(Dashboard);
