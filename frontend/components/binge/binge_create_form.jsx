import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import Dropzone from 'react-dropzone';

class BingesCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      link_url: '',
      photoFile: null,
      photoUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toBaseURL = this.toBaseURL.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
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
    const baseURL = this.toBaseURL(this.state.link_url)
    formData.append('binge[link_url]', this.state.link_url);
    formData.append('binge[url]', baseURL);
    formData.append('binge[description]', this.state.description);
    formData.append('binge[author_id]', this.props.currentUser.id);
    if (this.state.photoFile) {
      formData.append('binge[photo]', this.state.photoFile);
    }

    $.ajax({
      method: 'POST',
      url: '/api/binges',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => console.log(response.responseJSON)
    );

    this.props.cancel();
  }

  handleDrop(files) {
    const file = files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img className="binge-image" src={this.state.photoUrl} /> : <div className="upload-box"><img className="pic" src={window.images.camera} />
    <h3>Drag and drop or click to upload</h3></div>;

    return (
      <div className="create-binge">
        <div className="binge-title">
          <h2>Create Binge</h2>
          <div onClick={this.props.cancel}>X</div>
        </div>

        <form className="binge-form" onSubmit={this.handleSubmit}>
          <div className="binge-form-box">
            <div className="binge-upload-box">
              <Dropzone
                className="binge-img"
                onDrop={ this.handleDrop }
                accept="image/jpeg,image/jpg,image/tiff,image/gif, image/png"
                multiple={ false } >

                {preview}
              </Dropzone>

            </div>

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