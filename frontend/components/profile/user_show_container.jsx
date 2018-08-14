import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { selectUserBoards, selectUserBinges } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserBoardsContainer from '../board/user_boards_container';
import UserShow from './user_show';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  panes: [
    {title: 'Boards'},
    {title: 'Binges'},
    {title: 'Tries'},
    {title: 'Topics'}
  ],
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  otherForm: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
