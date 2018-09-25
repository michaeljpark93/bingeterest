import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import BingingBoardItem from './binging_board_item';

class BingingForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(board) {
    const { createBinging, cancel, binge } = this.props;
    const binging = {
      board_id: board.id,
      binge_id: binge.id,
    };

    createBinging(binging).then(() => cancel());
  }

  render() {
    const { boards, binge, cancel } = this.props;
    return (
      <div className="binging-box">
        <div className="binge-title">
          <h2>Choose board</h2>
          <div onClick={cancel}>X</div>
        </div>

        <div className="binge-details-box">
          <div className="binge-details">
            <img className="binge-image" src={binge.photoUrl} alt="" />
          </div>

          <div className="board-details-box">
            <div className="all-boards">
              <h3>All boards</h3>
            </div>
            <ul className="bingings">
              {boards.map(board => (
                <BingingBoardItem
                  board={board}
                  key={board.id}
                  handleSubmit={() => this.handleSubmit(board)}
                />
              ))}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(BingingForm);
