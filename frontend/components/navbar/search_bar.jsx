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
    // this.renderSearchResults = this.renderSearchResults.bind(this);
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

  // createList(items, type) {
  //   const { resetSearchResults } = this.props;
  //   const listItems = items.map((item, idx) => (
  //     <li key={idx} onClick={this.handleReset}>
  //       <Link to={`/${type}/${item.id}`}>
  //         <span className="search-item">{item.name}</span>
  //       </Link>
  //     </li>
  //   ));
  // }

  // renderSearchResults() {
  //   const { searchResults } = this.props;
  //   const binges = searchResults.binges || [];
  //   const boards = searchResults.boards || [];
  //   const users = searchResults.users || [];

  //   let bingesList;
  //   let boardsList;
  //   let usersList;
  //   if (Object.keys(searchResults).length > 0) {
  //     bingesList = binges.length > 0 ? this.createList(binges, 'binges') : null;
  //     boardsList = boards.length > 0 ? this.createList(boards, 'boards') : null;
  //     usersList = users.length > 0 ? this.createList(users, 'users') : null;
  //   }

  //   return (
  //     <div className="dropdown-container">
  //       {bingesList || null}
  //       {boardsList || null}
  //       {usersList || null}
  //     </div>
  //   );
  // }

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

export default SearchBar;
