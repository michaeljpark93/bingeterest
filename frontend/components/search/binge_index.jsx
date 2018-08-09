import React from 'react';
import BingeIndexItem from './binge_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBinges();
  }

  render() {

    return (
      <div>
        {this.props.binges.map(binge => {
          return <BenchIndexItem binge={binge} key={binge.id} />
        })}

        <Link to=
      </div>
    );
  }
}

export default BingeIndex;
