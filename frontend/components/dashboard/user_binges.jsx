import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserBingeItem from './user_binge_item';
import Modal from '../modal/modal';

class UserBinges extends React.Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBinges(this.props.currentUser.id);
  }

  handleModal(type) {
    return e => {
      e.preventDefault();
      this.props.otherForm(type);
    }
  }

  render() {

    return(
      <div>

        <div className="public-content-box">
          <Modal />

          <div className="modal-toggle" onClick={this.handleModal("Binges")}>
            <div className="modal-box">
              <h3>+</h3>
            </div>
            <h3 className="title">Create Binge</h3>
          </div>

          <div className="discover">
            <div className="discover-box">
              <ul className="masonry">
                {this.props.binges.map(binge => {
                  return <UserBingeItem binge={binge} key={binge.id} />
                })}
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(UserBinges);
