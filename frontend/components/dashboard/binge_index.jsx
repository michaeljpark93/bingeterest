import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';

class BingeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binges: null,
      loaded: false,
    };
    this.renderBinges = this.renderBinges.bind(this);
  }

  componentDidMount() {
    const { fetchBinges, fetchBoards } = this.props;
    fetchBinges().then((bingeData) => {
      const binges = Object.values(bingeData.binges);
      this.setState({ binges });
    });
    fetchBoards();
  }

  renderBinges() {
    const { binges } = this.state;

    if (binges !== null) {
      return (
        binges.map(binge => (
          <div key={binge.id} className="binge-show-wrapper fadeIn">
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
    return null;
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="discover">
          <div className="discover-box">
            <ul className="masonry">
              {this.renderBinges()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeIndex);
