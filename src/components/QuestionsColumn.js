import Question from "./Question";
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
export default QuestionsColumn;
