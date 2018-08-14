import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';

class BingesCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      link_url: '',
      photoFile: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toBaseURL = this.toBaseURL.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
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

    const formData = new FormData();
    const baseURL = toBaseURL(this.state.link_url)
    formData.append('binge[link_url]', this.state.link_url);
    formData.append('binge[url]', baseURL);
    formData.append('binge[description]', this.state.description);
    formData.append('binge[author_id]', this.props.currentUser.id);
    formData.append('binge[photo]', this.state.photoFile);

    $.ajax({
      method: 'POST',
      url: '/api/binges',
      data: { formData },
      contentType: false,
      processData: false
    });

    this.props.cancel();
  }

  fileSelectedHandler(e) {
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div className="create-binge">
        <div className="binge-title">
          <h2>Create Binge</h2>
          <div onClick={this.props.cancel}>X</div>
        </div>

        <form className="binge-form" onSubmit={this.handleSubmit}>
          <div className="binge-form-box">
            <input
              style={{display: 'none'}}
              type="file"
              onChange={this.fileSelectedHandler}
              ref={fileInput => this.fileInput = fileInput} />
            <button className="binge-img" onClick={() => this.fileInput.click()}>Click to upload</button>

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
          </div>

          <div className="binge-buttons">
            <input className="binge-submit" type="submit" value="Done"/>
          </div>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BingesCreateForm);
