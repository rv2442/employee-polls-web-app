export function countProperties(obj) {
	return Object.keys(obj).length;
}

function countQuestionsOfUser(userId, questions) {
	const questionsIds = Object.keys(questions);
	const result = questionsIds.filter((id) => questions[id].author === userId);
	return result.length;
}

function formatPosition(user, questions) {
	const answersAmount = countProperties(user.answers);
	// const questionsAmount = countProperties(user.questions);
	const questionsAmount = countQuestionsOfUser(user.id, questions);

	const result = {
		id: user.id,
		name: user.name,
		avatarURL: user.avatarURL,
		answersAmount: answersAmount,
		questionsAmount: questionsAmount,
		points: answersAmount + questionsAmount,
	};
	return result;
}
export function getUsersPositions(users, questions) {
	const userIds = Object.keys(users);
	const result = userIds.map((id) => formatPosition(users[id], questions));
	const resultOrdered = result.sort((a, b) => b.points - a.points);
	return resultOrdered;
}
export function existsUser(userId, users) {
	const userIds = Object.keys(users);
	return userIds.includes(userId);
}
