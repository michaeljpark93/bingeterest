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

  componentWillUnmount() {
    this.props.removeErrors();
  }

  componentDidMount() {
    this.props.fetchBinge(this.props.binge.id);
    this.props.fetchBoards();
  }

  handleSubmit(e) {
    e.preventDefault();
    let boardId = parseInt(e.currentTarget.value);
    this.setState({ board_id: boardId});
    this.props.createBinging(this.state);
  }

  render() {

    return(
      <div>
        <div className="binge-title">
          <h2>Choose board</h2>
          <div onClick={this.props.cancel}>X</div>
        </div>

        <div className="binge-details">
          <img className="binge-image" src={this.props.binge.photoUrl} />
        </div>

        <div>
          <ul className="bingings">
            {this.props.boards.map(board => {
              return <BingingBoardItem
                board={board}
                key={board.id}
                action={this.handleSubmit}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default withRouter(BingingForm);
