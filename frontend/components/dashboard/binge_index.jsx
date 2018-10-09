import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';

class BingeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binges: null,
      renderBinges: null,
      hasMore: true,
      loaded: false,
    };
    const background = document.getElementsByClassName('discover-box')[0];
    this.renderBinges = this.renderBinges.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const { fetchBinges, fetchBoards } = this.props;
    fetchBinges().then((bingeData) => {
      const binges = Object.values(bingeData.binges);
      const renderBinges = binges.slice(0, 15);
      this.setState({ binges, renderBinges });
    });
    fetchBoards();
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const { binges, renderBinges, hasMore } = this.state;
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)
      && binges.length) {
      if (hasMore) {
        this.addBinges();
      }
    }
  }

  addBinges() {
    const { binges, renderBinges } = this.state;
    const { length } = binges;
    const idx = renderBinges.length;
    if (renderBinges.length >= length) {
      this.setState({ hasMore: false });
    } else {
      const newBinges = binges.slice(idx, idx + 15);
      this.setState({
        renderBinges: [...renderBinges, ...newBinges],
      });
    }
  }

  renderBinges() {
    const { renderBinges } = this.state;

    if (renderBinges !== null) {
      return (
        renderBinges.map(binge => (
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
            <div className="masonry">
              {this.renderBinges()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeIndex);
