import Image from "react-bootstrap/Image";
import Option from "../components/Option";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

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
	return (
		<div className={"poll-wrapper"}>
			<h2>Poll by {props.question.author}</h2>
			<img
				className={"avatar"}
				src="https://www.shefinds.com/files/2022/09/Dua-Lipa.jpg"
			/>
			<h2>Would You Rather</h2>
			<div style={{ display: "flex" }}>
				<Option option={props.question.optionOne.text} />
				<Option option={props.question.optionTwo.text} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
	const { id } = props.router.params;
	const question = questions[id];

	return {
		id,
		question,
		// replies: !tweets[id]
		// 	? []
		// 	: tweets[id].replies.sort(
		// 			(a, b) => tweets[b].timestamp - tweets[a].timestamp
		// 	  ),
	};
};
export default withRouter(connect(mapStateToProps)(Poll));
