import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { currentUser, modal: { data, type } } = this.props;
    if (type === 'editBoard') {
      this.setState({
        id: data.id,
        name: data.name,
        description: data.description,
        category: data.category,
        secret: data.secret,
        user_id: data.user_id,
      });
    } else {
      this.setState({
        name: '',
        description: '',
        category: '',
        secret: false,
        user_id: currentUser.id,
      });
    }
  }

  componentWillUnmount() {
    const { removeErrors } = this.props;
    removeErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    const {
      createBoard, updateBoard, closeModal, modal: { type },
    } = this.props;
    e.preventDefault();
    const board = this.state;
    if (type === 'editBoard') {
      updateBoard(board).then(() => closeModal());
    } else {
      createBoard(board).then(() => closeModal());
    }
  }

  handleDelete(e) {
    const { deleteBoard, closeModal, history } = this.props;
    const { id, user_id } = this.state;
    e.preventDefault();
    deleteBoard(id).then(() => history.push(`/users/${user_id}`), closeModal());
  }

  render() {
    const { closeModal, errors, modal: { type, data } } = this.props;
    if (this.state !== null) {
      const { name, description, category } = this.state;
      return (
        <div className="create-board">
          <form onSubmit={this.handleSubmit}>
            <div className="board-title">
              {type === 'createBoard' ? <h2>Create board</h2> : <h2>Edit your board</h2>}
              <div onClick={() => closeModal()}>X</div>
            </div>

            <div className="board-name">
              <h2>Name</h2>

              <input
                type="text"
                value={name}
                placeholder="Like &quot;Places to Go&quot; or &quot;Recipes to Make&quot;"
                onChange={this.handleInput('name')}
              />
            </div>

            <div className="board-name">
              <h2>Description</h2>

              <textarea
                className="board-description"
                value={description}
                placeholder="What's your board about?"
                onChange={this.handleInput('description')}
              />
            </div>

            <div className="board-button-box">
              {type === 'editBoard' ? <button type="button" onClick={this.handleDelete}>Delete</button> : <div />}

              <div className="board-buttons">
                <button type="button" onClick={() => closeModal()}>Cancel</button>
                <button className="b-submit" type="submit">Save</button>
              </div>
            </div>
          </form>

          <div className="u-error-list">
            <ErrorsList errors={errors} />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default withRouter(BoardForm);
