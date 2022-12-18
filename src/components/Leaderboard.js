import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { getUsersPositions } from "../utils/helpers";

const Leaderboard = (props) => {
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Users</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					{props.positions &&
						props.positions.map((position) => (
							<tr>
								<td>
									<div>{position.avatarURL}</div>
									<div>{position.name}</div>
									<div>{position.id}</div>
								</td>
								<td>{position.answersAmount}</td>
								<td>{position.questionsAmount}</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
};
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
	const question = questions[id];
	const positions = getUsersPositions(users);

	return {
		authedUser,
		question,
		users,
		positions,
	};
};
export default connect(mapStateToProps)(Leaderboard);
