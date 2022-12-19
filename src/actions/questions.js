import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const TOGGLE_ANSWER = "TOGGLE_ANSWER";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function toggleAnswer({ id, authedUser, option }) {
	return {
		type: TOGGLE_ANSWER,
		id,
		authedUser,
		option,
	};
}

// export function handleToggleAnswer(info) {
// 	const infoParsed = {
// 		authedUser: info.authedUser,
// 		qid: info.id,
// 		answer: info.option,
// 	};

// 	return (dispatch) => {
// 		dispatch(toggleAnswer(info));

// 		return saveQuestionAnswer(infoParsed).catch((e) => {
// 			console.warn("Error in handleToggleAnswer", e);
// 			dispatch(toggleAnswer(info));
// 			alert("There was an error saving answer. Try again.");
// 		});
// 	};
// }
export function handleAddQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}
