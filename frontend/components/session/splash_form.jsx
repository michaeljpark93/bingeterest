import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class SplashForm extends React.Component {
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

  demoLogin() {
    this.props.login({username: 'Guest', password: 'password'});
  }

  render() {
    const { errors, fields, fieldType } = this.props;

    const linkTags = ['About Bingeterest', 'Blog', 'Business', 'Terms of Service', 'Private Policy', 'Help', 'iPhone App', 'Android App', 'Users', 'Collections', 'Explore', 'International']
    const tags = linkTags.map((tag, idx) => (
      <div className="tag" key={idx}>
        <div>{tag}</div>
      </div>
    ));

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

        <Link className="login-button" to="/login">
          <button type="button">
            <h3>Log in</h3>
          </button>
        </Link>

        <div className="session-box">

          <div className="logo">
            <img src={window.images.logo} />
          </div>
          <div className="title">
            <h3>Welcome to Bingeterest</h3>
          </div>
          <div className="intro">
            <h3>Find new ideas to try</h3>
          </div>

          <div className="input-form">
            <form onSubmit={this.handleSubmit}>
              { forms }
              <div className="error-list">
                <ErrorsList errors={errors}/>
              </div>
              <input className="submit" type="submit" value="Continue"/>
            </form>

            <p>OR</p>

            <div className="demo">
              <button onClick={() => this.demoLogin()}>Demo Login</button>
            </div>
            <div className="footer">
              <h3>By continuing, you agree to Bingeterest's Terms of Service, Privacy Policy</h3>
            </div>
          </div>

        </div>

        <div className="tags">
          <div className="tag-holder">
            {tags}
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(SplashForm);
