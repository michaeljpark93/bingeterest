import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { selectFollowers } from "../../reducers/selectors";
import {
  createFollow,
  deleteFollow,
  fetchFollowers
} from "../../actions/follow_actions";
import UserShow from "./user_show";

const mapStateToProps = ({ entities, session }, ownProps) => ({
  user: entities.users[ownProps.match.params.userId],
  panes: [{ title: "Boards" }, { title: "Binges" }, { title: "Topics" }]
  // follows: selectFollows({ entities }, session.id),
  // followers: selectFollowers({ entities }, session.id),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  fetchFollowers: id => dispatch(fetchFollowers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
