let users = {
	Benjamin: {
		id: "Benjamin",
		password: "123",
		name: "Benjamin Franklin",
		avatarURL: null,
		answers: {
			"8xf0y6ziyjabvozdd253nd": "optionOne",
			"6ni6ok3ym7mf1p33lnez": "optionOne",
			am8ehyc8byjqgar0jgpub9: "optionTwo",
			loxhs1bqm25b708cmbf3g: "optionTwo",
		},
		questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
	},
	Travis: {
		id: "Travis",
		password: "123",
		name: "Travis Scott",
		avatarURL: null,
		answers: {
			vthrdm985a262al8qx3do: "optionOne",
			xj352vofupe1dqz9emx13r: "optionTwo",
		},
		questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
	},
	Micheal: {
		id: "Micheal",
		password: "123",
		name: "Michael De Santa",
		avatarURL: null,
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
			vthrdm985a262al8qx3do: "optionTwo",
			"6ni6ok3ym7mf1p33lnez": "optionOne",
		},
		questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
	},
	Zen: {
		id: "Zen",
		password: "123",
		name: "Zen Toshimura",
		avatarURL: null,
		answers: {
			xj352vofupe1dqz9emx13r: "optionOne",
		},
		questions: [],
	},
};

let questions = {
	"8xf0y6ziyjabvozdd253nd": {
		id: "8xf0y6ziyjabvozdd253nd",
		author: "Benjamin",
		timestamp: 1467166872634,
		optionOne: {
			votes: ["Benjamin"],
			text: "Build our new application with Javascript",
		},
		optionTwo: {
			votes: [],
			text: "Build our new application with Typescript",
		},
	},
	"6ni6ok3ym7mf1p33lnez": {
		id: "6ni6ok3ym7mf1p33lnez",
		author: "Micheal",
		timestamp: 1468479767190,
		optionOne: {
			votes: [],
			text: "hire more frontend developers",
		},
		optionTwo: {
			votes: ["Micheal", "Benjamin"],
			text: "hire more backend developers",
		},
	},
	am8ehyc8byjqgar0jgpub9: {
		id: "am8ehyc8byjqgar0jgpub9",
		author: "Benjamin",
		timestamp: 1488579767190,
		optionOne: {
			votes: [],
			text: "conduct a release retrospective 1 week after a release",
		},
		optionTwo: {
			votes: ["Benjamin"],
			text: "conduct release retrospectives quarterly",
		},
	},
	loxhs1bqm25b708cmbf3g: {
		id: "loxhs1bqm25b708cmbf3g",
		author: "Travis",
		timestamp: 1482579767190,
		optionOne: {
			votes: [],
			text: "have code reviews conducted by peers",
		},
		optionTwo: {
			votes: ["Benjamin"],
			text: "have code reviews conducted by managers",
		},
	},
	vthrdm985a262al8qx3do: {
		id: "vthrdm985a262al8qx3do",
		author: "Travis",
		timestamp: 1489579767190,
		optionOne: {
			votes: ["Travis"],
			text: "take a course on ReactJS",
		},
		optionTwo: {
			votes: ["Micheal"],
			text: "take a course on unit testing with Jest",
		},
	},
	xj352vofupe1dqz9emx13r: {
		id: "xj352vofupe1dqz9emx13r",
		author: "Micheal",
		timestamp: 1493579767190,
		optionOne: {
			votes: ["Micheal", "Zen"],
			text: "deploy to production once every two weeks",
		},
		optionTwo: {
			votes: ["Travis"],
			text: "deploy to production once every month",
		},
	},
};

function generateUID() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
}

export function _getUsers() {
	return new Promise((resolve) => {
		setTimeout(() => resolve({ ...users }), 1000);
	});
}

export function _getQuestions() {
	return new Promise((resolve) => {
		setTimeout(() => resolve({ ...questions }), 1000);
	});
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText,
		},
		optionTwo: {
			votes: [],
			text: optionTwoText,
		},
	};
}

export function _saveQuestion(question) {
	return new Promise((resolve, reject) => {
		if (
			!question.optionOneText ||
			!question.optionTwoText ||
			!question.author
		) {
			reject("Please provide optionOneText, optionTwoText, and author");
		}

		const formattedQuestion = formatQuestion(question);
		setTimeout(() => {
			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion,
			};

			resolve(formattedQuestion);
		}, 1000);
	});
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	return new Promise((resolve, reject) => {
		if (!authedUser || !qid || !answer) {
			reject("Please provide authedUser, qid, and answer");
		}

		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer,
					},
				},
			};

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser]),
					},
				},
			};

			resolve(true);
		}, 500);
	});
}
