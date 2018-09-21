import React from 'react';
import { Link } from 'react-router-dom';

class UserBoardItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderBingesDisplay = this.renderBingesDisplay.bind(this);
    this.renderBingeCount = this.renderBingeCount.bind(this);
  }

  handleSubmit(e) {
    e.stopPropagation();
    this.props.edit('createBoard');
  }

  renderBingesDisplay() {
    const { board } = this.props;
    if (board && board.bingings) {
      const binges = Object.values(board.bingings);
      return (
        <div className="board-box">
          {binges.map(binge => (<img key={binge.id} className="masonry" src={binge.photoUrl} alt="" />))}
        </div>
      );
    }
    return <div className="board-box" />;
  }

  renderBingeCount() {
    const { board } = this.props;
    if (board && board.bingings) {
      const binges = Object.values(board.bingings);
      return (
        <h3 className="board-pins">
          {binges.length}
          {' '}
          binges
        </h3>
      );
    }
  }

  render() {
    const { board } = this.props;

    return (
      <Link to={`/boards/${board.id}`}>
        <div className="user-board">
          {this.renderBingesDisplay()}
          <div className="board-content">
            <div className="board-text">
              <h3 className="title">{board.name}</h3>
              {this.renderBingeCount()}
            </div>
            <div onClick={this.handleSubmit}>
              <div className="icon-box">
                <img className="edit-icon" src={window.images.pen} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default UserBoardItem;
