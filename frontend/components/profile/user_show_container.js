import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectUser, selectFollowers } from '../../reducers/selectors';
import {
  createFollow,
  deleteFollow,
  fetchFollowers,
} from '../../actions/follow_actions';
import UserShow from './user_show.jsx';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  userId: ownProps.match.params.userId,
  user: Object.values(entities.users),
  panes: [{ title: 'Boards' }, { title: 'Binges' }],
  // follows: selectFollows({ entities }, session.id),
  // followers: selectFollowers({ entities }, session.id),
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  fetchFollowers: id => dispatch(fetchFollowers(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
