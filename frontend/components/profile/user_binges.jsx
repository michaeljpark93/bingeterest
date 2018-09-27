import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BingeItemShow from '../binge/binge_item_show.jsx';
import Modal from '../modal/modal.jsx';

class UserBinges extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
    this.renderUserBinges = this.renderUserBinges.bind(this);
  }

  handleModal() {
    const { openModal } = this.props;
    const modal = { type: 'createBinge', data: null };
    openModal(modal);
  }

  renderUserBinges() {
    const { openModal, binges } = this.props;
    if (binges.length > 0) {
      return (
        binges.reverse().map(binge => (
          <div className="binge-show-wrapper fadeIn">
            <Link to={`/binges/${binge.id}`}>
              <li className="binge">
                <img src={binge.photoUrl} alt="" />
              </li>
            </Link>

            <a href={binge.link_url} target="_blank">
              <button type="button" className="binge-link">
                <img className="a-logo" src={window.images.arrow} alt="" />
                <h2>{binge.url}</h2>
              </button>
            </a>
          </div>
        ))
      );
    }
  }

  render() {
    return (
      <div>
        <Modal />

        <div className="user-binges">
          <div className="user-binges-box">
            <ul className="binge-masonry">
              <li
                className="binge-modal-toggle"
                onClick={() => this.handleModal()}
              >
                <div className="modal-box">
                  <h3>+</h3>
                </div>
                <h3 className="create-title">Create Binge</h3>
              </li>
              {this.renderUserBinges()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserBinges);
