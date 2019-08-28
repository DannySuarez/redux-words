import { connect } from 'react-redux';
import { getSearchTerm } from '../selectors/wordsSelectors';
import { updateSearchTerm } from '../actions/wordsActions';
import SearchForm from '../components/words/SearchForm';

const mapStateToProps = state => ({
  dictionary: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleOnChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
