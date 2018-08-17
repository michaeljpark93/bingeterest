import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BingeUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.binge

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toBaseURL = this.toBaseURL.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  toBaseURL(fullURL){
    return fullURL.replace(/(http(s)?:\/\/)|(\/.*){1}/g, '');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBinge(this.state);
    this.props.cancel();
  }

  render() {

    return (
      <div className="create-binge">
        <div className="binge-title">
          <h2>Edit this Binge</h2>
          <div onClick={this.props.cancel}>X</div>
        </div>

        <div className="update-binge-body">
          <form className="binge-update-form" onSubmit={this.handleSubmit}>
            <div className="binge-form-box">

              <div className="binge-input">
                <div className="binge-website">
                  <h2>Website</h2>
                  <input
                    type="text"
                    value={this.state.link_url}
                    placeholder="Add the URL this Binge links to"
                    onChange={this.handleInput('link_url')} />
                </div>

                <div className="binge-description">
                  <h2>Description</h2>
                  <textarea
                    value={this.state.description}
                    placeholder="Say more about this binge"
                    onChange={this.handleInput('description')} />
                </div>
              </div>

              <img className="binge-image" src={this.state.photoUrl} />
            </div>

            <div className="binge-edit-buttons">
              <button onClick={this.handleDelete}>Delete</button>

              <div className="binge-buttons">
                <button onClick={this.props.cancel}>Cancel</button>
                <input className="b-submit" type="submit" value="Save"/>
              </div>
            </div>
          </form>

        </div>


        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeUpdateForm);
