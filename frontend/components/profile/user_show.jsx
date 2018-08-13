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
  }

  selectTab(num) {
    this.setState({selectedPane: num})
  }

  render() {
    const pane = this.props.panes[this.state.selectedPane];

    return (
      <div>

        <NavBarContainer />

        <div>
          <div className="username">
            <h2>{this.props.currentUser.username}</h2>
          </div>
        </div>

        <div className="tabs">
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes} />

          <div className="tab-content">
            {pane.content}
            <Modal />
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(UserShow);
