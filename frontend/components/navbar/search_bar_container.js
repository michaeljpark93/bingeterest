import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestSearchResults, resetSearchResults } from '../../actions/search_actions';
import SearchBar from './search_bar.jsx';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  searchResults: entities.search,
});

const mapDispatchToProps = dispatch => ({
  requestSearchResults: query => dispatch(requestSearchResults(query)),
  resetSearchResults: () => dispatch(resetSearchResults()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
