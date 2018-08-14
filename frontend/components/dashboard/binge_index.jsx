import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BingeIndexItem from './binge_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

class BingeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBinges();
  }

  render() {
    return (
      <div>

        <NavBarContainer />

        <div className="discover">
          <div className="discover-box">
            <ul className="masonry">
              {this.props.binges.map(binge => {
                return <BingeIndexItem binge={binge} key={binge.id} />
              })}
            </ul>

            <footer>
              <div className="cc-icon">Icons made by<a href="http://www.freepik.com" title="Freepik">Freepik</a>from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </footer>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(BingeIndex);
