import words from '../fixtures/words';
import { UPDATE_SEARCH } from '../actions/wordsActions';

const initialState = {
  words,
  filter: ''
};

export default function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_SEARCH:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
