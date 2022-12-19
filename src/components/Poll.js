import Option from "../components/Option";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
// import { handleToggleAnswer } from "../actions/questions";
import { handleToggleAnswer } from "../actions/shared";

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
	const handleAnswer = (e) => {
		e.preventDefault();
		const { dispatch, question, authedUser } = props;

		dispatch(
			handleToggleAnswer({
				id: question.id,
				authedUser,
				option: e.target.value,
			})
		);
	};
	return (
		<div className={"poll-wrapper"}>
			<h2>Poll by {props.question.author}</h2>
			<img
				className={"avatar"}
				src="https://www.shefinds.com/files/2022/09/Dua-Lipa.jpg"
			/>
			<h2>Would You Rather</h2>
			<div style={{ display: "flex" }}>
				<Option
					option={"optionOne"}
					handleOption={handleAnswer}
					textOption={props.question.optionOne.text}
				/>
				<Option
					option={"optionTwo"}
					handleOption={handleAnswer}
					textOption={props.question.optionTwo.text}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = ({ authedUser, questions }, props) => {
	const { id } = props.router.params;
	const question = questions[id];

	return {
		id,
		question,
		authedUser,
	};
};
export default withRouter(connect(mapStateToProps)(Poll));
