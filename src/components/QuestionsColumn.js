import Question from "./Question";

const QuestionsColumn = ({ title, questions }) => {
	return (
		<div>
			<h1>{title}</h1>
			<div style={{ display: "flex" }}>
				{Object.keys(questions).map((key) => (
					<Question
						id={questions[key].id}
						author={questions[key].author}
						timestamp={questions[key].timestamp}
					/>
				))}
			</div>
		</div>
	);
};
export default QuestionsColumn;
