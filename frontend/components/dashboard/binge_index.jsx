import React from "react";
import { Link, withRouter } from "react-router-dom";
import BingeItemShow from "../binge/binge_item_show";
import NavBarContainer from "../nav_bar/nav_bar_container";

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
                return <BingeItemShow binge={binge} key={binge.id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BingeIndex);
