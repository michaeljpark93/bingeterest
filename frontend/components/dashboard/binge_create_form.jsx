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
  }

  fileSelectedHandler(e) {
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{display: 'none'}}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput} />
          <button onClick={() => this.fileInput.click()}>Click to upload</button>

          <label>Website
            <input
              type="text"
              value={this.state.link_url}
              placeholder="Add the URL this Pin links to"
              onChange={this.handleInput('link_url')} />
          </label>

          <label>Description
            <textarea
              value={this.state.description}
              placeholder="Say more about this binge"
              onChange={this.handleInput('description')} />
          </label>

          <input className="b-submit" type="submit" value="Done"/>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={this.props.errors}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BingesCreateForm);
