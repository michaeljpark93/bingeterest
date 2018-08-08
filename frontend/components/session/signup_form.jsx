import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      age: ''
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
    this.props.signup(this.state);
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
          <h3>Sign up to see more</h3>
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
            placeholder="Create a password" />

          <input
            type="integer"
            value={this.state.age}
            onChange={this.handleInput('age')}
            placeholder="Age" />

          <input type="submit" value="Continue" />
        </form>

        <p>OR</p>
        <div>DEMO LOGIN PLACEHOLDER</div>
        <div>
          <p>By continuing, you agree to Bingeterest's Terms of Service, Privacy Policy</p>
        </div>
        <div>LINE PLACEHOLDER</div>
        <div>
          <Link to="/login">Already on Bingeterest? Log in</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
