import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ErrorsList from '../errors/error_list.jsx';

class SplashForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      age: '',
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
    const { signup } = this.props;
    e.preventDefault();
    signup(this.state);
  }

  demoLogin(e) {
    const { login, history } = this.props;
    e.preventDefault();
    login({ username: 'Guest', password: 'password' });
  }

  render() {
    const { errors, fields, fieldType } = this.props;

    const linkTags = ['About Bingeterest', 'Blog', 'Business', 'Terms of Service', 'Private Policy', 'Help', 'iPhone App', 'Android App', 'Users', 'Collections', 'Explore', 'International'];
    const tags = linkTags.map((tag, idx) => (
      <div className="s-tag" key={idx}>
        <div>{tag}</div>
      </div>
    ));

    const forms = fields.map((field, idx) => (
      <div className="s-field" key={idx}>
        <input
          type={fieldType[field]}
          value={this.state[field]}
          onChange={this.handleInput(field)}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        />
      </div>
    ));

    return (
      <div className="s-infinite">

        <Link className="s-login-button" to="/login">
          <button type="button">
            <h3>Log in</h3>
          </button>
        </Link>

        <div className="s-session">
          <div className="s-session-box">

            <div className="s-logo">
              <img src={window.images.logo} alt="" />
            </div>
            <div className="s-title">
              <h3>Welcome to Bingeterest</h3>
            </div>
            <div className="s-intro">
              <h3>Find new ideas to try</h3>
            </div>

            <div className="s-input-form">
              <form onSubmit={this.handleSubmit}>
                {forms}
                <div className="s-error-list">
                  <ErrorsList errors={errors} />
                </div>
                <input className="s-submit" type="submit" value="Continue" />
              </form>

              <p>OR</p>

              <div className="s-demo">
                <button type="button" onClick={this.demoLogin}>Demo Login</button>
              </div>
              <div className="s-footer">
                <h3>By continuing, you agree to Bingeterest&apos;s Terms of Service, Privacy Policy</h3>
              </div>
            </div>

          </div>

        </div>

        <div className="s-tags">
          <div className="s-tag-holder">
            {tags}
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(SplashForm);
