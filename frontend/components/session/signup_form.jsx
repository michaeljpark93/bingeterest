import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      age: ''
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
    this.props.signup(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({username: 'Guest', password: 'password'});
  }

  render() {
    const { errors, fields, fieldType, linkTo } = this.props;

    const forms = fields.map((field, idx) => {
      return (
        <div className="u-field" key={idx}>
            <input
              type={fieldType[field]}
              value={this.state[field]}
              onChange={this.handleInput(field)}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
        </div>
      );
    });

    return (
      <div className="u-session">

        <div className="u-session-box">

          <div className="u-logo">
            <img src={window.images.logo} />
          </div>
          <div className="u-title">
            <h3>Sign up to see more</h3>
          </div>
          <div className="u-intro">
            <h3>Access Bingeterest's best ideas with a demo account</h3>
          </div>

          <div className="u-input-form">
            <form onSubmit={this.handleSubmit}>
              { forms }
              <div className="u-error-list">
                <ErrorsList errors={errors}/>
              </div>
              <input className="u-submit" type="submit" value="Continue"/>
            </form>

            <p>OR</p>

            <div className="u-demo">
              <button onClick={this.demoLogin}>Demo Login</button>
            </div>
            <div className="u-footer">
              <h3>By continuing, you agree to Bingeterest's Terms of Service, Privacy Policy</h3>
            </div>
          </div>

          <div className="u-line" />

          <div className="u-session-choice">
            <h3>{linkTo}</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(SignupForm);
