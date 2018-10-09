import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      searchResults: null,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  componentWillMount() {
    this.props.resetSearchResults();
  }

  handleInput(e) {
    e.preventDefault();
    const { requestSearchResults } = this.props;
    const { searchQuery } = this.state;
    this.setState({ searchQuery: e.currentTarget.value },
      () => requestSearchResults(searchQuery)
        .then((data) => {
          this.setState({ searchResults: data.searchResults });
        }));
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ searchQuery: '' });
  }

  createList(items, type) {
    const listItems = items.map((item, idx) => {
      if (type === 'binges') {
        return (
          <li key={idx} onClick={this.handleReset}>
            <Link className="dropdown-item" to={`/${type}/${item.id}`}>
              <img className="photo-icon" src={item.photoUrl} alt="" />
              <span className="search-item">{item.description}</span>
            </Link>
          </li>
        );
      } if (type === 'boards') {
        return (
          <li key={idx} onClick={this.handleReset}>
            <Link className="dropdown-item" to={`/${type}/${item.id}`}>
              <span className="search-item">{item.name}</span>
              <span className="search-item">{item.description}</span>
            </Link>
          </li>
        );
      } if (type === 'users') {
        return (
          <li key={idx} onClick={this.handleReset}>
            <Link className="dropdown-item" to={`/${type}/${item.id}`}>
              <img className="photo-icon" src={item.photoUrl} alt="" />
              <span className="search-item">{item.username}</span>
            </Link>
          </li>
        );
      }
    });

    return (
      <div className="dropdown-categories">
        <h3 className="dropdown-type">{type}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  }

  renderSearchResults() {
    const { searchResults } = this.state;
    let bingesList;
    let usersList;
    let boardsList;

    if (searchResults && searchResults.binges) {
      bingesList = this.createList(searchResults.binges, 'binges');
    }
    if (searchResults && searchResults.boards) {
      boardsList = this.createList(searchResults.boards, 'boards');
    }
    if (searchResults && searchResults.users) {
      usersList = this.createList(searchResults.users, 'users');
    }
    return (
      <div className="dropdown-container">
        {bingesList || null}
        {usersList || null}
        {boardsList || null}
      </div>
    );
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="search-bar">
        <div className="search">
          <img src={window.images.mg} alt="" />
        </div>
        <input type="text" onChange={this.handleInput} placeholder="Search" value={searchQuery} />
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default SearchBar;
