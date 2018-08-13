import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
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
    this.props.createBoard(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Name
            <input
              type="text"
              value={this.state.link_url}
              placeholder="Like &quot;Places to Go&quot; or &quot;Recipes to Make&quot;"
              onChange={this.handleInput('name')} />
          </label>

          <label className="switch">Secret
            <h3>Learn more</h3>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>

          <input className="b-submit" type="submit" value="Create"/>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardCreateForm);
