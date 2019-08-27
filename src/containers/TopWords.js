import { connect } from 'react-redux';
import { getFirstWords } from '../selectors/wordsSelectors';
import Word from '../components/words/Words';

const mapStatetoProps = (state, { match }) => ({
  dictionary: getFirstWords(state, match.params.count)
});

export default connect(mapStatetoProps)(Word);
