import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchBingings } from '../../actions/binging_actions';
import { fetchBinges } from '../../actions/binge_actions';
import { selectFollows, selectFollowers } from '../../reducers/selectors';
import { createFollow, deleteFollow, fetchFollowers } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  currentUser: entities.users[ownProps.match.params.userId],
  panes: [
    {title: 'Boards'},
    {title: 'Binges'},
    {title: 'Topics'}
  ],
  follows: selectFollows({entities}, session.id),
  followers: selectFollowers({entities}, session.id),
  ownProps
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id)),
  fetchFollowers: id => dispatch(fetchFollowers(id)),
  fetchBingings: () => dispatch(fetchBingings()),
  fetchBinges: () => dispatch(fetchBinges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
