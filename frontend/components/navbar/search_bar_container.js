import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './search_bar.jsx';
import { requestSearchResults, resetSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  searchResults: entities.searchResults,
});

const mapDispatchToProps = dispatch => ({
  requestSearchResults: query => dispatch(requestSearchResults(query)),
  resetSearchResults: () => dispatch(resetSearchResults()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
