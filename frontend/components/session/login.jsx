import React from 'react';

class Login extends React.Component {
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
      this.setState({ [input]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/binges'));
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          <input type="text" value={this.state.password} onChange={this.handleInput('password')} />
          <button onSubmit={this.handleSubmit}>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
