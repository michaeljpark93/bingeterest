import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BoardUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.board;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.board.id);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.state.id).then(this.props.history.push(`/users/${this.props.currentUser.id}`));
    this.props.cancel();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state);
    this.props.cancel();
  }

  render() {
    return (
      <div className="create-board">
        <form onSubmit={this.handleSubmit}>
          <div className="board-title">
            <h2>Edit your board</h2>
            <div onClick={this.props.cancel}>X</div>
          </div>

          <div className="board-name">
            <h2>Name</h2>

            <input
              type="text"
              value={this.state.name}
              placeholder="Like &quot;Places to Go&quot; or &quot;Recipes to Make&quot;"
              onChange={this.handleInput('name')} />
          </div>

          <div className="board-name">
            <h2>Description</h2>

            <textarea
              className="board-description"
              value={this.state.description}
              placeholder="What's your board about?"
              onChange={this.handleInput('description')} />
          </div>

          <div className="board-edit-buttons">
            <button onClick={this.handleDelete}>Delete</button>

            <div className="board-buttons">
              <button onClick={this.props.cancel}>Cancel</button>
              <input className="b-submit" type="submit" value="Save"/>
            </div>
          </div>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardUpdateForm);
