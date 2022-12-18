import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch }) => {
	const navigate = useNavigate();
	const [text, setText] = useState("");
	const [optionOneText, setOptionOneText] = useState("");
	const [optionTwoText, setoptionTwoText] = useState("");

	const handleChangeOptionOne = (e) => {
		const text = e.target.value;

		setOptionOneText(text);
	};
	const handleChangeOptionTwo = (e) => {
		const text = e.target.value;

		setoptionTwoText(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(handleAddQuestion(optionOneText, optionTwoText));

		setOptionOneText("");
		setoptionTwoText("");

		navigate("/");
	};

	return (
		<div>
			<h3 className="center">Would You Rather</h3>
			<h5 className="center">Create Your Own Poll</h5>

			<form className="new-question" onSubmit={handleSubmit}>
				<label>First Option</label>
				<input
					placeholder="Option One"
					value={optionOneText}
					onChange={handleChangeOptionOne}
					className="input"
					maxLength={100}
				/>
				<label>Second Option</label>
				<input
					placeholder="Option Two"
					value={optionTwoText}
					onChange={handleChangeOptionTwo}
					className="input"
					maxLength={100}
				/>

				<button
					className="btn"
					type="submit"
					disabled={optionOneText === "" || optionTwoText === ""}
				>
					Submit
				</button>
			</form>
		</div>
	);
};
export default connect()(NewQuestion);
