import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import Modal from '../modal/modal';

class BingeShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBinge(this.props.binge.id);
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal("editBinge");
  }

  render() {
    const binge = this.props.binge;
    const bingeEdit = binge.author_id === this.props.currentUser.id ? <div className="binge-edit" onClick={this.handleModal}>
                    <img className="edit-icon" src={window.images.pen} />
                  </div> : <div></div>

    return(
      <div className="binge-showpage">
        <Modal />

        <div>
          <button className="binge-back" onClick={() => window.history.back()}>
            <img src={window.images.back} />
            <h3>Back</h3>
          </button>

          <div className="binge-show-box">

            <div className="binge-edit-box">
              {bingeEdit}
            </div>

            <div className="binge-photo">
              <img src={binge.photoUrl} />
            </div>

            <a href={binge.link_url}>
              <button className="binge-show-link">
                <img className="a-logo" src={window.images.arrow} />
                <h2>{binge.url}</h2>
              </button>
            </a>

            <div className="binge-error-list">
              <ErrorsList errors={this.props.errors}/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(BingeShow);
