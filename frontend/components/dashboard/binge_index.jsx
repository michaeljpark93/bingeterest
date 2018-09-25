import React from 'react';
import { withRouter } from 'react-router-dom';
import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';

class BingeIndex extends React.Component {
  componentDidMount() {
    const { fetchBinges, fetchBoards } = this.props;
    fetchBinges();
    fetchBoards();
  }

  render() {
    const { binges, boards } = this.props;
    return (
      <div>
        <NavBarContainer />

        <div className="discover">
          <div className="discover-box">
            <ul className="masonry">
              {binges.map(binge => <BingeItemShow binge={binge} key={binge.id} boards={boards} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeIndex);
