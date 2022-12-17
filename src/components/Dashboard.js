import Question from "./Question";
import QuestionsColumn from "./QuestionsColumn";

const Dashboard = ({ questions }) => {
	const columns = ["New Questions", "Done"];

	return (
		<div>
			<QuestionsColumn title={columns[0]} questions={questions} />
			<QuestionsColumn title={columns[1]} questions={questions} />
		</div>
	);
};
export default Dashboard;
