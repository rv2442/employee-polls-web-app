import { _saveQuestion } from "../utils/_DATA";

describe("_saveQuestion", () => {
	it("will verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
		var question = {
			optionOneText: "Hello",
			optionTwoText: "Bye",
			author: "Benjamin",
		};
		var result = await _saveQuestion(question);
		expect(result.author).toEqual(question.author);
		expect(result.optionOne.text).toEqual(question.optionOneText);
		expect(result.optionTwo.text).toEqual(question.optionTwoText);
	});

	it("will verify that an error is returned if incorrect data is passed to the function.", async () => {
		var invalidQuestion = {
			optionOneText: "Hello",
			optionTwoText: "Bye",
			author: "",
		};
		await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
			"Please provide optionOneText, optionTwoText, and author"
		);
	});
});
