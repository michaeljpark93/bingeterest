import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorsList from '../errors/error_list';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../modal/modal';

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, idx) => {
      const title = pane.title;
      const klass = idx === selected ? 'active' : '';

      return (
        <li
          key={idx}
          className={klass}
          onClick={() => this.props.onTabChosen(idx)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
 }
}

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane: num})
  }

  handleModal(pane) {
    return e => {
      e.preventDefault();
      this.props.otherForm([pane.title]);
    }
  }

  render() {
    const pane = this.props.panes[this.state.selectedPane];
    const selectedPane = pane.title.slice(0, -1);

    let pf_picture = "https://s.pinimg.com/images/user/default_280.png"

    return (
      <div>

        <NavBarContainer />

        <div className="profile">
          <div className="user-info">
            <div className="user-info-box">
              <div className="username">
                <h2>{this.props.currentUser.username}</h2>

                <div className="follow-box">
                  <h2>followers</h2>
                  <h2>followers</h2>
                  <h2>following</h2>
                </div>
              </div>

              <div className="pf-picture">
                <img src={pf_picture}></img>
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="tabs-box">
              <Headers
                selectedPane={this.state.selectedPane}
                onTabChosen={this.selectTab}
                panes={this.props.panes} />
            </div>
          </div>

          <div className="user-profile-content">
            <div className="public-content">
              {pane.content}
              <Modal />

              <div className="modal-toggle" onClick={this.handleModal(pane)}>
                <div className="modal-box">
                  <h3>+</h3>
                </div>
                <h3 className="modal-title">Create {selectedPane}</h3>
              </div>
            </div>

            <div className="private-content">
              <div className="secret-content">
                <h3>Secret {selectedPane}</h3>
                <h3>Only you and people you invite can see these boards.</h3>
              </div>

              {pane.content}
              <Modal />

              <div className="modal-toggle" onClick={this.handleModal(pane)}>
                <div className="modal-box">
                  <h3>+</h3>
                </div>
                <h3 className="modal-title">Create secret {selectedPane}</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(UserShow);
