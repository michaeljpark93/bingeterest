import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div>PINTEREST LOGO PLACEHOLDER</div>

        <div>
          <h3>Log in to see more</h3>
        </div>
        <div>
          <h3>Access Bingeterest's best ideas with a demo account</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username" />
          <div>{this.renderErrors()}</div>

          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password" />

          <input type="submit" value="Log in" />
        </form>

        <p>OR</p>
        <div>DEMO LOGIN PLACEHOLDER</div>

        <div>LINE PLACEHOLDER</div>
        <div>
          <Link to="/signup">Sign up for an account</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
