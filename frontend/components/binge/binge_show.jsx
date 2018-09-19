import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from '../modal/modal.jsx';

class BingeShow extends React.Component {
  componentDidMount() {
    const { binge, fetchBinge, fetchBoards } = this.props;
    fetchBinge(binge.id);
    fetchBoards();
  }

  render() {
    const { binge, currentUser, openModal } = this.props;
    // show edit button if current user is the author of the binge
    const bingeEdit = binge.author_id === currentUser.id ? (
      <button type="button" className="binge-edit" onClick={() => openModal('editBinge')}>
        <img className="edit-icon" src={window.images.pen} alt="" />
      </button>
    ) : <div />;

    return (
      <div className="binge-showpage">
        <Modal />

        <div>
          <button type="button" className="binge-back" onClick={() => window.history.back()}>
            <img src={window.images.back} alt="" />
            <h3>Back</h3>
          </button>

          <div className="binge-edit-box">
            {bingeEdit}
            <button type="button" className="save-binging" onClick={() => openModal('createBinging')}>
              <img src={window.images.binge} alt="" />
              <h3>Binge</h3>
            </button>
          </div>

          <div className="binge-show-box">
            <img className="binge-photo" src={binge.photoUrl} alt="" />

            <div className="binge-details">
              <Link to={`/users/${binge.author_id}`}>
                <div className="author-details">
                  <img className="binge-author-photo" src={binge.author_photo} alt="" />
                  <div className="author-username">{binge.author_username}</div>
                </div>
              </Link>

              <a href={binge.link_url}>
                <button type="button" className="binge-show-link">
                  <img className="a-logo" src={window.images.arrow} alt="" />
                  <h2>{binge.url}</h2>
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(BingeShow);
