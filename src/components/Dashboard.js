import Question from "./Question";

const Dashboard = ({ questions }) => {
	return (
		<div>
			{Object.keys(questions).forEach((key) => (
				<Question
					id={questions[key].id}
					author={questions[key].author}
					timestamp={questions[key].timestamp}
				/>
			))}
		</div>
	);
};
export default Dashboard;
