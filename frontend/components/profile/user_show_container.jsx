import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { selectFollows, selectFollowers } from '../../reducers/selectors';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  panes: [
    {title: 'Boards'},
    {title: 'Binges'},
    {title: 'Topics'}
  ],
  follows: selectFollows({entities}, session.id),
  followers: selectFollowers({entities}, session.id)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
