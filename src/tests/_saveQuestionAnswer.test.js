import { _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestionAnswer", () => {
	it(" will verify that true is returned when correctly formatted data is passed to the function.", async () => {
		var questionAnswer = {
			authedUser: "Benjamin",
			qid: "xj352vofupe1dqz9emx13r",
			answer: "optionOne",
		};
		var result = await _saveQuestionAnswer(questionAnswer);
		expect(result).toEqual(true);
	});

	it("will verify that an error is returned if incorrect data is passed to the function.", async () => {
		var invalidQuestionAnswer = {
			authedUser: "",
			qid: "xj352vofupe1dqz9emx13r",
			answer: "optionOne",
		};
		await expect(_saveQuestionAnswer(invalidQuestionAnswer)).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});
});
