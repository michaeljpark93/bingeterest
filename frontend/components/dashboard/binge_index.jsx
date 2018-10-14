import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import BingeItemShow from '../binge/binge_item_show.jsx';
import Modal from '../modal/modal.jsx';

const masonryOptions = {
  transitionDuration: 1,
  gutter: 30,
  horizontalOrder: true,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

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
    this.handleModal = this.handleModal.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const { fetchBinges } = this.props;
    fetchBinges().then((bingeData) => {
      const binges = Object.values(bingeData.binges);
      const renderBinges = binges.slice(0, 15);
      this.setState({ binges, renderBinges });
    });
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

  handleModal(data) {
    const { openModal } = this.props;
    const modal = { type: 'createBinging', data };
    openModal(modal);
  }

  render() {
    const { renderBinges } = this.state;

    return (
      <div className="discover">
        <div className="discover-box">
          <Modal />
          <Masonry
            className='binge-index'
            elementType='ul'
            option={masonryOptions}
            imagesLoadedOptions={imagesLoadedOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {renderBinges ? renderBinges.map(binge => (
              <BingeItemShow key={binge.id} binge={binge} handleModal={this.handleModal} />
            )) : null}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeIndex);
