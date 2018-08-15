import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      secret: false,
      user_id: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ user_id: this.props.currentUser.id })
    this.props.processForm(this.state);
    this.props.cancel();
  }

  render() {
    return (
      <div className="create-board">
        <form onSubmit={this.handleSubmit}>
          <div className="board-title">
            <h2>Create board</h2>
            <div onClick={this.props.cancel}>X</div>
          </div>

          <div className="board-name">
            <h2>Name</h2>

            <input
              type="text"
              value={this.state.link_url}
              placeholder="Like &quot;Places to Go&quot; or &quot;Recipes to Make&quot;"
              onChange={this.handleInput('name')} />
          </div>

          <div className="board-secret">
            <div className="bs-text">
              <h3>Secret</h3>
              <h3>Learn more</h3>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>


          <div className="board-buttons">
            <button onClick={this.props.cancel}>Cancel</button>
            <input className="b-submit" type="submit" value="Create"/>
          </div>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardCreateForm);
