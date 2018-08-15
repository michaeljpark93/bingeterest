import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserBoardItem from './user_board_item';


class UserBoards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.currentUser.id);
  }

  render() {

    return(
      <div>

        <div className="user-boards">
          <ul className="user-boards-box">
            {this.props.boards.map(board => {
              return <UserBoardItem board={board} key={board.id} />
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(UserBoards);
