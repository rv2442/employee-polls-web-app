export function countProperties(obj) {
	return Object.keys(obj).length;
}

function formatPosition(user) {
	const answersAmount = countProperties(user.answers);
	const questionsAmount = countProperties(user.questions);
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
export function getUsersPositions(users) {
	const userIds = Object.keys(users);
	const result = userIds.map((id) => formatPosition(users[id]));
	const resultOrdered = result.sort((a, b) => b.points - a.points);
	return resultOrdered;
}
