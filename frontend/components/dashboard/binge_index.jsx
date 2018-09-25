import React from 'react';
import { withRouter } from 'react-router-dom';
import BingeItemShow from '../binge/binge_item_show.jsx';
import NavBarContainer from '../navbar/nav_bar_container';

class BingeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      isLoading: false,
      binges: null,
      renderBinges: null,
    };
    const background = document.getElementsByClassName('discover-box')[0];
    this.onScroll = this.onScroll.bind(this);
    this.addBinges = this.addBinges.bind(this);
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

  render() {
    const { boards } = this.props;
    const { renderBinges } = this.state;

    if (renderBinges !== null) {
      return (
        <div>
          <NavBarContainer />

          <div className="discover">
            <div className="discover-box">
              <ul className="masonry">
                {renderBinges.map(binge => <BingeItemShow binge={binge} key={binge.id} boards={boards} />)}
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default withRouter(BingeIndex);
