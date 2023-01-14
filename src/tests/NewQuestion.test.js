import * as React from "react";
import { render,
	 fireEvent } from "@testing-library/react";
import { NewQuestion } from "../components/NewQuestion";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import reducer from "../reducers";

const ContactUsForm = () => {
	it("will have the submit button disabled if one question is not filled.", () => {
		const store = createStore(reducer);

		var utils = render(
			<MemoryRouter>
				<Provider store={store}>
					<NewQuestion /> 
				</Provider>
			</MemoryRouter>
		);

		var input = utils.screen.getByTestId("input-option-one");
		fireEvent.change(input, { target: { value: "Jugar al futbol" } });
		var submitButton = utils.screen.getByTestId("submit-button");
		expect(submitButton).toBeDisabled();
	});
}

export {ContactUsForm};
