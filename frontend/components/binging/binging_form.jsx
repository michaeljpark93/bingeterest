import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import BingingBoardItem from './binging_board_item';

class BingingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: '',
      binge_id: this.props.binge.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBinge(this.props.binge.id);
    this.props.fetchBoards();
  }

  handleSubmit(board) {
    this.setState({ board_id: board.id }, () => this.props.createBinging(this.state), this.props.cancel());
  }

  render() {

    return(
      <div className="binging-box">
        <div className="binge-title">
          <h2>Choose board</h2>
          <div onClick={this.props.cancel}>X</div>
        </div>

        <div className="binge-details-box">
          <div className="binge-details">
            <img className="binge-image" src={this.props.binge.photoUrl} />
          </div>

          <div className="board-details-box">
            <div className="all-boards">
              <h3>All boards</h3>
            </div>
            <ul className="bingings">
              {this.props.boards.map(board => {
                return <BingingBoardItem
                  board={board}
                  key={board.id}
                  handleSubmit={() => this.handleSubmit(board)} />
              })}
            </ul>
          </div>
        </div>

      </div>
    );
  }
};

export default withRouter(BingingForm);