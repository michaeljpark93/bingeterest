import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  panes: [
    {title: 'Boards'},
    {title: 'Binges'},
    {title: 'Topics'}
  ],
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
