export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users,
	};
}

export function addQuestionUser({ id, authedUser, option }) {
	return {
		type: ADD_ANSWER_USER,
		id,
		authedUser,
		option,
	};
}
