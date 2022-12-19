import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import Button from "react-bootstrap/Button";

const NewQuestion = ({ dispatch }) => {
	const navigate = useNavigate();
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
					data-test-id="input-option-one"
					placeholder="Option One"
					value={optionOneText}
					onChange={handleChangeOptionOne}
					className="input"
					maxLength={100}
				/>
				<label>Second Option</label>
				<input
					data-test-id="input-option-two"
					placeholder="Option Two"
					value={optionTwoText}
					onChange={handleChangeOptionTwo}
					className="input"
					maxLength={100}
				/>

				<Button
					data-test-id="submit-button"
					className="btn"
					type="submit"
					disabled={optionOneText === "" || optionTwoText === ""}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};
export default connect()(NewQuestion);
