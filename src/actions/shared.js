import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addQuestionUser } from "./users";
import { receiveQuestions, toggleAnswer } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "";
export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
}

export function handleToggleAnswer(info) {
	const infoParsed = {
		authedUser: info.authedUser,
		qid: info.id,
		answer: info.option,
	};

	return (dispatch) => {
		dispatch(toggleAnswer(info));
		dispatch(addQuestionUser(info));

		return saveQuestionAnswer(infoParsed).catch((e) => {
			console.warn("Error in handleToggleAnswer", e);
			dispatch(toggleAnswer(info));
			dispatch(addQuestionUser(info));
			alert("There was an error saving answer. Try again.");
		});
	};
}
