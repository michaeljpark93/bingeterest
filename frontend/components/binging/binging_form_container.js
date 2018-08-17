import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchBinge } from '../../actions/binge_actions';
import { fetchBoards } from '../../actions/board_actions';
import { createBinging, deleteBingingFromBoard } from '../../actions/binging_actions';
import { withRouter } from 'react-router-dom';
import BingingForm from './binging_form';

const mapStateToProps = ({ session, errors, entities }, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    binge: entities.binges[ownProps.match.params.bingeId],
    boards: Object.values(entities.boards)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchBinge: id => dispatch(fetchBinge(id)),
  fetchBoards: () => dispatch(fetchBoards()),
  createBinging: (binging) => dispatch(createBinging(binging)),
  deleteBingingFromBoard: (binging) => dispatch(deleteBingingFromBoard(binging))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BingingForm));
