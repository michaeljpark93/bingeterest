import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // componentWillMount() {
  //   this.props.resetSearchResults();
  // }

  handleInput(e) {
    e.preventDefault();
    const { requestSearchResults } = this.props;
    const { searchQuery } = this.state;
    this.setState({ searchQuery: e.currentTarget.value },
      () => requestSearchResults(searchQuery));
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ searchQuery: '' });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="search-bar">
        <div className="search">
          <img src={window.images.mg} alt="" />
        </div>
        <input type="text" onChange={this.handleInput} placeholder="Search" value={searchQuery} />
      </div>
    );
  }
}
