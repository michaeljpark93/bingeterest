import React from "react";
import { Link, withRouter } from "react-router-dom";
import BingeItemShow from "./binge_item_show";
import Modal from "../modal/modal";

class UserBinges extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBinges(this.props.user.id);
  }

  handleModal(type) {
    return e => {
      e.preventDefault();
      this.props.openModal(type);
    };
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
                onClick={this.handleModal("createBinge")}
              >
                <div className="modal-box">
                  <h3>+</h3>
                </div>
                <h3 className="create-title">Create Binge</h3>
              </li>

              {this.props.binges.reverse().map(binge => {
                return (
                  <BingeItemShow
                    binge={binge}
                    key={binge.id}
                    user={this.props.user}
                    edit={() => this.props.openModal("editBinge")}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserBinges);
