import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.resetErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  demoLogin() {
    this.props.login({username: 'Guest', password: 'password'});
  }

  render() {
    const { errors, fields, fieldType, linkTo } = this.props;

    const forms = fields.map((field, idx) => {
      return (
        <div className="field" key={idx}>
            <input
              type={fieldType[field]}
              value={this.state[field]}
              onChange={this.handleInput(field)}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
        </div>
      );
    });

    return (
      <div className="session">

        <div className="session-box">

          <div className="logo">
            <img src={window.images.logo} />
          </div>
          <div className="title">
            <h3>Log in to see more</h3>
          </div>
          <div className="intro">
            <h3>Access Bingeterest's best ideas with a demo account</h3>
          </div>

          <div className="input-form">
            <form onSubmit={this.handleSubmit}>
              { forms }
              <div className="error-list">
                <ErrorsList errors={errors}/>
              </div>
              <input className="submit" type="submit" value="Log in"/>
            </form>

            <p>OR</p>

            <div className="demo">
              <button onClick={() => this.demoLogin()}>Demo Login</button>
            </div>
            <div className="footer">
              <h3>By continuing, you agree to Bingeterest's Terms of Service, Privacy Policy</h3>
            </div>
          </div>

          <div className="line" />

          <div className="session-choice">
            <h3>{linkTo}</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
