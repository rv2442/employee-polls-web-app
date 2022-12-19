import * as React from "react";
import { render } from "@testing-library/react";
import Option from "../components/Option";

describe("Option", () => {
	it("matches the snapshot when al the parameters are passed and the NOT_ANSWERED is selected", () => {
		var component = render(
			<Option
				textOption={"Play futbol"}
				option={"optionOne"}
				// handleOption={}
				answeredOption={"NOT_ANSWERED"}
				porcentajeOption={50}
				numberOfVotesOption={5}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it("matches the snapshot when al the parameters are passed and the optionOne is selected", () => {
		var component = render(
			<Option
				textOption={"Play futbol"}
				option={"optionOne"}
				// handleOption={}
				answeredOption={"optionOne"}
				porcentajeOption={50}
				numberOfVotesOption={5}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
