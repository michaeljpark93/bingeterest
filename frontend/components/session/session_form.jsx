import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list.jsx';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
    this.props.login(this.state);
  }

  demoLogin(e) {
    const { login } = this.props;
    e.preventDefault();
    this.setState({ username: 'Guest', password: 'password' }, () => login(this.state));
  }

  render() {
    const {
      errors, fields, fieldType, linkTo,
    } = this.props;

    const forms = fields.map((field, idx) => (
      <div className="l-field" key={idx}>
        <input
          type={fieldType[field]}
          value={this.state[field]}
          onChange={this.handleInput(field)}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        />
      </div>
    ));

    return (
      <div className="l-session">

        <div className="l-session-box">

          <div className="l-logo">
            <img src={window.images.logo} />
          </div>
          <div className="l-title">
            <h3>Log in to see more</h3>
          </div>
          <div className="l-intro">
            <h3>Access Bingeterest's best ideas with a demo account</h3>
          </div>

          <div className="l-input-form">
            <form onSubmit={this.handleSubmit}>
              {forms}
              <div className="l-error-list">
                <ErrorsList errors={errors} />
              </div>
              <input className="l-submit" type="submit" value="Log in" />
            </form>

            <p>OR</p>

            <div className="l-demo">
              <button onClick={this.demoLogin}>Demo Login</button>
            </div>
            <div className="l-footer">
              <h3>By continuing, you agree to Bingeterest's Terms of Service, Privacy Policy</h3>
            </div>
          </div>

          <div className="l-line" />

          <div className="l-session-choice">
            <h3>{linkTo}</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
