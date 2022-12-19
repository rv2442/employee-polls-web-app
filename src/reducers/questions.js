import {
	ADD_QUESTION,
	RECEIVE_QUESTIONS,
	TOGGLE_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: { ...action.question },
			};
		case TOGGLE_ANSWER:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					optionOne: {
						votes:
							action.option === "optionOne"
								? state[action.id].optionOne.votes.concat([action.authedUser])
								: state[action.id].optionOne.votes,
					},
					optionTwo: {
						votes:
							action.option === "optionTwo"
								? state[action.id].optionTwo.votes.concat([action.authedUser])
								: state[action.id].optionTwo.votes,
					},
				},
			};
		default:
			return state;
	}
}
