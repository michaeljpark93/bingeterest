import React from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import ErrorsList from '../errors/error_list.jsx';

class BingesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      link_url: '',
      photoFile: null,
      photoUrl: null,
    };
    this.toBaseURL = this.toBaseURL.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.renderDropZone = this.renderDropZone.bind(this);
  }

  componentDidMount() {
    const { currentUser, modal: { data, type } } = this.props;
    if (type === 'editBinge') {
      this.setState({
        id: data.id,
        description: data.description,
        url: data.url,
        link_url: data.link_url,
        author_id: data.author_id,
        photoUrl: data.photoUrl,
      });
    } else {
      this.setState({
        author_id: currentUser.id,
      });
    }
  }

  componentWillUnmount() {
    const { removeErrors } = this.props;
    removeErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  toBaseURL(fullURL) {
    return fullURL.replace(/(http(s)?:\/\/)|(\/.*){1}/g, '');
  }

  handleSubmit(e) {
    const { updateBinge, closeModal, modal: { type } } = this.props;
    e.preventDefault();

    if (type === 'editBinge') {
      const { link_url } = this.state;
      const url = this.toBaseURL(link_url);
      this.setState({ url }, () => {
        updateBinge(this.state);
        closeModal();
      });
    } else {
      const {
        description, link_url, author_id, photoFile,
      } = this.state;
      const formData = new FormData();
      const baseURL = this.toBaseURL(link_url);
      formData.append('binge[link_url]', link_url);
      formData.append('binge[url]', baseURL);
      formData.append('binge[description]', description);
      formData.append('binge[author_id]', author_id);
      if (photoFile) {
        formData.append('binge[photo]', photoFile);
      }

      $.ajax({
        method: 'POST',
        url: '/api/binges',
        data: formData,
        contentType: false,
        processData: false,
      }).then(() => closeModal());
    }
  }

  handleDelete(e) {
    const { deleteBinge, closeModal, history } = this.props;
    const { id, author_id } = this.state;
    e.preventDefault();
    deleteBinge(id).then(() => history.push(`/users/${author_id}`), closeModal());
  }

  handleDrop(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  renderDropZone() {
    const { photoUrl } = this.state;

    return (
      <div className="binge-upload-box">
        <Dropzone
          className="binge-img"
          onDrop={this.handleDrop}
          accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
          multiple={false}
        >

          {photoUrl ? <img className="binge-image" src={this.state.photoUrl} /> : (
            <div className="upload-box">
              <img className="pic" src={window.images.camera} />
              <h3>Drag and drop or click to upload</h3>

            </div>
          )}
        </Dropzone>
      </div>
    );
  }

  render() {
    const { closeModal, errors, modal: { type } } = this.props;
    const { description, link_url } = this.state;

    return (
      <div className="create-binge">
        <div className="binge-title">
          {type === 'editBinge' ? <h2>Edit this Binge</h2> : <h2>Create Binge</h2>}
          <div onClick={() => closeModal()}>X</div>
        </div>

        <form className="binge-form" onSubmit={this.handleSubmit}>
          <div className="binge-form-box">
            {this.renderDropZone()}

            <div className="binge-input">
              <div className="binge-website">
                <h2>Website</h2>
                <input
                  type="text"
                  value={link_url}
                  placeholder="Add the URL this Binge links to"
                  onChange={this.handleInput('link_url')}
                />
              </div>

              <div className="binge-description">
                <h2>Description</h2>
                <textarea
                  value={description}
                  placeholder="Say more about this binge"
                  onChange={this.handleInput('description')}
                />
              </div>
            </div>
          </div>

          <div className="binge-form-buttons">
            {type === 'editBinge' ? <button onClick={this.handleDelete}>Delete</button> : <div />}
            <div className="binge-buttons">
              <button type="button" onClick={() => closeModal()}>Cancel</button>
              <button type="submit" className="b-submit">Save</button>
            </div>
          </div>
        </form>

        <div className="u-error-list">
          <ErrorsList errors={errors} />
        </div>
      </div>
    );
  }
}

export default withRouter(BingesForm);
