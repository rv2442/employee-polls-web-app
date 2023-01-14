import Option from "../components/Option";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
// import { handleToggleAnswer } from "../actions/questions";
import { handleToggleAnswer } from "../actions/shared";
import {
	getPercentageOptionOne,
	getPercentageOptionTwo,
	getNumberOfVotesOptionOne,
	getNumberOfVotesOptionTwo,
	getAnsweredOption,
} from "../utils/helpers";

const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};

	return ComponentWithRouterProp;
};

const Poll = (props) => {
	const {
		dispatch,
		question,
		authedUser,
		answeredOption,
		percentageOptionOne,
		percentageOptionTwo,
		numberOfVotesOptionOne,
		numberOfVotesOptionTwo,
	} = props;
	const navigate = useNavigate();
	const handleAnswer = (e) => {
		e.preventDefault();

		dispatch(
			handleToggleAnswer({
				id: question.id,
				authedUser,
				option: e.target.value,
			})
		);
		navigate("/");
	};
	return (
		<div className={"poll-wrapper"}>
			<h2>Poll by {props.question.author}</h2>
			<img
				className={"avatar"}
				src="https://m.media-amazon.com/images/I/51cOM2ZPaoL.png"
			/>
			<h2>Would You Rather</h2>
			<div style={{ display: "flex" }}>
				<Option
					option={"optionOne"}
					handleOption={handleAnswer}
					textOption={props.question.optionOne.text}
					answeredOption={answeredOption}
					percentageOption={percentageOptionOne}
					numberOfVotesOption={numberOfVotesOptionOne}
				/>
				<Option
					option={"optionTwo"}
					handleOption={handleAnswer}
					textOption={props.question.optionTwo.text}
					answeredOption={answeredOption}
					percentageOption={percentageOptionTwo}
					numberOfVotesOption={numberOfVotesOptionTwo}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
	const { id } = props.router.params;
	const question = questions[id];
	const answeredOption = getAnsweredOption(authedUser, question);
	const percentageOptionOne = getPercentageOptionOne(question, users);
	const percentageOptionTwo = getPercentageOptionTwo(question, users);
	const numberOfVotesOptionOne = getNumberOfVotesOptionOne(question);
	const numberOfVotesOptionTwo = getNumberOfVotesOptionTwo(question);

	return {
		id,
		question,
		authedUser,
		answeredOption,
		percentageOptionOne,
		percentageOptionTwo,
		numberOfVotesOptionOne,
		numberOfVotesOptionTwo,
	};
};
export default withRouter(connect(mapStateToProps)(Poll));
