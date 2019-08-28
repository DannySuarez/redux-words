import { connect } from 'react-redux';
import { getTopWordsByTerm } from '../selectors/wordsSelectors';
import Word from '../components/words/Words';

const mapStatetoProps = (state, { match }) => ({
  dictionary: getTopWordsByTerm(state, match.params.count)
});

export default connect(mapStatetoProps)(Word);
